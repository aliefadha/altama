import { League_Spartan } from "next/font/google";
import Image from "next/image";

const leagueSpartan = League_Spartan({
    variable: "--font-league_spartan",
    subsets: ["latin"]
})


export default function HeroSection() {
    return (
        <div className="relative w-full h-screen min-h-150 lg:min-h-175 bg-[#353185] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    alt="foto61"
                    fill
                    className="w-full h-full object-cover"
                    src="/images/0c1d2a3b7eb424e2f5d2bfe8c72d39db643b8338.png"
                />
                {/* Gradient overlay - darker on mobile for better text readability */}
                <div className="absolute inset-0 bg-linear-to-b from-[rgba(53,49,133,0.92)] via-[rgba(53,49,133,0.88)] to-[rgba(53,49,133,0.85)] lg:bg-linear-to-r lg:from-[rgba(53,49,133,0.85)] lg:via-[rgba(53,49,133,0.5)] lg:via-35% lg:to-transparent lg:to-60%" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-360 mx-auto px-5 lg:px-[80px] h-full flex flex-col justify-center pb-20 pt-20 lg:pb-0 lg:pt-0 lg:-mt-[60px]">
                {/* Badge with purple background */}
                <div className="inline-flex mb-5 lg:mb-[35px] px-4 lg:px-4 py-2 lg:py-2 rounded-full lg:rounded-[26px] bg-[#353185] border border-[#403BA0] w-fit">
                    <p className="text-white font-['League_Spartan'] text-[13px] lg:text-[18px] tracking-tight lg:tracking-[-0.56px]">
                        #AltamaGueBanget
                    </p>
                </div>

                {/* Main Heading with yellow background on INNOVATION */}
                <h1 className={`${leagueSpartan.className} text-white font-['League_Spartan'] font-bold text-[34px] lg:text-[54px] leading-[1.15] lg:leading-[1.2] tracking-tight lg:tracking-[-1.68px] max-w-full lg:max-w-[580px] mb-4 lg:mb-4`}>
                    THE POWER OF
                    <br />
                    <span className="relative inline-block my-1 lg:my-0.5">
                        <span className="absolute inset-0 bg-[#f4c41c] rounded-lg lg:rounded-[8px] border-[2px] lg:border-[3px] border-[#353185] -left-[4px] -right-[4px] -top-[2px] lg:-top-[4px] bottom-[4px] lg:bottom-[5px]"></span>
                        <span className="relative z-10 text-white px-1 lg:px-[4px]">INNOVATION</span>
                    </span>{' '}
                    FOR A
                    <br />
                    STRONGER NATION.
                </h1>

                {/* Subtitle */}
                <p className="text-[#e4e4e4] text-[15px] lg:text-[18px] font-['Inter'] leading-relaxed lg:leading-[1.4] tracking-tight lg:tracking-[-0.64px] max-w-full lg:max-w-[520px]">
                    Your partner in progress, empowering every step toward Indonesia&apos;s success.
                </p>
            </div>

            {/* Decorative Image - hidden on mobile */}
            <div className="hidden lg:block absolute left-0 right-0 bottom-[-10px] z-[5]">
                <div className="max-w-360 mx-auto px-[80px]">
                    <Image
                        alt="decorative"
                        width={240}
                        height={300}
                        className="w-auto h-[300px] object-contain ml-[40px]"
                        src="/images/de3b537a0eb96eb5d5bd7bb64cbdaa6228608132.png"
                    />
                </div>
            </div>

            {/* Brand Logos - aligned with content */}
            <div className="absolute left-0 right-0 bottom-6 lg:bottom-[80px] z-10">
                <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
                    <Image
                        alt="Brand Logos - TEKIRO, REXCO, RYU"
                        width={220}
                        height={40}
                        className="h-[36px] lg:h-[50px] w-auto object-contain"
                        src="/images/4b5235fe13d1739052f84d08402cd513d8821c23.png"
                    />
                </div>
            </div>
        </div>
    );
}