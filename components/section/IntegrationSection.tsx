import Image from "next/image";

export default function IntegrationSection() {
    return (
        <div className="relative w-full bg-[#353185] py-6 lg:py-12 my-4 lg:my-8 overflow-hidden">
            {/* Left Image - Hidden on mobile */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[300px]">
                <Image
                    src="/images/9f66da3b65992f1c4d184d621d2bdeb5e95d9e33.webp"
                    fill
                    alt="Integration Team Left"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Center Text */}
            <div className="text-center px-4">
                <h2 className="text-white text-[32px] lg:text-[64px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[0.64px]">
                    INTEGRATION
                </h2>
            </div>

            {/* Right Image - Hidden on mobile */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[300px]">
                <Image
                    src="/images/9f66da3b65992f1c4d184d621d2bdeb5e95d9e33.webp"
                    fill
                    alt="Integration Team Right"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}