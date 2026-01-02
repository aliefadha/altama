"use client"
import { Inter, League_Spartan } from "next/font/google";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

const leagueSpartan = League_Spartan({
    variable: "--font-league_spartan",
    subsets: ["latin"]
})

export default function ContactUsPage() {
    const t = useTranslations('contactUs');
    return (
        <>
            <div className={`{${inter.className} pt-[55px]}`}>
                {/* Contact Form Section */}
                <div className="relative bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] overflow-hidden">
                    {/* Decorative SVG Lines */}
                    <div className="absolute flex h-[269px] items-center justify-center left-[calc(37.5%+22.75px)] top-[17px] translate-x-[-50%] w-[197px]">
                        <div className="flex-none rotate-[180deg]">
                            <div className="h-[269px] relative w-[197px]">
                                <div className="absolute inset-[-0.19%_-0.25%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 270">
                                        <path d='M0.5 269.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H197.5' stroke="url(#paint0_linear_120_1503)" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_120_1503" x1="-27.2771" x2="79.4001" y1="28.3804" y2="169.08">
                                                <stop stopColor="#605BC3" />
                                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute h-[269px] left-[calc(4.17%+88.92px)] top-[857px] translate-x-[-50%] w-[130px]">
                        <div className="absolute inset-[-0.19%_-0.38%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 270">
                                <path d='M0.5 269.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H130.5' stroke="url(#paint0_linear_120_1507)" strokeLinecap="round" />
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_120_1507" x1="-17.8301" x2="91.901" y1="28.3804" y2="123.886">
                                        <stop stopColor="#605BC3" />
                                        <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="absolute flex h-[127px] items-center justify-center left-[calc(79.17%-63.08px)] top-[960px] translate-x-[-50%] w-[269px]">
                        <div className="flex-none rotate-[270deg]">
                            <div className="h-[269px] relative w-[127px]">
                                <div className="absolute inset-[-0.19%_-0.39%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 270">
                                        <path d='M127.5 0.5H87.5C74.2452 0.5 63.5 11.2452 63.5 24.5V245.5C63.5 258.755 52.7548 269.5 39.5 269.5H0.5' stroke="url(#paint0_linear_120_1498)" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_120_1498" x1="8.00001" x2="137.5" y1="269.5" y2="0.500015">
                                                <stop stopColor="#605BC3" stopOpacity="0" />
                                                <stop offset="0.537196" stopColor="#605BC3" />
                                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex h-[127px] items-center justify-center left-[calc(62.5%-11.75px)] top-[960px] translate-x-[-50%] w-[269px]">
                        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
                            <div className="h-[269px] relative w-[127px]">
                                <div className="absolute inset-[-0.19%_-0.39%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 270">
                                        <path d='M127.5 0.5H87.5C74.2452 0.5 63.5 11.2452 63.5 24.5V245.5C63.5 258.755 52.7548 269.5 39.5 269.5H0.5' stroke="url(#paint0_linear_120_1505)" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_120_1505" x1="8.00001" x2="137.5" y1="269.5" y2="0.500015">
                                                <stop stopColor="#605BC3" stopOpacity="0" />
                                                <stop offset="0.537196" stopColor="#605BC3" />
                                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px] mt-20 lg:mt-0 py-[40px] lg:py-[120px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start">
                            {/* Left Column - Contact Info */}
                            <div className="flex flex-col gap-8 lg:gap-[40px]">
                                {/* Title */}
                                <div className="flex flex-col gap-2">
                                    <h1 className={`${leagueSpartan.className} font-bold text-[28px] lg:text-[40px] leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-1.6px] text-white`}>
                                        {t('hero.title')}
                                    </h1>
                                    <p className="text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-white">
                                        {t('hero.subtitle')}
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="flex flex-col gap-4 lg:gap-5">
                                    {/* Phone */}
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#f1f0fa] rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 29 29">
                                                <path
                                                    clipRule="evenodd"
                                                    d='M17.3726 23.6174C15.6694 23.5547 10.8424 22.8876 5.78711 17.8335C0.733029 12.7783 0.0671142 7.95246 0.00324322 6.24805C-0.0913804 3.65063 1.89808 1.12773 4.19625 0.142461C4.473 0.0229593 4.77606 -0.0225386 5.0757 0.0104318C5.37534 0.0434022 5.66125 0.153708 5.90539 0.330525C7.79787 1.70967 9.10367 3.79612 10.225 5.43666C10.4717 5.79709 10.5772 6.23569 10.5213 6.66889C10.4655 7.10209 10.2522 7.4996 9.92217 7.78569L7.61453 9.49956C7.50305 9.58007 7.42457 9.69831 7.39368 9.83231C7.36279 9.96631 7.38158 10.107 7.44658 10.2282C7.96937 11.1779 8.89905 12.5926 9.96357 13.6571C11.0281 14.7216 12.5101 15.7128 13.5261 16.2947C13.6535 16.3662 13.8035 16.3862 13.9452 16.3506C14.0868 16.3149 14.2095 16.2264 14.2879 16.1031L15.79 13.8168C16.0662 13.4499 16.4736 13.2042 16.9269 13.131C17.3802 13.0578 17.8443 13.1628 18.2218 13.4241C19.886 14.5761 21.8282 15.8595 23.2499 17.6798C23.4411 17.9257 23.5627 18.2184 23.602 18.5274C23.6413 18.8364 23.5969 19.1503 23.4735 19.4362C22.4835 21.7462 19.9783 23.7132 17.3726 23.6174Z'
                                                    fill="#353185"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-white">
                                            {t('contact.phone')}
                                        </p>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#f1f0fa] rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 29 29">
                                                <path
                                                    d='M23.6559 4.73118H4.73118C3.43011 4.73118 2.37742 5.7957 2.37742 7.09678L2.36559 21.2903C2.36559 22.5914 3.43011 23.6559 4.73118 23.6559H23.6559C24.957 23.6559 26.0215 22.5914 26.0215 21.2903V7.09678C26.0215 5.7957 24.957 4.73118 23.6559 4.73118ZM23.1828 9.75807L14.8204 14.986C14.4419 15.2226 13.9452 15.2226 13.5667 14.986L5.2043 9.75807C5.0857 9.69149 4.98184 9.60154 4.89901 9.49366C4.81618 9.38578 4.7561 9.26221 4.7224 9.13044C4.68871 8.99867 4.6821 8.86143 4.70298 8.72703C4.72386 8.59263 4.7718 8.46387 4.84388 8.34853C4.91597 8.23319 5.01071 8.13368 5.12237 8.05602C5.23402 7.97835 5.36028 7.92416 5.49349 7.8967C5.6267 7.86924 5.7641 7.8691 5.89737 7.89628C6.03063 7.92347 6.157 7.97741 6.26882 8.05484L14.1936 13.0108L22.1183 8.05484C22.2301 7.97741 22.3565 7.92347 22.4897 7.89628C22.623 7.8691 22.7604 7.86924 22.8936 7.8967C23.0268 7.92416 23.1531 7.97835 23.2647 8.05602C23.3764 8.13368 23.4711 8.23319 23.5432 8.34853C23.6153 8.46387 23.6632 8.59263 23.6841 8.72703C23.705 8.86143 23.6984 8.99867 23.6647 9.13044C23.631 9.26221 23.5709 9.38578 23.4881 9.49366C23.4053 9.60154 23.3014 9.69149 23.1828 9.75807Z'
                                                    fill="#353185"
                                                />
                                            </svg>
                                        </div>
                                        <p className=" text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-white">
                                            {t('contact.email')}
                                        </p>
                                    </div>

                                    {/* Location */}
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#f1f0fa] rounded-lg w-9 h-9 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 29 29">
                                                <path
                                                    d='M16.2445 25.8039C19.3369 23.0823 24.8387 17.5219 24.8387 12.4194C24.8387 9.59608 23.7172 6.88845 21.7208 4.89209C19.7245 2.89573 17.0168 1.77419 14.1936 1.77419C11.3703 1.77419 8.66264 2.89573 6.66628 4.89209C4.66993 6.88845 3.54839 9.59608 3.54839 12.4194C3.54839 17.5219 9.04839 23.0823 12.1426 25.8039C12.707 26.3076 13.437 26.5861 14.1936 26.5861C14.9501 26.5861 15.6801 26.3076 16.2445 25.8039ZM10.6452 12.4194C10.6452 11.4783 11.019 10.5757 11.6845 9.91027C12.3499 9.24482 13.2525 8.87097 14.1936 8.87097C15.1346 8.87097 16.0372 9.24482 16.7026 9.91027C17.3681 10.5757 17.7419 11.4783 17.7419 12.4194C17.7419 13.3604 17.3681 14.263 16.7026 14.9284C16.0372 15.5939 15.1346 15.9677 14.1936 15.9677C13.2525 15.9677 12.3499 15.5939 11.6845 14.9284C11.019 14.263 10.6452 13.3604 10.6452 12.4194Z'
                                                    fill="#353185"
                                                />
                                            </svg>
                                        </div>
                                        <p className=" text-[14px] lg:text-[16px] leading-relaxed tracking-tight text-white">
                                            {t('contact.location')}
                                        </p>
                                    </div>
                                </div>

                                {/* Alva Character & CTA Box - Hidden on mobile */}
                                <div className="hidden lg:block relative mt-[60px]">
                                    {/* Alva Character */}
                                    <div className="absolute left-[180px] bottom-0 w-[240px] h-[240px] z-10">
                                        <Image
                                            fill
                                            alt="Alva Chat"
                                            className="w-full h-full object-contain"
                                            src="/images/96297028645c9421eba3a09013acf2a94eb4099c.webp"
                                        />
                                    </div>

                                    {/* White Box with CTA */}
                                    <div className="bg-white rounded-[24px] px-[32px] py-[28px] relative z-0 max-w-[420px]">
                                        <h3 className={`${leagueSpartan.className} font-semibold text-[24px] leading-[1.2] tracking-[-0.96px] text-[#353185] mb-[8px]`}>
                                            {t('cta.title')}
                                        </h3>
                                        <p className={`${leagueSpartan.className} text-[16px] leading-[1.3] tracking-[-0.64px] text-[#414141] max-w-[250px]`}>
                                            {t('cta.subtitle')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Form */}
                            <div className="bg-[#fafafa] rounded-2xl lg:rounded-[32px] px-6 py-6 lg:px-12 lg:py-12">
                                <div className="flex flex-col gap-5 lg:gap-6">
                                    {/* Form Fields */}
                                    <div className="flex flex-col gap-4 lg:gap-6">
                                        {/* Row 1: Name & Email */}
                                        <div className="flex flex-col xl:flex-row gap-4 lg:gap-5">
                                            <div className="flex flex-col gap-2 flex-1">
                                                <label className="font-medium text-[13px] lg:text-[14px] leading-relaxed tracking-tight text-[#121212]">
                                                    {t('form.nameLabel')}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={t('form.namePlaceholder')}
                                                    className="bg-[#efefef] rounded-full px-5 py-3  text-[14px] leading-relaxed tracking-tight text-[#a7a7a7] placeholder:text-[#a7a7a7] outline-none focus:ring-2 focus:ring-[#353185]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2 flex-1">
                                                <label className=" font-medium text-[13px] lg:text-[14px] leading-relaxed tracking-tight text-[#121212]">
                                                    {t('form.emailLabel')}
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder={t('form.emailPlaceholder')}
                                                    className="bg-[#efefef] rounded-full px-5 py-3  text-[14px] leading-relaxed tracking-tight text-[#a7a7a7] placeholder:text-[#a7a7a7] outline-none focus:ring-2 focus:ring-[#353185]"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2: Phone & Location */}
                                        <div className="flex flex-col xl:flex-row gap-4 lg:gap-5">
                                            <div className="flex flex-col gap-2 flex-1">
                                                <label className=" font-medium text-[13px] lg:text-[14px] leading-relaxed tracking-tight text-[#121212]">
                                                    {t('form.phoneLabel')}
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder={t('form.phonePlaceholder')}
                                                    className="bg-[#efefef] rounded-full px-5 py-3  text-[14px] leading-relaxed tracking-tight text-[#a7a7a7] placeholder:text-[#a7a7a7] outline-none focus:ring-2 focus:ring-[#353185]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-2 flex-1">
                                                <label className=" font-medium text-[13px] lg:text-[14px] leading-relaxed tracking-tight text-[#121212]">
                                                    {t('form.locationLabel')}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder={t('form.locationPlaceholder')}
                                                    className="bg-[#efefef] rounded-full px-5 py-3  text-[14px] leading-relaxed tracking-tight text-[#a7a7a7] placeholder:text-[#a7a7a7] outline-none focus:ring-2 focus:ring-[#353185]"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3: Message */}
                                        <div className="flex flex-col gap-2">
                                            <label className=" font-medium text-[13px] lg:text-[14px] leading-relaxed tracking-tight text-[#121212]">
                                                {t('form.messageLabel')}
                                            </label>
                                            <textarea
                                                placeholder={t('form.messagePlaceholder')}
                                                rows={4}
                                                className="bg-[#efefef] rounded-2xl px-5 py-3  text-[14px] leading-relaxed tracking-tight text-[#a7a7a7] placeholder:text-[#a7a7a7] outline-none resize-none focus:ring-2 focus:ring-[#353185]"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button className="bg-[#353185] rounded-full px-6 py-3 w-full hover:bg-[#2a2667] transition-colors">
                                        <span className=" font-semibold text-[15px] lg:text-[18px] leading-relaxed tracking-tight text-white">
                                            {t('form.submitButton')}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Insights Section */}
                <div className="relative w-full bg-white py-12 lg:py-16">
                    <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px] relative">
                        {/* Decorative SVGs - Hidden on mobile */}
                        <div className="hidden lg:block absolute h-[358px] left-[80px] top-[-21px] w-[600px]">
                            <div className="h-[358px] relative w-[600px] scale-y-[-100%]">
                                <div className="absolute inset-[-0.14%_-0.08%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 359">
                                        <path d='M0.5 358.5V24.5C0.5 11.2452 11.2452 0.5 24.5 0.5H600.5' stroke="url(#paint0_linear_left_insight)" strokeLinecap="round" />
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_left_insight" x1="0.5" x2="104.718" y1="0.5" y2="217.556">
                                                <stop stopColor="#605BC3" />
                                                <stop offset="1" stopColor="#605BC3" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative max-w-full lg:max-w-[721px] mx-auto flex flex-col gap-8 lg:gap-[56px] items-center">
                            <div className="flex flex-col gap-3 lg:gap-4 items-center text-center w-full">
                                <h2 className={`text-[#353185] text-[26px] lg:text-[40px] ${leagueSpartan.className} font-medium leading-tight lg:leading-[1.292] tracking-tight lg:tracking-[-2.24px]`}>
                                    {t('insights.title')}
                                </h2>
                                <p className="text-[#414141] text-[14px] lg:text-[18px]  font-medium leading-relaxed lg:leading-[1.292] tracking-tight lg:tracking-[-0.96px] max-w-full lg:max-w-[487px]">
                                    {t('insights.subtitle')}
                                </p>
                            </div>

                            <div className="relative">
                                <button className="bg-[#353185] text-white rounded-full px-6 lg:px-6 py-3 lg:py-3 text-[15px] lg:text-[18px]  font-semibold tracking-tight lg:tracking-[-0.96px] hover:bg-[#2a2667] transition-colors">
                                    {t('insights.button')}
                                </button>
                                <div className="absolute border-4 border-[rgba(53,49,133,0.24)] inset-[-4px] pointer-events-none rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}