"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileProfileSubmenu, setShowMobileProfileSubmenu] = useState(false);
    const [showMobileBrandSubmenu, setShowMobileBrandSubmenu] = useState(false);
    const [showMobileCareerSubmenu, setShowMobileCareerSubmenu] = useState(false);

    return (
        <>
            {/* Desktop Header */}
            <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 h-[55px] pointer-events-none">
                <div className="relative h-full">
                    {/* Navigation Background & Menu - DI BELAKANG LOGO */}
                    <div className="absolute left-[130px] top-0 h-[55px] w-[920px] pointer-events-auto z-0">
                        {/* Background */}
                        <div className="absolute inset-0">
                            <Image
                                alt=""
                                fill
                                className="object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                                src="/images/51ec67f38194adafbc5f7e34488fce14dd2fa9d6.webp"
                            />
                        </div>

                        {/* Menu Items */}
                        <div className="relative h-full flex items-center justify-start gap-16 pl-[115px]">
                            {/* Profile with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative h-[24px] w-[70px] mr-4 transition-transform hover:scale-110 inline-block"
                                >
                                    <Image
                                        alt="Profile"
                                        fill
                                        className="object-contain"
                                        src="/images/c4ed1de242b8185225cf2bb51e97ba89c83cac70.webp"
                                    />
                                    <div className="absolute -right-7 top-[6px] h-[14px] w-[19px]">
                                        <Image
                                            alt=""
                                            fill
                                            className="object-contain"
                                            src="/images/fb81f43cff3df970de258b28cf282e68648f0d44.webp"
                                        />
                                    </div>
                                </div>

                                {/* Dropdown Menu */}
                                <div className="absolute top-[35px] left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <Link
                                        href="/profile/company-overview"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Company Overview
                                    </Link>
                                    <Link
                                        href="/profile/awards-certification"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Awards and Certification
                                    </Link>
                                    <Link
                                        href="/profile/board-of-directors"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Board of Directors
                                    </Link>
                                    <Link
                                        href="/profile/gallery"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Gallery
                                    </Link>
                                </div>
                            </div>

                            {/* Brand with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative h-[24px] w-[61px] mr-4 transition-transform hover:scale-110 inline-block"
                                >
                                    <Image
                                        alt="Brand"
                                        fill
                                        className="object-contain"
                                        src="/images/1a92154a51b4b0071d11b64cc022e9206d223671.webp"
                                    />
                                    <div className="absolute -right-7 top-[6px] h-[14px] w-[19px]">
                                        <Image
                                            alt=""
                                            fill
                                            className="object-contain"
                                            src="/images/fb81f43cff3df970de258b28cf282e68648f0d44.webp"
                                        />
                                    </div>
                                </div>

                                {/* Dropdown Menu */}
                                <div className="absolute top-[35px] left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <a
                                        href="https://tekiro.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Tekiro
                                    </a>
                                    <a
                                        href="https://rexco-solution.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Rexco
                                    </a>
                                    <a
                                        href="https://ryupowertools.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Ryu
                                    </a>
                                </div>
                            </div>

                            {/* Media Center */}
                            <Link
                                href="/media-center"
                                className="relative h-[24px] w-[134px] transition-transform hover:scale-110 inline-block"
                            >
                                <Image
                                    alt="Media Center"
                                    fill
                                    className="object-contain"
                                    src="/images/17195abe25725815a91be733807e9582f204712e.webp"
                                />
                            </Link>

                            {/* Career with dropdown */}
                            <div className="relative group">
                                <div
                                    className="relative h-[24px] w-[71px] mr-4 transition-transform hover:scale-110 inline-block"
                                >
                                    <Image
                                        alt="Career"
                                        fill
                                        className="object-contain"
                                        src="/images/5eb4f8e2a0bc0450dc61142e2295cf98221b43d5.webp"
                                    />
                                    <div className="absolute -right-7 top-[6px] h-[14px] w-[19px]">
                                        <Image
                                            alt=""
                                            fill
                                            className="object-contain"
                                            src="/images/fb81f43cff3df970de258b28cf282e68648f0d44.webp"
                                        />
                                    </div>
                                </div>

                                {/* Dropdown Menu */}
                                <div className="absolute top-[35px] left-0 w-[240px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <Link
                                        href="/career/apply-jobs"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Apply Jobs
                                    </Link>
                                    <Link
                                        href="/career/life-at-altama"
                                        className="block w-full text-left px-4 py-2.5 hover:bg-[#353185] hover:text-white transition-colors duration-200 font-['Inter:Regular',sans-serif] text-[14px]"
                                    >
                                        Life at Altama
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <Link
                                href="/contact-us"
                                className="relative h-[24px] w-[112px] transition-transform hover:scale-110 inline-block"
                            >
                                <Image
                                    alt="Contact Us"
                                    fill
                                    className="object-contain"
                                    src="/images/6b9cdea8d38215b8635504fcde7cc4f425726060.webp"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Logo Altama - DI DEPAN SHAPE */}
                    <Link
                        href="/"
                        className="absolute left-0 top-0 h-[60px] w-[210px] pointer-events-auto z-10 transition-transform hover:scale-105 cursor-pointer inline-block"
                    >
                        <Image
                            alt="PT Altama Surya Anugerah"
                            fill
                            className="object-cover drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
                            src="/images/df98c0733f131bef24430fb6d83a6343d0a7a9d6.webp"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="flex items-center justify-between px-4 h-[60px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setShowMobileMenu(false)}
                        className="h-[45px] w-1/3 transition-transform hover:scale-105 inline-block relative"
                    >
                        <Image
                            alt="PT Altama Surya Anugerah"
                            fill
                            className="object-cover"
                            src="/images/df98c0733f131bef24430fb6d83a6343d0a7a9d6.webp"
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {showMobileMenu ? (
                            <X className="w-6 h-6 text-[#353185]" />
                        ) : (
                            <Menu className="w-6 h-6 text-[#353185]" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {showMobileMenu && (
                    <div className="absolute top-[60px] left-0 right-0 bg-white shadow-lg border-t border-gray-200 max-h-[calc(100vh-60px)] overflow-y-auto">
                        <div className="py-2">
                            {/* Profile with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileProfileSubmenu(!showMobileProfileSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">Profile</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileProfileSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileProfileSubmenu && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href="/profile/company-overview"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Company Overview
                                        </Link>
                                        <Link
                                            href="/profile/awards-certification"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Awards and Certification
                                        </Link>
                                        <Link
                                            href="/profile/board-of-directors"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Board of Directors
                                        </Link>
                                        <Link
                                            href="/profile/gallery"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Gallery
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Brand with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileBrandSubmenu(!showMobileBrandSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">Brand</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileBrandSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileBrandSubmenu && (
                                    <div className="bg-gray-50">
                                        <a
                                            href="https://tekiro.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Tekiro
                                        </a>
                                        <a
                                            href="https://rexco-solution.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Rexco
                                        </a>
                                        <a
                                            href="https://ryupowertools.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Ryu
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Media Center */}
                            <Link
                                href="/media-center"
                                onClick={() => setShowMobileMenu(false)}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors font-['Inter'] text-[16px] text-[#353185]"
                            >
                                Media Center
                            </Link>

                            {/* Career with submenu */}
                            <div>
                                <button
                                    onClick={() => setShowMobileCareerSubmenu(!showMobileCareerSubmenu)}
                                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="font-['Inter'] text-[16px] text-[#353185]">Career</span>
                                    <ChevronDown className={`w-4 h-4 text-[#353185] transition-transform ${showMobileCareerSubmenu ? 'rotate-180' : ''}`} />
                                </button>
                                {showMobileCareerSubmenu && (
                                    <div className="bg-gray-50">
                                        <Link
                                            href="/career/apply-jobs"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Apply Jobs
                                        </Link>
                                        <Link
                                            href="/career/life-at-altama"
                                            onClick={() => setShowMobileMenu(false)}
                                            className="block w-full text-left px-8 py-2.5 hover:bg-gray-200 transition-colors font-['Inter'] text-[14px] text-gray-700"
                                        >
                                            Life at Altama
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Contact Us */}
                            <Link
                                href="/contact-us"
                                onClick={() => setShowMobileMenu(false)}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors font-['Inter'] text-[16px] text-[#353185]"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
