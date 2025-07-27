import { brainwaveSymbol, check } from "../assets";
import { disc02, recording01, recording03, chromecast, sliders04, plusSquare } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <>
      <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Power Your Home with Clean Solar Energy
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Sunwave</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Switch to solar and enjoy lower energy bills, a smaller carbon footprint, and reliable power for your home or business. Our expert team will guide you every step of the way.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src="https://i.pinimg.com/1200x/aa/a1/c3/aaa1c3f586ad413d9d5304fab81ac7da.jpg"
                    width={48}
                    height={48}
                    alt="solar company logo"
                  />
                </div>
              </div>
            </div>

   

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
    
    {/* Solar Accessories Section */}
    <Section id="accessories" className="mt-20">
    <div className="container">
      <h2 className="h3 text-center mb-8">Solar Accessories We Offer</h2>
      <p className="body-2 text-n-4 text-center mb-12 max-w-2xl mx-auto">
        Enhance your solar experience with our range of high-quality accessories designed for efficiency, safety, and convenience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Accessory Card: Solar Inverters */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://static.csisolar.com/wp-content/uploads/2019/11/18134013/Global-Inverter-2023-Mobile.png"
            alt="Solar Inverter"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={disc02} alt="Inverter Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Solar Inverters</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              Convert DC to AC power efficiently with our advanced inverters, ensuring optimal performance for your solar system.
            </p>
          </div>
        </div>
        {/* Accessory Card: Solar Batteries */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://m.media-amazon.com/images/I/511YP7zKE-L._UF894,1000_QL80_.jpg"
            alt="Solar Battery"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={recording01} alt="Battery Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Solar Batteries</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              Store excess solar energy for use at night or during outages with our reliable battery solutions.
            </p>
          </div>
        </div>
        {/* Accessory Card: Mounting Structures */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://image.made-in-china.com/2f0j00riNlYngJLyRM/Solar-Ground-Mounting-System-Solar-Panel-Mounting-Structure-Bracket.webp"
            alt="Mounting Structures"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={plusSquare} alt="Mounting Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Mounting Structures</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              Durable and weather-resistant mounting systems for rooftops, ground, and custom installations.
            </p>
          </div>
        </div>
        {/* Accessory Card: Charge Controllers */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://enkonnsolar.com/wp-content/uploads/2023/07/Solar-charge-controller-with-LCD-Screen.jpg.webp"
            alt="Charge Controller"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={recording03} alt="Controller Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Charge Controllers</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              Protect your batteries and optimize charging with our intelligent charge controllers.
            </p>
          </div>
        </div>
        {/* Accessory Card: Cables & Connectors */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://renewablewatch.in/wp-content/uploads/2023/05/RW-42-678x381.jpg"
            alt="Cables & Connectors"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={chromecast} alt="Cables Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Cables & Connectors</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              High-quality, weatherproof cables and connectors for safe and efficient energy transfer.
            </p>
          </div>
        </div>
        {/* Accessory Card: Monitoring Systems */}
        <div className="relative group rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-n-6 bg-n-8" style={{ minHeight: '18rem' }}>
          <img
            src="https://s46661.pcdn.co/wp-content/uploads/2024/10/solar-energy-monitoring-system-display-showing-real-time-data-on-production.jpeg"
            alt="Monitoring Systems"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-300 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <img src={sliders04} alt="Monitoring Icon" className="w-7 h-7 drop-shadow-lg group-hover:animate-bounce" />
              <h4 className="h5 text-n-1 drop-shadow-lg">Monitoring Systems</h4>
            </div>
            <p className="body-3 text-n-2 drop-shadow-lg line-clamp-3">
              Track your solar system’s performance in real-time with our smart monitoring solutions.
            </p>
          </div>
        </div>
      </div>
          </div>
    </Section>
    </>
  );
};

export default Collaboration;
