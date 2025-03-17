import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-screen h-screen overflow-hidden bg-transparent -ml-[calc((100vw-100%)/2)] mr-[calc((100vw-100%)/2)]">
      <div className="relative h-full">
        {/* Background image */}
        <div
          className="w-full h-full bg-[url(public/61b722a29eb495746821350c-sable-frame-jpg.png)] bg-cover bg-center"
          aria-hidden="true"
        />

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Heading text */}
          <div className="text-center text-white mb-12">
            <h1 className="flex flex-wrap justify-center [font-family:'Inter',Helvetica] tracking-[1.24px] leading-[74.2px]">
              <span className="text-[59.8px] font-normal mr-4">The</span>
              <span className="text-[56.8px] font-normal mr-4">fastest,</span>
              <span className="text-[59.8px] font-normal">most</span>
            </h1>

            <h1 className="flex flex-wrap justify-center [font-family:'Inter',Helvetica] tracking-[1.24px] leading-[74.2px]">
              <span className="text-[61.8px] font-normal mr-4">premium</span>
              <span className="text-[61.8px] font-normal mr-4">path</span>
              <span className="text-[59.8px] font-normal">to</span>
            </h1>

            <h1 className="flex flex-wrap justify-center [font-family:'Inter',Helvetica] tracking-[1.24px] leading-[74.2px]">
              <span className="text-[59.8px] font-bold mr-4">financial</span>
              <span className="text-[57.8px] font-bold">freedom</span>
            </h1>
          </div>

          {/* Explore button */}
          <Button className="bg-[#6fdbd4] text-black rounded-[154.48px] px-12 py-7 hover:bg-[#5ec9c2]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[13.4px] tracking-[0.39px] leading-[18.5px]">
              EXPLORE
            </span>
          </Button>
        </div>

        {/* Footer disclaimer */}
        <div className="absolute bottom-12 left-12 flex items-center">
          <div className="w-14 h-[22px] bg-[url(public/frame.svg)] bg-[100%_100%] mr-4" />
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#a0a1a8] text-[9.7px] tracking-[0.19px] leading-[11.6px] max-w-[323px]">
            Banking services provided by Coastal Community Bank, Member FDIC,
            pursuant to license by Mastercard International Inc.
          </p>
        </div>
      </div>
    </header>
  );
};