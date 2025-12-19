import Image from "next/image";

export default function CompanyOverviewHeroSection() {
    return (
        <div className="relative w-full">
            {/* Wrapper untuk responsive */}
            <div className="relative w-full h-[400px] lg:h-[1080px] overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#353185] via-[#4a46a4] via-[63.245%] to-[#353185]" />

                {/* Content - Centered and responsive */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 lg:px-20">
                    <div className="max-w-full lg:max-w-[882px] text-center">
                        {/* Title with yellow highlight */}
                        <div className="mb-6 lg:mb-8">
                            <h1 className="text-[28px] lg:text-[93px] font-['League_Spartan'] font-semibold leading-tight lg:leading-[0.945] tracking-tight lg:tracking-[-1.86px] text-white">
                                Our Vision, Mission{' '}
                                <span className="relative inline-block">
                                    <span className="absolute inset-0 bg-[#f4c41c] rounded-lg -left-2 -right-2 -top-1 bottom-1 lg:-left-3 lg:-right-3 lg:-top-2 lg:bottom-2"></span>
                                    <span className="relative z-10 px-1">&</span>
                                </span>{' '}
                                Company Values
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-[14px] lg:text-[24px] font-['Inter'] leading-relaxed lg:leading-normal tracking-tight lg:tracking-[-0.96px] text-[#e4e4e4] max-w-full lg:max-w-[570px] mx-auto">
                            Fondasi yang membentuk Altama Surya Anugerah dalam berkarya dan berkembang.
                        </p>
                    </div>
                </div>

                {/* Brand Logos at bottom - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex absolute left-1/2 bottom-20 -translate-x-1/2 gap-4">
                    <div className="backdrop-blur-sm bg-gradient-to-b from-[rgba(101,97,158,0.77)] to-[rgba(80,76,143,0.77)] border border-[#403c90] rounded-lg px-6 py-4 w-[156px] h-[77px] flex items-center justify-center">
                        <Image fill alt="Tekiro" className="max-w-full max-h-full object-contain" src="/images/2666269782fd241693d8b28321b227ad582d9613.webp" style={{ objectPosition: '0 0' }} />
                    </div>
                    <div className="backdrop-blur-sm bg-gradient-to-b from-[rgba(101,97,158,0.77)] to-[rgba(80,76,143,0.77)] border border-[#403c90] rounded-lg px-6 py-4 w-[156px] h-[77px] flex items-center justify-center">
                        <Image fill alt="RYU" className="max-w-full max-h-full object-contain" src="/images/cf5c5f6103d19e8b77553633e9b9e4a99c64e524.webp" style={{ objectPosition: '-150% 0' }} />
                    </div>
                    <div className="backdrop-blur-sm bg-gradient-to-b from-[rgba(101,97,158,0.77)] to-[rgba(80,76,143,0.77)] border border-[#403c90] rounded-lg px-6 py-4 w-[156px] h-[77px] flex items-center justify-center">
                        <Image fill alt="Rexco" className="max-w-full max-h-full object-contain" src="/images/61f2228a57c82de4a7ecd9e9db6ad0dc4b126cfd.webp" style={{ objectPosition: '-226% 0' }} />
                    </div>
                </div>

                {/* Decorative elements - Hidden on mobile */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                    <div className="absolute h-[451px] left-[376px] top-[629px] w-[1171px]">
                        <div className="absolute inset-0 overflow-hidden">
                            <Image fill alt="" className="absolute h-[113.3%] left-[-0.01%] max-w-none top-0 w-[100.02%]" src="/images/5d79243e794a7459c8a32b85b99085a3303863f3.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}