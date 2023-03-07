import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";

import CoinbaseWalletIcon from "../svg/components/CoinbaseWalletIcon";
import ConnectWalletBtn from "../components/ConnectWalletBtn";
import Link from "next/link";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import MetaMaskIcon from "../svg/components/MetaMaskIcon";
import WalletConnectIcon from "../svg/components/WalletConnectIcon";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const ConnectWallet = () => {
  const { push } = useRouter();
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { signMessageAsync } = useSignMessage();

  const handleAuthClick = async () => {
    if (isConnected) await disconnectAsync();

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chain: chain.id, network: "evm" };

    const { data } = await axios.post("/api/auth/request-message", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const message = data.message;
    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("credentials", {
      message,
      signature,
      redirect: false,
    });
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16">
        <div className=" bg-white pr-0 md:pr-12">
          <h3 className="my-8 text-3xl font-black text-gray-700 mb-12">
            Connect Wallet
          </h3>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-4">
              <ConnectWalletBtn
                name="MetaMask"
                svg={<MetaMaskIcon />}
                onClick={handleAuthClick}
              />
              {/* <ConnectWalletBtn
                name="Wallet Connect"
                svg={<WalletConnectIcon />}
                onClick={handleClickBtn}
              />
              <ConnectWalletBtn
                name="Coinbase Wallet"
                svg={<CoinbaseWalletIcon />}
                onClick={handleClickBtn}
              /> */}
            </div>

            <div className="flex flex-col space-y-5">
              <div>
                <input
                  type="checkbox"
                  className="float-left mt-1 w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                />
                <p className="ml-6 text-sm font-normal">
                  By creating a wallet, I agree to the following Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </div>

          <span className="flex items-center justify-center space-x-2 mt-20 text-sm whitespace-nowrap">
            <span className="h-px bg-black w-14"></span>
            <span className="text-black font-bold">
              <Link href="/create-wallet">Don`t have a wallet? Sign up</Link>
            </span>
            <span className="h-px bg-black w-14"></span>
          </span>
        </div>

        <img
          className="w-full"
          src="./images/wallet-banner.png"
          alt="Wallet Banner"
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
