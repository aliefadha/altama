'use client';

import { useRouter } from 'next/navigation';

export default function JobDetailPage() {
    const router = useRouter();

    // Sample job data - in real app, this would come from API or props
    const job = {
        title: "Modern Market Coordinator Staff",
        type: "Full-time",
        location: "Jakarta",
        date: "12 Januari 2024",
        category: "Award",
        tags: "Tekiro, RYU, Brand Recognition",
        overview: "Posisi ini bertanggung jawab mengelola hubungan dengan modern market serta memastikan pencapaian target penjualan di area yang ditugaskan.",
        requirements: [
            "Pendidikan minimal D3/S1",
            "Pengalaman di bidang sales modern market",
            "Komunikatif dan mampu bekerja dalam tim",
            "Bersedia ditempatkan sesuai kebutuhan"
        ]
    };

    return (
        <div className="bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] min-h-screen pt-[55px]">
            <div className="flex flex-col items-center justify-center py-[117px]">
                {/* Title */}
                <h1 className="font-['League_Spartan'] font-bold text-[56px] leading-[1.292] text-center text-white tracking-[-2.24px] mb-[100px]">
                    <span>GROW WITH US </span>
                    <span className="text-[#f4c41c]">AT ALTAMA!</span>
                </h1>

                {/* White Card */}
                <div className="bg-white rounded-[26px] w-[1150px] px-[48px] py-[40px]">
                    {/* Job Header */}
                    <div className="flex flex-col gap-[32px] mb-[32px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="font-['Inter'] font-semibold text-[#353185] text-[28px] leading-[1.292] tracking-[-1.12px]">
                                {job.title}
                            </h2>
                            <p className="font-['Inter'] font-medium text-[#414141] text-[20px] leading-[1.292] tracking-[-0.8px]">
                                {job.type} · {job.location}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-[20px] items-center">
                            <div className="bg-[rgba(53,49,133,0.08)] px-[14px] py-[7px] rounded-[10px]">
                                <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.251] tracking-[-0.64px]">
                                    {job.date}
                                </p>
                            </div>
                            <div className="bg-[rgba(53,49,133,0.08)] px-[14px] py-[7px] rounded-[10px]">
                                <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.251] tracking-[-0.64px]">
                                    {job.category}
                                </p>
                            </div>
                            <div className="bg-[rgba(53,49,133,0.08)] px-[14px] py-[7px] rounded-[10px]">
                                <p className="font-['Inter'] text-[#29266e] text-[16px] leading-[1.251] tracking-[-0.64px]">
                                    {job.tags}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Job Overview */}
                    <div className="flex flex-col gap-[12px] mb-[32px]">
                        <h3 className="font-['Inter'] font-medium text-[#121212] text-[28px] leading-[1.292] tracking-[-1.12px]">
                            Job Overview
                        </h3>
                        <p className="font-['Inter'] text-[#414141] text-[20px] leading-[1.292] tracking-[-0.8px]">
                            {job.overview}
                        </p>
                    </div>

                    {/* Requirements */}
                    <div className="flex flex-col gap-[12px] mb-[32px]">
                        <h3 className="font-['Inter'] font-medium text-[#121212] text-[28px] leading-[1.292] tracking-[-1.12px]">
                            Requirement
                        </h3>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex gap-[14px]">
                                <div className="border border-[#414141] px-[20px] py-[10px] rounded-[32px]">
                                    <p className="font-['Inter'] text-[#353185] text-[20px] leading-[1.292] tracking-[-0.8px] whitespace-nowrap">
                                        {job.requirements[0]}
                                    </p>
                                </div>
                                <div className="border border-[#414141] px-[20px] py-[10px] rounded-[32px]">
                                    <p className="font-['Inter'] text-[#353185] text-[20px] leading-[1.292] tracking-[-0.8px] whitespace-nowrap">
                                        {job.requirements[1]}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-[14px]">
                                <div className="border border-[#414141] px-[20px] py-[10px] rounded-[32px]">
                                    <p className="font-['Inter'] text-[#353185] text-[20px] leading-[1.292] tracking-[-0.8px] whitespace-nowrap">
                                        {job.requirements[2]}
                                    </p>
                                </div>
                                <div className="border border-[#414141] px-[20px] py-[10px] rounded-[32px]">
                                    <p className="font-['Inter'] text-[#353185] text-[20px] leading-[1.292] tracking-[-0.8px] whitespace-nowrap">
                                        {job.requirements[3]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-[20px] items-center">
                        {/* Back to Career Button */}
                        <button
                            onClick={() => router.push('/career/apply-jobs')}
                            className="bg-white border-none flex gap-[8px] items-center justify-center pl-[28px] pr-[22px] py-[14px] rounded-[60px] hover:bg-gray-50 transition-colors duration-300"
                        >
                            <div className="size-[20px] rotate-[90deg] scale-y-[-100%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                                    <path d='M18.3949 15.1487L12.9846 9.73846L7.57436 15.1487' stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1641" />
                                </svg>
                            </div>
                            <p className="font-['Inter'] font-semibold text-[#353185] text-[20px] tracking-[-0.8px] whitespace-nowrap">
                                Back to Career
                            </p>
                        </button>

                        {/* Apply Now Button */}
                        <button
                            onClick={() => router.push('/career/apply-form')}
                            className="bg-[#353185] flex gap-[8px] items-center justify-center pl-[28px] pr-[22px] py-[14px] rounded-[60px] hover:bg-[#605bc3] transition-colors duration-300"
                        >
                            <p className="font-['Inter'] font-semibold text-white text-[20px] tracking-[-0.8px] whitespace-nowrap">
                                Apply Now
                            </p>
                            <div className="size-[20px] rotate-[90deg]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                                    <path d='M18.3949 15.1487L12.9846 9.73846L7.57436 15.1487' stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1641" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}