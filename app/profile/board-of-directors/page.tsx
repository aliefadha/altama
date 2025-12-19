import DirectorHeroSection from "@/components/section/DirectorHeroSection";
import Image from "next/image";

export default function BoardOfDirectorsPage() {
    return (
        <>
            <div className="pt-[55px]">
                {/* Hero Section - Frame172 */}
                <div className="w-full flex justify-center overflow-hidden bg-[#353185]">
                    <div className="w-full max-w-[1440px] relative">
                        {/* Desktop: Scale down, Mobile: full width no scale */}
                        <div className="hidden lg:block origin-top h-[810px]" style={{ transform: 'scale(0.75)', width: '133.33%', marginLeft: '-16.665%' }}>
                            <DirectorHeroSection />
                        </div>
                        <div className="lg:hidden">
                            <DirectorHeroSection />
                        </div>
                    </div>
                </div>

                {/* Directors Content Section */}
                <div className="bg-white relative">
                    {/* Director 1 - Oscar Andrew Sutjadi */}
                    <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pt-12 lg:pt-[120px] pb-12 lg:pb-[100px] z-10">
                        <div className="flex lg:flex-row flex-col gap-8 lg:gap-[80px] items-center">
                            {/* Photo */}
                            <div className="flex-shrink-0 w-full lg:w-auto">
                                <div className="bg-[#d9d9d9] h-[320px] w-full lg:h-[380px] lg:w-[320px] rounded-2xl lg:rounded-[24px] overflow-hidden">
                                    <Image
                                        alt="Oscar Andrew Sutjadi"
                                        className="h-full w-full object-cover object-center"
                                        src="/images/9df419339c9f64ff9330860ae144cbfc48a09c52.webp"
                                        width={320}
                                        height={380}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-6 lg:gap-[40px] flex-1">
                                {/* Name and Title */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-league-spartan font-semibold text-[28px] lg:text-[42px] leading-tight tracking-tight lg:tracking-[-1.68px] text-[#353185]">
                                        Oscar Andrew Sutjadi
                                    </h2>
                                    <p className="font-inter text-[15px] lg:text-[18px] leading-relaxed tracking-tight text-[#121212]">
                                        Director, PT Altama Surya Anugerah
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="font-inter text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-[#414141]">
                                    <p className="mb-4">
                                        Oscar Andrew Sutjadi adalah Director PT Altama Surya Anugerah yang berperan dalam mengarahkan strategi bisnis dan pengembangan perusahaan sebagai distributor nasional peralatan teknik, otomotif, dan industri.
                                    </p>
                                    <p>
                                        Ia berfokus pada penguatan jaringan distribusi, pengembangan merek Tekiro, RYU, dan Rexco, serta memastikan pertumbuhan perusahaan berjalan secara berkelanjutan dengan tetap mengedepankan kualitas dan profesionalisme.
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Leadership
                                        </p>
                                    </div>

                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Business Development
                                        </p>
                                    </div>

                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Strategy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Director 2 - Stephanus Ferdinand Santoso */}
                    <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pb-12 lg:pb-[120px] z-10">
                        <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-[80px] items-center">
                            {/* Content */}
                            <div className="flex flex-col gap-6 lg:gap-[40px] flex-1">
                                {/* Name and Title */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="font-league-spartan font-semibold text-[28px] lg:text-[42px] leading-tight tracking-tight lg:tracking-[-1.68px] text-[#353185]">
                                        Stephanus Ferdinand Santoso
                                    </h2>
                                    <p className="font-inter text-[15px] lg:text-[18px] leading-relaxed tracking-tight text-[#121212]">
                                        Vice Director, PT Altama Surya Anugerah
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="font-inter text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-[#414141]">
                                    <p className="mb-4">
                                        Stephanus Ferdinand Santoso menjabat sebagai Vice Director PT Altama Surya Anugerah dengan tanggung jawab utama pada pengelolaan operasional dan peningkatan efektivitas organisasi.
                                    </p>
                                    <p>
                                        Dengan latar belakang teknik dan manajemen, ia berperan dalam menjaga standar mutu, mengoptimalkan proses kerja, serta mendukung pertumbuhan perusahaan melalui sistem yang efisien dan berkelanjutan.
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex gap-3 lg:gap-4 items-center flex-wrap">
                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Operations
                                        </p>
                                    </div>

                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Engineering
                                        </p>
                                    </div>

                                    <div className="bg-[rgba(53,49,133,0.08)] flex gap-2 items-center px-3 py-2 rounded-full">
                                        <div className="size-[18px] relative overflow-hidden flex-shrink-0">
                                            <div className="absolute inset-[8.33%]">
                                                <svg className="block size-full" fill="none" viewBox="0 0 22 22">
                                                    <path d='M11 21C12.3135 21.0016 13.6143 20.7437 14.8278 20.2411C16.0412 19.7384 17.1434 19.0009 18.071 18.071C19.0009 17.1434 19.7384 16.0412 20.2411 14.8278C20.7437 13.6143 21.0016 12.3135 21 11C21.0016 9.68655 20.7437 8.38572 20.2411 7.17225C19.7384 5.95878 19.0009 4.85659 18.071 3.92901C17.1434 2.99909 16.0412 2.26162 14.8278 1.75897C13.6143 1.25631 12.3135 0.998388 11 1.00001C9.68655 0.998388 8.38572 1.25631 7.17225 1.75897C5.95878 2.26162 4.85659 2.99909 3.92901 3.92901C2.99909 4.85659 2.26162 5.95878 1.75897 7.17225C1.25631 8.38572 0.998388 9.68655 1.00001 11C0.998388 12.3135 1.25631 13.6143 1.75897 14.8278C2.26162 16.0412 2.99909 17.1434 3.92901 18.071C4.85659 19.0009 5.95878 19.7384 7.17225 20.2411C8.38572 20.7437 9.68655 21.0016 11 21Z' fill="#353185" stroke="#353185" strokeLinejoin="round" strokeWidth="2" />
                                                    <path d="M7.00001 11L10 14L16 8.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="font-inter text-[14px] lg:text-[16px] leading-tight tracking-tight text-[#353185]">
                                            Management
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Photo */}
                            <div className="flex-shrink-0 w-full lg:w-auto">
                                <div className="bg-[#d9d9d9] h-[320px] w-full lg:h-[380px] lg:w-[320px] rounded-2xl lg:rounded-[24px] overflow-hidden">
                                    <Image
                                        alt="Stephanus Ferdinand Santoso"
                                        className="h-full w-full object-cover object-center"
                                        src="/images/3b1d8efcfeab01eb8192e7678f2036b37ecbdb0e.webp"
                                        width={320}
                                        height={380}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] pb-12 lg:pb-[80px] z-10">
                        <div className="flex gap-3 lg:gap-6 items-center justify-center">
                            {/* Back Button */}
                            <button className="bg-[#353185] flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:bg-[#2a2667] transition-colors">
                                <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg] scale-y-[-100%]">
                                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                        <path d="M17 14L12 9L7 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg>
                                </div>
                                <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-white tracking-tight">
                                    Back
                                </p>
                            </button>

                            {/* Next Button (Disabled) */}
                            <button className="flex gap-2 items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 rounded-full border-2 border-[#d3d3d3] cursor-not-allowed">
                                <p className="font-inter font-semibold text-[14px] lg:text-[16px] text-[#808080] tracking-tight">
                                    Next
                                </p>
                                <div className="size-4 lg:size-5 flex items-center justify-center rotate-[90deg]">
                                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                                        <path d="M17 14L12 9L7 14" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}