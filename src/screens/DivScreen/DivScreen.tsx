import React from "react";
import { Button } from "../../components/ui/button";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const DivScreen = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { text: "CREDIT", hasIndicator: true },
    { text: "DEBIT", hasIndicator: false },
    { text: "APP", hasIndicator: false },
    { text: "LEARN", hasIndicator: true },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      {/* Main layout container */}
      <div className="relative w-full flex flex-col">
        {/* Top Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-12 py-8 flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-[111px] h-[29px]">
            <img
              className="absolute w-[22px] h-[30px] -top-px left-[-3px]"
              alt="Mask group"
              src="/mask-group.png"
            />
            <img
              className="w-[23px] left-5 absolute h-[23px] top-1.5"
              alt="Mask group"
              src="/mask-group-1.png"
            />
            <div className="absolute w-[23px] h-[29px] top-0 left-[47px]">
              <div className="absolute w-[13px] h-7 top-0 left-0 bg-[url(/group-3.png)] bg-[100%_100%]" />
              <img
                className="w-5 left-[3px] absolute h-[23px] top-1.5"
                alt="Mask group"
                src="/mask-group-2.png"
              />
            </div>
            <div className="absolute w-1.5 h-7 top-0 left-[74px] bg-[url(/group-4.png)] bg-[100%_100%]" />
            <img
              className="w-6 left-[82px] absolute h-[23px] top-1.5"
              alt="Mask group"
              src="/mask-group-3.png"
            />
            <div className="absolute w-px h-px top-[26px] left-[111px]">
              <img
                className="absolute w-1.5 h-1.5 top-[-3px] left-[-3px]"
                alt="Group"
                src="/group-5.png"
              />
            </div>
          </div>

          {/* Navigation menu */}
          <div className="flex items-center gap-12">
            {navItems.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="font-medium text-[14.4px] tracking-[0.22px] leading-[18.5px] text-[#f0f0f0] whitespace-nowrap">
                  {item.text}
                </div>
                {item.hasIndicator && (
                  <div className="absolute w-1.5 h-1.5 top-1/2 right-[-15px] transform -translate-y-1/2 bg-[#1fc6bb] rounded-[2.89px]" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant="default"
            className="bg-white text-black rounded-[135.17px] h-[47px] w-[191px] text-[12.5px] tracking-[1.35px] font-normal"
          >
            OPEN AN ACCOUNT
          </Button>
        </nav>

        {/* Header section */}
        <HeaderSection />

        {/* Main content section */}
        <MainContentSection />
        </div>
      </div>
  );
};