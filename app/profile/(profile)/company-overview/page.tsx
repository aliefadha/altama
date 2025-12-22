import { inter, leagueSpartan } from "@/app/font";
import { TrendingUp } from "lucide-react";
import Image from "next/image";

export default function CompanyOverviewPage() {
    return (
        <>
            <div className="w-full overflow-y-hidden max-h-[700px] bg-gradient-to-b from-[#353185] via-[#605BC3] to-[#353185] pt-36 flex flex-col justify-center items-center gap-12">
                <div className="max-w-xl text-center space-y-4 px-8 lg:px-0">
                    <h1 className={`${leagueSpartan.variable} text-white font-semibold text-[45px] lg:text-[60px] leading-[95%] tracking-[-2%] lg:tracking-[-2%]`}>
                        Our Vision, Mission & <span className="p-1 bg-[#F4C41C] rounded-md">Company Values</span>
                    </h1>
                    <p className={`${inter.variable} text-white text-[16px] lg:text-[20px] max-w-md mx-auto tracking-[-4%]`}>
                        Fondasi yang membentuk Altama Surya Anugerah dalam berkarya dan berkembang.
                    </p>
                </div>
                <div className="overflow-hidden h-[750px] w-2/3 mx-auto relative rounded-t-xl bg-gradient-to-b from-[#9795BD] to-[#605BC3] translate-y-3 ">
                    <Image fill alt="" src='/images/6a0dfdac9532db67bcfdfbdf8802209f17bd1327.webp' className="w-full h-full object-cover object-[25%_75%] pt-2 px-2 rounded-xl" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-center gap-1 sm:gap-2 pb-8">
                        {/* Tekiro */}
                        <a
                            href="https://tekiro.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                        >
                            <Image width={150} height={40} alt="Tekiro" className="max-w-full max-h-full object-cover" src="/images/tekiroo.webp" />
                        </a>
                        {/* Rexco */}
                        <a
                            href="https://rexco-solution.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                        >
                            <Image width={150} height={40} alt="Rexco" className="max-w-full max-h-full object-cover" src="/images/rexco-white.webp" />
                        </a>

                        {/* RYU */}
                        <a
                            href="https://ryupowertools.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-[70px] sm:max-w-[100px] h-[40px] sm:h-[50px] bg-gradient-to-b from-[#9795BD] to-[#5E5AA8] rounded-md flex items-center justify-center px-2 py-2 hover:shadow-lg transition-shadow relative z-10"
                        >
                            <Image width={150} height={40} alt="RYU" className="max-w-full max-h-full object-cover" src="/images/ryu.webp" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="py-10 lg:py-24 space-y-20 lg:space-y-40">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0 px-4 lg:px-0">
                    <div className="flex gap-2 items-center justify-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7056 1.15612C9.81604 -0.38462 7.59217 -0.38462 6.70262 1.15612L0.313278 12.2228C-0.576267 13.7635 0.535666 15.6895 2.31476 15.6895H15.0934C16.8725 15.6895 17.9845 13.7635 17.0949 12.2228L10.7056 1.15612Z" fill="#353185" />
                        </svg>

                        <h1 className={`${leagueSpartan.variable} text-[#121212] text-[32px] font-semibold tracking-[-4%] leading-[93%] uppercase `}>Visi</h1>
                    </div>
                    <div>
                        <p className={`${inter.variable} text-[24px] font-medium text-[#353185] max-w-[720px] text-center lg:text-start`}>
                            Menjadi distributor terpercaya di Indonesia untuk peralatan teknik, otomotif, dan industri, dengan produk berkualitas tinggi  <span className="text-[#9d9bb9]"> yang mendukung profesional, pelaku usaha, hingga pengguna rumahan. </span>
                        </p>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-20 lg:gap-0 px-4 lg:px-0">
                    <div className="flex gap-2 items-center justify-center">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7056 1.15612C9.81604 -0.38462 7.59217 -0.38462 6.70262 1.15612L0.313278 12.2228C-0.576267 13.7635 0.535666 15.6895 2.31476 15.6895H15.0934C16.8725 15.6895 17.9845 13.7635 17.0949 12.2228L10.7056 1.15612Z" fill="#353185" />
                        </svg>

                        <h1 className={`${leagueSpartan.variable} text-[#121212] text-[32px] font-semibold tracking-[-4%] leading-[93%] uppercase`}>Mission</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[720px] px-4 lg:px-0">
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`${inter.variable} text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`}>Menghadirkan <strong>produk berkualitas tinggi</strong> dengan standar internasional.</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`${inter.variable} text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`}><strong>Mendukung kebutuhan</strong> masyarakat, profesional, dan industri.</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`${inter.variable} text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`}>Memperluas <strong>jaringan distribusi </strong>agar produk mudah dijangkau di seluruh Indonesia.</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="">
                                <TrendingUp color="white" size={32} className="bg-[#353185] p-1 rounded-md" />
                            </div>
                            <p className={`${inter.variable} text-[#353185] text-[20px] leading-[125%] tracking-[-4%]`}>Terus <strong>meningkatkan inovasi dan ekspansi</strong> sesuai perkembangan pasar.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 lg:py-24 w-full">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10">
                    <div>
                        <h1 className={`${leagueSpartan.variable} text-[#121212] text-[50px] font-bold`}>CORE <span className="text-[#353185]">VALUE</span></h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap gap-[24px] px-4 lg:px-0">
                        {/* Integrity Card */}
                        <div className=" bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`${inter.variable} font-semibold text-[32px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                Integrity
                            </h3>
                            <p className={`${inter.variable} font-normal text-[24px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                Konsisten dan dapat dipercaya.
                            </p>
                        </div>
                        <div className=" bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`${inter.variable} font-semibold text-[32px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                Innovation
                            </h3>
                            <p className={`${inter.variable} font-normal text-[24px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                Selalu menghadirkan solusi lebih baik.
                            </p>
                        </div>
                        <div className=" bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`${inter.variable} font-semibold text-[32px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                Collaboration
                            </h3>
                            <p className={`${inter.variable} font-normal text-[24px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                Bekerja bersama untuk tujuan yang sama.
                            </p>
                        </div>
                        <div className=" bg-white rounded-[12px] border border-[rgba(96,91,195,0.24)] px-4 py-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-gradient-to-b hover:from-[#353185] hover:to-[#605BC3] hover:border-transparent group">
                            <h3 className={`${inter.variable} font-semibold text-[32px] leading-[1.251] tracking-[-1.28px] text-[#353185] mb-[16px] group-hover:text-white transition-colors duration-300`}>
                                Customer Focus
                            </h3>
                            <p className={`${inter.variable} font-normal text-[24px] leading-[103.33%] tracking-[-0.96px] text-[#414141] group-hover:text-white/70 transition-colors duration-300`}>
                                Mengutamakan kepuasan dan kebutuhan pelanggan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-center min-h-screen p-6">
                    <div className="relative w-full max-w-5xl bg-[url('/images/bg-milestone.webp')] bg-cover bg-top rounded-[40px] p-12 text-white overflow-hidden">

                        <h2 className="text-4xl font-bold text-center mb-16 tracking-widest uppercase">Milestone</h2>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>

                            <div className="space-y-12">

                                <div className="flex items-center justify-center w-full group">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">2011</h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-xs">
                                            Altama berdiri di Jakarta, memulai perjalanan sebagai distributor teknik.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2 pr-8 text-right">
                                        <h3 className="text-2xl font-bold">2015</h3>
                                        <p className="text-white/80 text-lg leading-relaxed ml-auto max-w-xs">
                                            Perluasan jaringan distribusi ke lebih banyak kota besar.
                                        </p>
                                    </div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">2018</h3>
                                        <p className="text-white/80 text-lg leading-relaxed max-w-xs">
                                            Penambahan produk baru: <span className="font-semibold text-white">Tekiro Handtools, RYU Power Tools, Rexco Chemicals.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2 pr-8 text-right">
                                        <h3 className="text-2xl font-bold">2020</h3>
                                        <p className="text-white/80 text-lg leading-relaxed ml-auto max-w-xs">
                                            Distribusi nasional semakin kuat + peningkatan ekspansi modern market.
                                        </p>
                                    </div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] z-10"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>

                                <div className="flex items-center justify-center w-full">
                                    <div className="w-1/2"></div>
                                    <div className="relative flex items-center justify-center w-10">
                                        <div className="w-4 h-4 bg-white/50 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10"></div>
                                    </div>
                                    <div className="w-1/2 pl-8">
                                        <h3 className="text-2xl font-bold">2023</h3>
                                        <p className="text-whi0te/8 text-lg leading-relaxed max-w-xs">
                                            Memenangkan Digital Popular Brand Award.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}