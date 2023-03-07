const GeoSpoofing = () => {
  const renderCommonParagraph = (text) => {
    return <p className="text-md mb-5">{text}</p>;
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <h1 className="text-4xl font-black mt-32">Geo Spoofing</h1>

      <div className="flex flex-wrap gap-12 mt-10">
        <div className="w-full sm:w-full md:w-5/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12">
          <h3 className="text-[#597dff] text-lg mb-5 font-black">
            What are spoofing and geospoofing?
          </h3>
          {renderCommonParagraph(
            "Spoofing is defined as a situation in which a person/program disguises a communication request from an unknown source as a trusted one to a specific source of information for illegitimate purposes. Geospoofing is a process of changing a particular person’s location or country online so you can appear to be in a location of your choice. It is typically done using a VPN."
          )}

          <h3 className="text-[#597dff] text-lg mb-5 font-black">
            Types of Spoofing
          </h3>
          <div className="grid grid-cols-2 gap-2 justify-between mb-4">
            <p className="text-md">- Email Spoofing</p>
            <p className="text-md">- SSL/TLS Spoofing</p>

            <p className="text-md">- IP Spoofing</p>
            <p className="text-md">- Biometric spoofing</p>

            <p className="text-md">- DNS Spoofing</p>
            <p className="text-md">- Video Spoofing</p>

            <p className="text-md">- Caller ID Spoofing</p>
            <p className="text-md">- USB Spoofing</p>

            <p className="text-md">- GPS Spoofing</p>
            <p className="text-md">- BGP Hijacking</p>

            <p className="text-md">- Wi-Fi - Spoofing</p>
            <p className="text-md">- MAC Spoofing</p>

            <p className="text-md">- SMS - Spoofing</p>
            <p className="text-md">- Fax Spoofing</p>

            <p className="text-md">- ARP Spoofing</p>
            <p className="text-md">- RFID Spoofing</p>
          </div>

          <h3 className="text-[#597dff] text-lg mb-5 font-black">
            What type of spoofing is suitable for E[AR]TH?
          </h3>
          {renderCommonParagraph(
            "GPS spoofing is a technique used to deceive GPS receivers by broadcasting false GPS signals, causing the receivers to calculate inaccurate positions or time stamps."
          )}
        </div>
        <div className="flex flex-row justify-center rounded-3xl w-full sm:w-full md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
          <div className="w-full sm:w-full">
            <h3 className="text-[#597dff] text-lg mb-5 font-black">
              Using Geospatial API (Google):
            </h3>
            {renderCommonParagraph("By doing the following steps:")}

            {renderCommonParagraph(
              "1. Using Geospatial API, verify the user’s location. This can be done by sending a request to the API with the user’s GPS coordinates and receiving a response with information about the location"
            )}
            {renderCommonParagraph(
              "2. API will collect the user’s information like the user’s IP address, Wi-Fi network, or cell tower information to provide additional verification."
            )}
            {renderCommonParagraph(
              "3. Implementing a custom ML model that can detect anomalies, for example, the algorithm can detect if the user’s location suddenly jumps along distance, if the location data is inconsistent with other location data sources, or if the GPS signal strength is unusually high or low."
            )}

            {renderCommonParagraph(
              "4. To implement anti-spoofing measures, we can include features like using encrypted GPS signals, multi-sensor fusion, or other location-independent data sources. "
            )}
            {renderCommonParagraph(
              "5. Metaverse platforms can monitor for suspicious activities such as the use of VPNs or proxy servers so with this we can further ensure security measures by analyzing network traffic or using tools such as IP geolocation to detect inconsistencies."
            )}
            {renderCommonParagraph(
              "6. Geofencing can be implemented to verify that the users only have access to specific areas within the Metaverse that match their verified location."
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 mt-8">
        <img src="./images/geoSpoofing/ingress.png" alt="Ingress" />
      </div>
    </div>
  );
};

export default GeoSpoofing;
