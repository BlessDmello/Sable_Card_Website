import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  // Partner logos data
  const partnerLogos = [
    {
      src: "public/61a6275de8840755a9570b67-logo-20--20yahoo-20finance-svg.svg",
      alt: "Yahoo Finance Logo",
      width: "123.97px",
    },
    {
      src: "public/61a6275dd539a123b240f117-logo-20--20bloomberg-svg.svg",
      alt: "Bloomberg Logo",
      width: "242.83px",
    },
    {
      src: "public/61a6275d9982843c69cde434-logo-20--20business-20insider-svg.svg",
      alt: "Business Insider Logo",
      width: "146.05px",
    },
    {
      src: "public/61a6275ef8821a79ae5c5085-logo-20--20forbes-svg.svg",
      alt: "Forbes Logo",
      width: "117.16px",
    },
  ];

  // Features data
  const features = [
    {
      icon: "public/frame-1.svg",
      title: "Get a secured credit card and bank account in 5 minutes.",
      description:
        "No credit history, credit check, or minimum deposit required.",
      position: "left",
    },
    {
      icon: "public/frame-5.svg",
      title: "Build your U.S. credit",
      description:
        "We believe in forming positive habits. Build your U.S. credit with Sable",
      position: "right",
    },
    {
      icon: "public/frame-18.svg",
      title: "The only premium card for building credit.",
      description:
        "2% unlimited cash back on your favorite brands, 2X first year cash back match, premium benefits and more!",
      position: "left",
    },
    {
      icon: "public/frame-11.svg",
      title: "Bank like a global citizen with Sable.",
      description:
        "Start building credit before you even enter the country. Non-U.S. citizens can apply with their passport and visa.",
      position: "right",
    },
  ];

  // Comparison table data
  const comparisonFeatures = [
    "No monthly fees or minimum balance",
    "Deposits FDIC insured up to $250,000",
    "Rewards, cash back & card perks",
    "Send checks & transfer money for free",
    "Build credit history from Day 1",
    "No credit check required for sign up",
  ];

  // Brand partners data
  const brandPartners = [
    {
      src: "public/group.png",
      alt: "Netflix Logo",
      width: "129px",
      height: "103px",
    },
    {
      src: "public/626bd221cdd51f2ed481200f-spotify-svg.svg",
      alt: "Spotify Logo",
      width: "130px",
      height: "130px",
    },
    {
      src: "public/626bd2218d811f9258275c9c-amazon-svg.svg",
      alt: "Amazon Logo",
      width: "126px",
      height: "130px",
    },
    {
      src: "public/626bd221b9b30b81b6b7f575-uber-20eats-svg.svg",
      alt: "Uber Eats Logo",
      width: "130px",
      height: "100px",
    },
    {
      src: "public/group-1.png",
      alt: "Brand Logo",
      width: "68px",
      height: "130px",
    },
    {
      src: "public/group-2.png",
      alt: "Brand Logo",
      width: "129px",
      height: "43px",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable's customer service helped me answer all the questions that I needed to switch.",
      author: "K Oiwake",
    },
    {
      quote:
        "The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!",
      author: "E Berhe",
    },
  ];

  // Footer links data
  const footerLinks = {
    products: [
      {
        title: "Sable Credit",
        links: ["Sable ONE Credit", "Credit Score Coming Soon"],
      },
      { title: "Sable Debit", links: [] },
      { title: "App", links: [] },
      { title: "Learn", links: ["FAQs", "About Sable"] },
    ],
    contact: {
      title: "Contact",
      links: ["Email: help@sablecard.com", "Location: New York, NY"],
    },
    social: [
      { icon: "public/frame-17.svg", alt: "Social Icon" },
      { icon: "public/frame-23.svg", alt: "Social Icon" },
      { icon: "public/frame-15.svg", alt: "Social Icon" },
      { icon: "public/frame-22.svg", alt: "Social Icon" },
      { icon: "public/frame-2.svg", alt: "Social Icon" },
    ],
  };

  return (
    <section className="w-full bg-black">
      {/* Hero Section */}
      <div className="w-full bg-[#1c1c1e]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col items-center mb-12">
            <Badge className="bg-transparent text-[#6fdbd4] mb-2">
              400,000 ACCOUNTS &amp; COUNTING
            </Badge>
            <h1 className="text-white text-4xl text-center leading-tight max-w-3xl">
              <span className="font-bold">
                No hidden fees. No credit checks.
              </span>{" "}
              <br />
              No more barriers to building credit.
            </h1>
          </div>

          <div className="relative border-b border-[#73757b] pb-16">
            <div className="relative h-[883px] bg-[url(public/626fc9f8e17c4aeb06615cf3-home-sub-mockup-p-1600-png.png)] bg-contain bg-no-repeat bg-center">
              {/* Left features */}
              <div className="absolute top-[207px] left-0 max-w-[261px]">
                <div className="w-[39px] h-[39px] bg-[url(public/frame-1.svg)] bg-cover mb-5" />
                <h3 className="text-white text-xl leading-snug mb-2">
                  Get a secured credit <br/> card and bank account <br/> in 5 minutes.
                </h3>
                <p className="text-[#a0a1a8] text-sm">
                  No credit history, credit check, or minimum deposit required.
                </p>
              </div>

              {/* Right features */}
              <div className="absolute top-[207px] right-0 max-w-[261px] text-right">
                <div className="w-[39px] h-[39px] bg-[url(public/frame-5.svg)] bg-cover mb-5 ml-auto" />
                <h3 className="text-white text-xl leading-snug mb-2">
                  Build your U.S. credit
                </h3>
                <p className="text-[#a0a1a8] text-sm">
                  We believe in forming positive habits. Build your U.S. credit
                  with Sable
                </p>
              </div>

              {/* Bottom left features */}
              <div className="absolute top-[482px] left-0 max-w-[261px]">
                <div className="w-[39px] h-[39px] bg-[url(public/frame-18.svg)] bg-cover mb-5" />
                <h3 className="text-white text-xl leading-snug mb-2">
                  The only premium card <br/> for building credit.
                </h3>
                <p className="text-[#a0a1a8] text-sm">
                  2% unlimited cash back on your <br/> favorite brands, 2X first year
                  cash <br/> back match, premium benefits <br/> and more!
                </p>
              </div>

              {/* Bottom right features */}
              <div className="absolute top-[482px] right-0 max-w-[261px] text-right">
                <div className="w-[39px] h-[39px] bg-[url(public/frame-11.svg)] bg-cover mb-5 ml-auto" />
                <h3 className="text-white text-xl leading-snug mb-2">
                  Bank like a global<br/> citizen with Sable.
                </h3>
                <p className="text-[#a0a1a8] text-sm">
                  Start building credit before you even enter the country.
                  Non-U.S. citizens <br/> can apply with their passport and <br/>visa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="overflow-hidden py-12">
          <div className="flex space-x-64 items-center justify-center">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="h-12"
                alt={logo.alt}
                src={logo.src}
                style={{ width: logo.width }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Credit Card Section */}
      {/* <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              className="w-full max-w-[589px]"
              alt="Sable Credit Card"
              src="public/626a7b28ec05560030a525bd-v2-front-01-20-1--201-png.png"
            />
          </div>
        </div>
      </div> */}

      {/* Debit Card Section */}
      <div className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                className="w-full max-w-[590px] -mt-10"
                alt="Sable Debit Card"
                src="public/61b78771b6d53e031df204a5-sable-card-debit-render-p-500-png.png"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-normal mb-6">
                <span className="text-black">
                  Get a bank account &amp; debit card{" "}
                </span>
                <br />
                <span className="text-[#1fc6bb]">in five minutes.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1c1c1e]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6 md:p-24">
            <div className="space-y-12">
              <div className="border-t border-[#c4c4c463] pt-12">
                <h3 className="text-white text-3xl font-medium mb-3">
                  Earn 2% cash back on <br/> favorite brands
                </h3>
                <p className="text-white text-lg">
                  <span>Earn 2%</span>
                  <sub className="text-xs">1</sub>
                  <span> cash back on favorite brands, 1%</span>
                  <sub className="text-xs">1</sub>
                  <span>
                    {" "}
                    cashback on <br /> all purchases, and a 2x cashback match in your
                    first <br /> year! Get premium benefits and much more.
                  </span>
                </p>
              </div>

              <div className="border-t border-[#c4c4c41f] pt-12">
                <h3 className="text-[#ffffff4c] text-3xl font-medium mb-3">
                  Moving to the U.S.? No SSN required
                </h3>
                <p className="text-[#ffffff4c] text-lg">
                  Start building credit before you even enter the country. Sign
                  up  <br /> with your international address, passport &amp; visa
                  instead**.
                </p>
              </div>

              <div className="border-t border-[#c4c4c41f] pt-12">
                <h3 className="text-[#ffffff4c] text-3xl font-medium mb-3">
                  Get help from a real person
                </h3>
                <p className="text-[#ffffff4c] text-lg">
                  When you've got questions about your finances, get  <br />
                  multilingual customer support anytime you need from  <br /> direct
                  in-app chat, email, phone, and our site FAQs.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-[#ebebf1ed]">
            <div className="p-12 grid grid-cols-2 gap-12 relative">
              {/* Brand partner logos in grid */}
              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="relative h-[130px] w-[130px]">
                  <img
                    className="absolute w-[129px] h-[103px] top-[25px]"
                    alt="Netflix Logo"
                    src="public/group.png"
                  />
                </div>
              </div>

              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="relative h-[130px] w-[69px]">
                  <img
                    className="w-full h-full"
                    alt="Brand Logo"
                    src="public/group-1.png"
                  />
                </div>
              </div>

              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="w-[130px] h-[130px] bg-[url(public/626bd221cdd51f2ed481200f-spotify-svg.svg)] bg-contain bg-no-repeat bg-center" />
              </div>

              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="w-[130px] h-[100px] bg-[url(public/626bd221b9b30b81b6b7f575-uber-20eats-svg.svg)] bg-contain bg-no-repeat bg-center" />
              </div>

              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="relative w-[130px] h-[130px]">
                  <img
                    className="w-[126px] h-[130px]"
                    alt="Amazon Logo"
                    src="public/626bd2218d811f9258275c9c-amazon-svg.svg"
                  />
                </div>
              </div>

              <div className="bg-[#ffffffed] rounded-[36.69px] flex items-center justify-center p-10 h-[216px]">
                <div className="w-[130px] h-[43px]">
                  <img
                    className="w-[129px] h-[43px]"
                    alt="Brand Logo"
                    src="public/group-2.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden mb-16">
            <h2 className="text-white text-7xl font-medium whitespace-nowrap">
              Compare Sable
              <span className="inline-block w-4 h-4 bg-white rounded-lg mx-4"></span>
              Compare Sable
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <img
                  className="w-[266px] h-[124px] mb-5"
                  alt="Sable Credit and Debit Card"
                  src="public/61b0a95e1cdb65fc116b772b-visual-20--20compare-20--20credit-20deb.png"
                />
                <h3 className="text-[#10aca2] text-2xl">
                  Sable Secured  <br /> Credit &amp; Debit Card
                </h3>
              </div>
              <div className="col-span-1">
                <img
                  className="w-[197px] h-[124px] mb-5"
                  alt="Sable Debit Card"
                  src="public/61b0a95e134742527aaa4111-visual-20--20compare-20--20debit-png.png"
                />
                <h3 className="text-[#10aca2] text-2xl">
                  Sable Debit
                  <br />
                  Card
                </h3>
              </div>
            </div>

            <div className="mt-8">
              {comparisonFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-8 border-t border-b border-[#2f2f2f] py-4"
                >
                  <div className="col-span-1 text-white text-sm flex items-center">
                    {feature}
                  </div>
                  <div className="col-span-1 flex justify-start items-center">
                    <div className="w-[19px] h-[19px] bg-[url(public/frame-6.svg)] bg-cover"></div>
                  </div>
                  <div className="col-span-1 flex justify-start items-center">
                    {index < 4 ? (
                      <div className="w-[19px] h-[19px] bg-[url(public/frame-6.svg)] bg-cover"></div>
                    ) : (
                      <div className="w-[19px] h-[19px] bg-[url(public/frame-19.svg)] bg-cover"></div>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-8 py-6">
                <div className="col-span-1 text-white text-sm flex items-center">
                  Cost per year
                </div>
                <div className="col-span-1 flex justify-start items-center">
                  <div className="text-white text-4xl">
                    $0 <span className="text-[#a0a1a8] text-xs">/year</span>
                  </div>
                </div>
                <div className="col-span-1 flex justify-start items-center">
                  <div className="text-white text-4xl">
                    $0 <span className="text-[#a0a1a8] text-xs">/year</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 py-6">
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <Button className="bg-[#6fdbd4] text-black rounded-full text-xs tracking-widest">
                    GET CREDIT &amp; DEBIT
                  </Button>
                </div>
                <div className="col-span-1">
                  <Button className="bg-[#6fdbd4] text-black rounded-full text-xs tracking-widest">
                    GET DEBIT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-16">
            <h2 className="text-white text-7xl font-medium">4.8</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#1c1c1e] rounded-[19.31px] border-none"
              >
                <CardContent className="p-12">
                  <div className="w-[39px] h-[31px] bg-[url(public/frame-3.svg)] bg-cover mb-8"></div>
                  <p className="text-white text-2xl mb-16">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-[62px] h-1 bg-white"></div>
                    <div className="ml-5 text-white font-bold">
                      {testimonial.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="rounded-[19.31px] border-none overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="absolute inset-0 bg-[#00000080]"></div>
              <div className="bg-[url(public/video-a230dc08-a09a-a65c-d1dc-47cc93605977-video.png)] bg-cover bg-center h-[412px]"></div>
              <div className="absolute inset-0 p-16 flex flex-col justify-end">
                <div className="flex justify-between items-end w-full">
                  <div className="max-w-lg">
                    <h2 className="text-white text-5xl mb-4 whitespace-nowrap">
                      Join <span>over</span> <span className="text-6xl">400,000</span> <span>accounts</span>
                    </h2>
                    <p className="text-white text-lg">
                      Download Sable: effortless, borderless banking for a <br/> more
                      connected world.
                    </p>
                  </div>
                  <div className="flex space-x-6">
                    <img
                      className="w-[185px]"
                      alt="Google Play"
                      src="public/619cbf878e9721de86aa4bde-icon-google-play-svg.svg"
                    />
                    <img
                      className="w-[185px]"
                      alt="App Store"
                      src="public/619cbf86ffe78e34b9138bb1-icon-app-store-svg.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-2xl font-medium mb-4">
                  Sable Credit
                </h3>
                <ul className="space-y-2">
                  <li className="text-white">Sable ONE Credit</li>
                  <li>
                    <span className="text-white">Credit Score </span>
                    <span className="text-[#1fc6bb]">Coming Soon</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-2xl font-medium mb-4">
                  Sable Debit
                </h3>
              </div>
              <div>
                <h3 className="text-white text-2xl font-medium mb-4">App</h3>
              </div>
              <div>
                <h3 className="text-white text-2xl font-medium mb-4">Learn</h3>
                <ul className="space-y-2">
                  <li className="text-white">FAQs</li>
                  <li className="text-white">About Sable</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="flex justify-between mb-60">
                <div>
                  <h3 className="text-white text-2xl font-medium mb-4">
                    Contact
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-white">Email: help@sablecard.com</li>
                    <li className="text-white">Location: New York, NY</li>
                  </ul>
                </div>
                <div className="w-[247px] h-[60px] bg-[url(public/frame-4.svg)] bg-cover"></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex space-x-8">
                  {footerLinks.social.map((item, index) => (
                    <div
                      key={index}
                      className="w-[30px] h-[30px]"
                      style={{
                        backgroundImage: `url(${item.icon})`,
                        backgroundSize: "100% 100%",
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-white text-sm">
                  © Sable Money Inc, all rights reserved.
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12 border-[#2f2f2f]" />

          <div>
            <div className="text-[#73757b] text-xs mb-8">
              Privacy policy | Terms and conditions
            </div>

            <div className="text-[#73757b] text-xs space-y-4">
              <p>
                *Banking services provided by Coastal Community Bank, Member
                FDIC, pursuant to license by Mastercard International Inc.
                <br />
                Sable account is FDIC-insured up to $250,000 per depositor
                through Coastal Community Bank, Member FDIC.
                <br />
                **If you are not a U.S. citizen, you can apply with your
                passport and U.S. Visa. Please note: you must submit an SSN once
                you receive one. If you are a U.S. citizen, SSN is required to
                open a bank account.
                <br />
                *** Double cashback bonus (through 12/2022)
              </p>

              <ul className="space-y-1 pl-4">
                <li>
                  Please see www.sablecard.com/terms-and-conditions#creditrnb
                  for terms and conditions. Some exclusions apply.
                </li>
                <li>
                  Please see www.sablecard.com/terms-and-conditions for terms
                  and conditions.
                </li>
                <li>
                  This benefit is provided by MasterCard. Benefits are subject
                  to terms, conditions and limitations, including limitations on
                  the amount of coverage. Please see the terms and conditions.
                </li>
                <li>Sable estimated annual value</li>
                <li>Sable product comparisons</li>
              </ul>

              <p>† Sable Remittance Best Rate Guarantee Terms</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
