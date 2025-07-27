import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="How Our Solar Solutions Work"
          text="Experience clean, reliable, and affordable energy with our end-to-end solar services."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={1200}
                alt="Solar Panel Installation"
                height={800}
                src="https://i.pinimg.com/736x/dd/00/bc/dd00bc833ec59abda726c95be72e119a.jpg"
              />
            </div>

            <div className="relative z-1 max-w-[20rem] ml-auto">
              <h4 className="h4 mb-4">Custom Solar Design & Installation</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Our experts assess your energy needs and design a solar system tailored for your home or business. We handle the entire installation process for a seamless transition to solar.
              </p>
              <ul className="body-2">
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Free site assessment & consultation</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Custom system design for maximum efficiency</p>
                </li>
                <li className="flex items-start py-4 border-t border-n-6">
                  <img width={24} height={24} src={check} alt="check" />
                  <p className="ml-4">Professional installation by certified technicians</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://i.pinimg.com/736x/3d/70/38/3d7038db30335c1da9cb84506ef06267.jpg"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Solar Maintenance"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Maintenance & Monitoring</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  We provide ongoing maintenance and real-time monitoring to ensure your solar system operates at peak performance, year after year.
                </p>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Battery Storage & Energy Management</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Store excess solar energy for use at night or during outages. Our smart energy management solutions maximize your savings and energy independence.
                </p>

                <ul className="flex items-center justify-between">
                  <li className="flex flex-col items-center">
                    <img src={brainwaveServicesIcons[0]} width={24} height={24} alt="Battery" />
                    <span className="text-xs mt-2 text-n-3">Battery</span>
                  </li>
                  <li className="flex flex-col items-center">
                    <img src={brainwaveServicesIcons[1]} width={24} height={24} alt="Inverter" />
                    <span className="text-xs mt-2 text-n-3">Inverter</span>
                  </li>
                  <li className="flex flex-col items-center">
                    <img src={brainwaveServicesIcons[2]} width={24} height={24} alt="Monitoring" />
                    <span className="text-xs mt-2 text-n-3">Monitoring</span>
                  </li>
                  <li className="flex flex-col items-center">
                    <img src={brainwaveServicesIcons[3]} width={24} height={24} alt="EV Charger" />
                    <span className="text-xs mt-2 text-n-3">EV Charger</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="https://i.pinimg.com/736x/31/66/4f/31664f6a77a492e3f87b7b61bd71b7ea.jpg"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Solar Battery Storage"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
