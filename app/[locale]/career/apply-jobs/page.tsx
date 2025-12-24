"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function ApplyJobsPage() {
    const router = useRouter();
    const jobs = [
        {
            title: "Modern Market Coordinator Staff",
            description: "Bertanggung jawab mengembangkan relasi modern market",
        },
        {
            title: "Mechanic Staff",
            description: "Melakukan perawatan, pemeriksaan, serta perbaikan alat",
        },
        {
            title: "Modern Market Coordinator Staff",
            description: "Mengelola penjualan dan display produk di jaringan modern",
        },
        {
            title: "Distribution Supervisor",
            description: "Mengawasi proses distribusi, mengelola tim logistik",
        },
    ];

    return (
        <>
            <div className="relative w-full bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] py-12 lg:py-[160px] overflow-hidden">
                {/* Decorative Background Lines */}
                <Image
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 lg:opacity-100"
                    src="/images/f0b36a6155a50c52be487b4eff0f34ea34014d9f.webp"
                    alt=""
                    fill
                />

                <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px]">
                    {/* Title */}
                    <h2 className="text-center text-[26px] lg:text-[32px] font-league-spartan font-bold leading-tight tracking-tight lg:tracking-[-1.6px] mb-6 lg:mb-8">
                        <span className="text-white">GROW WITH US </span>
                        <span className="text-[#f4c41c]">AT ALTAMA!</span>
                    </h2>

                    {/* Search Bar */}
                    <div className="flex items-center gap-2 lg:gap-[10px] max-w-full lg:max-w-[580px] mx-auto bg-white rounded-full px-4 py-2 lg:py-2 mb-6 lg:mb-10">
                        <input
                            type="text"
                            placeholder="Search job position…"
                            className="flex-1 text-[#808080] text-[14px] font-inter tracking-tight outline-none bg-transparent"
                        />
                        <button className="w-7 h-7 bg-[#353185] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 21 21">
                                <path
                                    d="M8.92437 2.58398C7.67027 2.58398 6.44432 2.95587 5.40157 3.65261C4.35882 4.34936 3.54609 5.33967 3.06617 6.49831C2.58624 7.65695 2.46067 8.93189 2.70534 10.1619C2.95 11.3919 3.55391 12.5217 4.4407 13.4085C5.32748 14.2953 6.45732 14.8992 7.68733 15.1439C8.91734 15.3886 10.1923 15.263 11.3509 14.7831C12.5096 14.3031 13.4999 13.4904 14.1966 12.4477C14.8934 11.4049 15.2652 10.179 15.2652 8.92486C15.2651 7.24319 14.597 5.63042 13.4079 4.4413C12.2188 3.25218 10.606 2.58409 8.92437 2.58398Z"
                                    stroke="white"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M13.6553 13.6562L18.0837 18.0846"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Job Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-x-10 lg:gap-y-4 mb-8 lg:mb-12 max-w-full lg:max-w-[900px] mx-auto">
                        {jobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-2xl lg:rounded-[20px] p-4 flex flex-col gap-3 lg:h-[140px] lg:justify-between">
                                <div>
                                    <h3 className="text-[#121212] text-[15px] lg:text-[16px] font-inter font-semibold leading-tight tracking-tight mb-2">
                                        {job.title}
                                    </h3>
                                    <p className="text-[#414141] text-[13px] lg:text-[13px] font-inter leading-relaxed tracking-tight opacity-75">
                                        {job.description}
                                    </p>
                                </div>

                                <button
                                    onClick={() => router.push('/career/job-detail')}
                                    className="w-full lg:w-auto flex items-center justify-center gap-2 bg-[#353185] rounded-full px-5 py-2.5 self-start hover:bg-[#2d2870] transition-colors"
                                >
                                    <span className="text-white text-[14px] lg:text-[16px] font-inter font-semibold tracking-tight">
                                        Apply Now
                                    </span>
                                    <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rotate-90">
                                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                                            <path d="M17 14L12 9L7 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* View All Jobs Button */}
                    <div className="flex justify-center">
                        <button className="w-full lg:w-auto bg-white text-[#353185] rounded-full px-6 py-3 text-[15px] lg:text-[16px] font-inter font-semibold tracking-tight hover:bg-[#f0f0f0] transition-colors">
                            View All Jobs
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}