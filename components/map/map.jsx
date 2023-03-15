import { MapContainer, TileLayer } from "react-leaflet";
import React, { useCallback, useEffect, useState } from "react";

import CameraPopup from "../CameraPopup";
import ChosenSquares from "./ChosenSquares";
import Grid from "./Grid";
import Loading from "../Loading";
import SearchIcon from "../../svg/components/SearchIcon";
import { useSession } from "next-auth/react";
import what3words from "@what3words/api";

const GREEN = "#1ec716";
const options = {
  enableHighAccuracy: true,
};

const Map = () => {
  const { data: session } = useSession();
  const [hasAccessToLocation, setHasAccessToLocation] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);
  const [chosenSquares, setChosenSquares] = useState(null);
  const [initGetUserData, setInitGetUserData] = useState(false);
  const [initialCoords, setInitialCoords] = useState();
  const [words, setWords] = useState("");
  const [moveEnd, setMoveEnd] = useState(0);

  const [lineRight, setLineRight] = useState(0);
  const [lineBottom, setLineBottom] = useState(0);
  const [lineOpacity, setLineOpacity] = useState(1);

  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const api = what3words();
  api.setApiKey(process.env.NEXT_PUBLIC_API_KEY);

  const getUserData = useCallback(async () => {
    const responseData = await fetch(
      `/api/connectDB?walletAddress=${session?.user?.address || ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((error) => {
      console.error("There was an error!", error);
    });

    const response = await responseData.json();

    setInitGetUserData(true);
    setChosenSquares(response.data[response.data.length - 1]?.words || []);
  }, [session?.user?.address]);

  useEffect(() => {
    if (initGetUserData) return;

    getUserData();
  }, [getUserData, initGetUserData, session]);

  useEffect(() => {
    if (hasAccessToLocation || chosenSquares === null) return;

    const id = navigator.geolocation.watchPosition(
      (position) => {
        setHasAccessToLocation(true);
        const {
          coords: { latitude: lat, longitude: lng },
        } = position;

        if (
          !initialCoords ||
          (initialCoords[0] !== lat && initialCoords[1] !== lng)
        ) {
          setInitialCoords([lat, lng]);

          api
            .convertTo3wa({
              coordinates: { lat, lng },
            })
            .then((res) => {
              console.log("res.words", res.words);

              if (!chosenSquares.includes(res.words)) {
                setWords(res.words);
                setChosenSquares([...chosenSquares, res.words]);
              }
            })
            .catch((err) => {
              setHasAccessToLocation(false);
              console.error(err);
            });
        }
      },
      (err) => {
        setHasAccessToLocation(false);
        console.error(err);
      },
      options
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [api, chosenSquares, hasAccessToLocation, initialCoords]);

  useEffect(() => {
    if (isClaiming) return;

    const el = document.getElementsByClassName(words + GREEN.slice(1))[0];

    //TODO bug here with show - My Location
    if (el) {
      const rect = el.getBoundingClientRect();
      setLineRight(rect.left - 50);
      setLineBottom(rect.bottom - 60);
      setLineOpacity(1);
    }
  }, [moveEnd, chosenSquares, isClaiming, words]);

  const startTracking = () => {
    setIsClaiming(true);
  };

  const finishTracking = () => {
    setIsClaiming(false);
    setClaimed(true);
    setIsPopupOpened(true);
  };

  if (!hasAccessToLocation || !initialCoords) return <Loading />;

  return (
    <div className="relative">
      <MapContainer
        center={initialCoords}
        zoom={19}
        maxZoom={21}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt1", "mt2", "mt3"]}
          maxNativeZoom={19}
          minZoom={4}
          maxZoom={21}
        />
        <Grid
          api={api}
          setMoveEnd={setMoveEnd}
          setLineOpacity={setLineOpacity}
        />
        {chosenSquares?.length !== 0 && (
          <ChosenSquares
            api={api}
            chosenSquares={chosenSquares}
            isClaiming={isClaiming}
            words={words}
            setMoveEnd={setMoveEnd}
            claimed={claimed}
            moveEnd={moveEnd}
          />
        )}
      </MapContainer>
      {!isClaiming && (
        <div
          className="z-[400] absolute text-blue-500 text-sm font-bold"
          style={{
            top: lineBottom + 15 + "px",
            left: lineRight + 50 + "px",
            opacity: lineOpacity,
          }}
        >
          My Location
        </div>
      )}
      {words && (
        <div className="absolute top-20 right-5 z-[401]">
          <div className="flex">
            <div className="hidden relative md:block w-[40rem]">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <SearchIcon />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                defaultValue={words}
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "2rem",
          right: "2rem",
          fontSize: "13px",
          padding: "5px",
          zIndex: 401,
        }}
      >
        <div className="relative w-[fit-content]">
          <div className="flex p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <div className="py-2 px-2">{words}</div>
            <div className="flex flex-row-reverse">
              {isClaiming ? (
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg px-6 py-2"
                  onClick={finishTracking}
                >
                  Claim Land
                </button>
              ) : !session ? (
                <button
                  onClick={() => {
                    alert("Please Authenticate to Claim tile");
                  }}
                  type="button"
                  className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-6 py-2"
                >
                  Claim Tile
                </button>
              ) : (
                <button
                  onClick={startTracking}
                  type="button"
                  className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-6 py-2"
                >
                  Claim Tile
                </button>
              )}
            </div>
          </div>
          {isPopupOpened ? (
            <CameraPopup
              setHasAccessToLocation={setHasAccessToLocation}
              setIsOpened={setIsPopupOpened}
              chosenSquares={chosenSquares}
            />
          ) : null}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
