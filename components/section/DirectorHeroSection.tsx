import { cn } from "@/lib/utils";
import Image from "next/image";

type WrapperProps = {
    additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
    return (
        <div className={additionalClassNames}>
            <div className="absolute inset-[-0.19%_-0.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 270">
                    {children}
                </svg>
            </div>
        </div>
    );
}
type Frame172Helper2Props = {
    additionalClassNames?: string;
};

function Frame172Helper2({ additionalClassNames = "" }: Frame172Helper2Props) {
    return (
        <div className={cn("absolute h-[115px] w-0", additionalClassNames)}>
            <div className="absolute inset-[0_-1px_-0.87%_-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 116">
                    <path d='M1.00004 0C0.983372 1.91667 0.966706 3.83333 0.950039 5.75C0.650039 40.25 0.350039 74.75 0.0500389 109.25C0.0333722 111.167 0.0167055 113.083 3.88622e-05 115C-0.00229941 115.265 0.101009 115.52 0.288584 115.707C0.476082 115.895 0.732484 116 1.00004 116C1.26759 116 1.524 115.895 1.71149 115.707C1.89907 115.52 2.00238 115.265 2.00004 115C1.98337 113.083 1.96671 111.167 1.95004 109.25C1.65004 74.75 1.35004 40.25 1.05004 5.75C1.03337 3.83333 1.01671 1.91667 1.00004 0Z' fill="url(#paint0_linear_83_552)" id="Vector 6" />
                    <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_552" x1="1.50004" x2="1.50004" y1="0" y2="115">
                            <stop stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
type Frame172Helper1Props = {
    additionalClassNames?: string;
};

function Frame172Helper1({ additionalClassNames = "" }: Frame172Helper1Props) {
    return (
        <Wrapper additionalClassNames={cn("h-[269px] w-[153px]", additionalClassNames)}>
            <path d='M0.5 269.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H153.5' id="Vector 10" stroke="url(#paint0_linear_1_539)" strokeLinecap="round" />
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_539" x1="0.5" x2="114.174" y1="0.5" y2="99.3753">
                    <stop stopColor="#605BC3" />
                    <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                </linearGradient>
            </defs>
        </Wrapper>
    );
}
type Frame172HelperProps = {
    additionalClassNames?: string;
};

function Frame172Helper({ additionalClassNames = "" }: Frame172HelperProps) {
    return (
        <div className={cn("flex-none rotate-[180deg]", additionalClassNames)}>
            <Wrapper additionalClassNames="h-[269px] relative w-[153px]">
                <path d='M0.5 269.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H153.5' id="Vector 15" stroke="url(#paint0_linear_1_587)" strokeLinecap="round" />
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_587" x1="0.5" x2="114.174" y1="0.5" y2="99.3753">
                        <stop stopColor="#605BC3" />
                        <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </Wrapper>
        </div>
    );
}

export default function DirectorHeroSection() {
    return (
        <div className="relative size-full">
            <div className="absolute bg-gradient-to-b from-[#353185] h-[1080px] left-0 to-[#353185] to-[121.81%] top-0 via-[#4a46a4] via-[63.245%] w-[1920px]" />
            <div className="absolute flex h-[269px] items-center justify-center left-[1312px] top-[124px] w-[153px]">
                <Frame172Helper />
            </div>
            <div className="absolute flex h-[269px] items-center justify-center left-[457px] top-[124px] w-[153px]">
                <div className="flex-none scale-y-[-100%]">
                    <Frame172Helper1 additionalClassNames="relative" />
                </div>
            </div>
            <Frame172Helper1 additionalClassNames="absolute left-[367px] top-[284px]" />
            <div className="absolute flex h-[269px] items-center justify-center left-[1402px] top-[296px] w-[153px]">
                <Frame172Helper additionalClassNames="scale-y-[-100%]" />
            </div>
            <div className="absolute flex h-[269px] items-center justify-center left-[1251px] top-[481px] w-[153px]">
                <Frame172Helper additionalClassNames="scale-y-[-100%]" />
            </div>
            <div className="absolute h-[228px] left-[558px] top-[469px] w-[153px]">
                <div className="absolute inset-[-0.22%_-0.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 229">
                        <path d='M0.5 228.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H153.5' id="Vector 18" stroke="url(#paint0_linear_83_556)" strokeLinecap="round" />
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_556" x1="0.5" x2="97.7538" y1="0.5" y2="100.305">
                                <stop stopColor="#605BC3" />
                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="absolute h-[251px] left-[178px] top-[829px] w-[1565px]">
                <div className="absolute inset-[-0.2%_-0.03%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1566 252">
                        <path d='M0.5 251.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H1541.5C1554.75 0.5 1565.5 11.2452 1565.5 24.5V251.5' id="Vector 12" stroke="url(#paint0_linear_83_536)" strokeLinecap="round" />
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_536" x1="783" x2="777.413" y1="0.499999" y2="206.983">
                                <stop stopColor="#6E6AC8" />
                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="absolute h-[29px] left-[466px] top-[609px] w-[991px]">
                <div className="absolute inset-[-1.72%_-0.05%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 992 30">
                        <path d='M0.5 29.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H967.5C980.755 0.5 991.5 11.2452 991.5 24.5V29.5' id="Vector 14" stroke="url(#paint0_linear_83_561)" strokeLinecap="round" />
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_561" x1="496" x2="495.882" y1="0.5" y2="24.3735">
                                <stop stopColor="#7975CC" />
                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <Frame172Helper2 additionalClassNames="left-[367px] top-[321px]" />
            <div className="absolute h-[98px] left-[559px] top-[490px] w-0">
                <div className="absolute inset-[0_-1px_-1.02%_-1px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 99">
                        <path d='00005 0C0.983387 1.63333 0.96672 3.26667 0.950054 4.9C0.650054 34.3 0.350054 63.7 0.0500535 93.1C0.0333869 94.7333 0.0167202 96.3667 5.3525e-05 98C-0.00269036 98.2652 0.100262 98.5196 0.287845 98.7071C0.475335 98.8946 0.732093 99 1.00005 99C1.26801 99 1.52477 98.8946 1.71226 98.7071C1.89984 98.5196 2.0028 98.2652 2.00005 98C1.98339 96.3667 1.96672 94.7333 1.95005 93.1C1.65005 63.7 1.35005 34.3 1.05005 4.9C1.03339 3.26667 1.01672 1.63333 1.00005 0Z' fill="url(#paint0_linear_83_563)" id="Vector 7" />
                        <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_563" x1="1.50005" x2="1.50005" y1="0" y2="98">
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="1" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <Frame172Helper2 additionalClassNames="left-[1743px] top-[912px]" />
            <Frame172Helper2 additionalClassNames="left-[1555px] top-[342px]" />
            <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[274px] translate-x-[-50%]">
                <div className="absolute bg-[#f4c41c] h-[117px] left-[470px] rounded-[8px] top-[-17px] w-[363px]" />
                <p className="font-['League_Spartan:SemiBold',sans-serif] font-semibold leading-[0.945] relative shrink-0 text-[93px] text-center text-white tracking-[-1.86px] w-[960px]">Board of Directors</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e4e4e4] text-[24px] text-center text-nowrap tracking-[-0.96px]">Leadership driving Altama’s growth and excellence</p>
            </div>
            <div className="absolute h-[519px] left-1/2 top-[561px] translate-x-[-50%] w-[1194px]" data-name="Frame 63 (3) 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image fill alt="" className="absolute h-[104.62%] left-[-0.02%] max-w-none top-0 w-[100.04%]" src='/images/6b871ef0c31b3eaa3b53b9e5aec1336b59755084.webp' />
                </div>
            </div>
            <div className="absolute contents left-[716px] top-[955px]">
                <div className="absolute contents left-[716px] top-[955px]">
                    <div className="absolute backdrop-blur-[5.35px] backdrop-filter bg-gradient-to-b border border-[#403c90] border-solid from-[rgba(101,97,158,0.77)] h-[77px] left-[716px] rounded-[8px] to-[rgba(80,76,143,0.77)] top-[955px] w-[156px]" />
                    <div className="absolute h-[24px] left-[730px] top-[976px] w-[127px]" data-name="Logo Brand LP">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <Image width={160} height={75} alt="" className="absolute h-[150.12%] left-0 max-w-none top-[-0.06%] w-[302.36%]" src='/images/34e1fe96d8c7e1d3577612a571dde700a4b70c55.webp' />
                        </div>
                    </div>
                </div>
                <div className="absolute contents left-[882px] top-[955px]">
                    <div className="absolute backdrop-blur-[5.35px] backdrop-filter bg-gradient-to-b border border-[#403c90] border-solid from-[rgba(101,97,158,0.77)] h-[77px] left-[882px] rounded-[8px] to-[rgba(80,76,143,0.77)] top-[955px] w-[156px]" />
                    <div className="absolute h-[36px] left-[910px] top-[976px] w-[100px]" data-name="Logo Brand LP">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <Image width={160} height={75} alt="" className="absolute h-[100.08%] left-[-150%] max-w-none top-[-0.04%] w-[384%]" src='/images/34e1fe96d8c7e1d3577612a571dde700a4b70c55.webp' />
                        </div>
                    </div>
                </div>
                <div className="absolute contents left-[1048px] top-[955px]">
                    <div className="absolute backdrop-blur-[5.35px] backdrop-filter bg-gradient-to-b border border-[#403c90] border-solid from-[rgba(101,97,158,0.77)] h-[77px] left-[1048px] rounded-[8px] to-[rgba(80,76,143,0.77)] top-[955px] w-[156px]" />
                    <div className="absolute h-[28px] left-[1067px] top-[976px] w-[118px]" data-name="Logo Brand LP">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <Image width={160} height={75} alt="" className="absolute h-[128.68%] left-[-226.27%] max-w-none top-[-0.05%] w-[325.42%]" src='/images/34e1fe96d8c7e1d3577612a571dde700a4b70c55.webp' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}