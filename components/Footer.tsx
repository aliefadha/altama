import Image from "next/image";

export default function Footer() {
    const companyLinks = ["About", "Career", "News"];
    const productLinks = [
        { name: "Tekiro", url: "https://tekiro.com/" },
        { name: "Rexco", url: "https://rexco-solution.com/" },
        { name: "Ryu", url: "https://ryupowertools.com/" },
    ];
    const contactLinks = [
        { name: "Location", url: "https://maps.app.goo.gl/mvHzG5m7WgFD714H7" },
        { name: "Help", url: "mailto:customercare@altama.co.id" },
        { name: "Alva", url: "https://wa.me/6287777000966" },
    ];
    const overviewLinks = ["Media Center", "Gallery", "Career"];

    const socialMedia = [
        {
            name: "WhatsApp",
            url: "https://wa.me/6281268184861",
            icon: (
                <svg className="w-full h-full" fill="none" viewBox="0 0 34 37">
                    <path clipRule="evenodd" d="M16.6667 0C7.46167 0 0 7.46167 0 16.6667C0 19.8167 0.875 22.7667 2.39667 25.28L0.91 30.3333C0.824641 30.6235 0.819024 30.9312 0.893741 31.2243C0.968457 31.5174 1.12075 31.7849 1.3346 31.9987C1.54845 32.2126 1.81597 32.3649 2.10903 32.4396C2.40209 32.5143 2.70986 32.5087 3 32.4233L8.05333 30.9367C10.6512 32.5082 13.6304 33.3372 16.6667 33.3333C25.8717 33.3333 33.3333 25.8717 33.3333 16.6667C33.3333 7.46167 25.8717 0 16.6667 0ZM12.8967 20.4383C16.2683 23.8083 19.4867 24.2533 20.6233 24.295C22.3517 24.3583 24.035 23.0383 24.69 21.5067C24.772 21.316 24.8016 21.1069 24.7758 20.9009C24.7501 20.6949 24.6698 20.4996 24.5433 20.335C23.63 19.1683 22.395 18.33 21.1883 17.4967C20.9365 17.3221 20.6268 17.2519 20.3244 17.301C20.0219 17.3502 19.7503 17.5147 19.5667 17.76L18.5667 19.285C18.5138 19.3667 18.4319 19.4252 18.3375 19.4487C18.2431 19.4722 18.1433 19.459 18.0583 19.4117C17.38 19.0233 16.3917 18.3633 15.6817 17.6533C14.9717 16.9433 14.3517 16 14.0033 15.365C13.9612 15.2841 13.9493 15.1908 13.9698 15.1019C13.9902 15.013 14.0417 14.9343 14.115 14.88L15.655 13.7367C15.8754 13.546 16.0177 13.2807 16.0546 12.9916C16.0915 12.7025 16.0204 12.4099 15.855 12.17C15.1083 11.0767 14.2383 9.68667 12.9767 8.765C12.8135 8.64776 12.6228 8.57465 12.4231 8.55276C12.2234 8.53086 12.0214 8.56091 11.8367 8.64C10.3033 9.29667 8.97667 10.98 9.04 12.7117C9.08167 13.8483 9.52667 17.0667 12.8967 20.4383Z" fill="#353185" fillRule="evenodd" />
                </svg>
            )
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/TekiroTools/?locale=id_ID",
            icon: (
                <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
                    <path d="M36.6667 20.0007C36.6667 10.8007 29.2 3.33398 20 3.33398C10.8 3.33398 3.33337 10.8007 3.33337 20.0007C3.33337 28.0673 9.06671 34.784 16.6667 36.334V25.0007H13.3334V20.0007H16.6667V15.834C16.6667 12.6173 19.2834 10.0007 22.5 10.0007H26.6667V15.0007H23.3334C22.4167 15.0007 21.6667 15.7507 21.6667 16.6673V20.0007H26.6667V25.0007H21.6667V36.584C30.0834 35.7507 36.6667 28.6507 36.6667 20.0007Z" fill="#353185" />
                </svg>
            )
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@ptaltama",
            icon: (
                <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
                    <path clipRule="evenodd" d="M20 6.91602C18.015 6.91602 15.7 6.96268 13.4434 7.02602L13.3517 7.02935C11.055 7.09435 9.20171 7.14602 7.74171 7.38768C6.22004 7.63935 4.95671 8.12102 3.94671 9.15935C2.93337 10.201 2.49171 11.4893 2.28337 13.031C2.08337 14.5143 2.08337 16.3943 2.08337 18.731V21.271C2.08337 23.6043 2.08337 25.4843 2.28337 26.9693C2.49004 28.511 2.93337 29.7993 3.94671 30.841C4.95671 31.881 6.22004 32.361 7.74171 32.6127C9.20171 32.8544 11.055 32.906 13.3517 32.971L13.4434 32.9743C15.7017 33.0377 18.015 33.0843 20 33.0843C21.985 33.0843 24.3 33.0377 26.5567 32.9743L26.6484 32.971C28.945 32.906 30.7984 32.8544 32.2584 32.6127C33.78 32.361 35.0434 31.8793 36.0534 30.841C37.0667 29.7993 37.51 28.511 37.7167 26.9693C37.9167 25.486 37.9167 23.606 37.9167 21.2693V18.7293C37.9167 16.3943 37.9167 14.5143 37.7167 13.031C37.51 11.4893 37.0667 10.201 36.0534 9.15935C35.0434 8.11935 33.78 7.63935 32.2584 7.38768C30.7984 7.14602 28.945 7.09435 26.6467 7.02935L26.5567 7.02602C24.3717 6.9597 22.186 6.92303 20 6.91602ZM18.12 24.4177C17.93 24.5263 17.7147 24.583 17.4958 24.5823C17.2769 24.5815 17.0621 24.5233 16.8727 24.4135C16.6834 24.3036 16.5262 24.146 16.4169 23.9563C16.3077 23.7666 16.2501 23.5516 16.25 23.3327V16.666C16.2501 16.4471 16.3077 16.2321 16.4169 16.0424C16.5262 15.8527 16.6834 15.6951 16.8727 15.5852C17.0621 15.4754 17.2769 15.4172 17.4958 15.4164C17.7147 15.4157 17.93 15.4724 18.12 15.581L23.9534 18.9143C24.1446 19.0237 24.3035 19.1817 24.414 19.3722C24.5245 19.5627 24.5827 19.7791 24.5827 19.9993C24.5827 20.2196 24.5245 20.436 24.414 20.6265C24.3035 20.817 24.1446 20.975 23.9534 21.0843L18.12 24.4177Z" fill="#353185" fillRule="evenodd" />
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/pt-altama-surya-anugerah",
            icon: (
                <svg className="w-full h-full" fill="none" viewBox="0 0 30 35">
                    <path clipRule="evenodd" d="M25 0C26.3261 0 27.5979 0.526784 28.5355 1.46447C29.4732 2.40215 30 3.67392 30 5V25C30 26.3261 29.4732 27.5979 28.5355 28.5355C27.5979 29.4732 26.3261 30 25 30H5C3.67392 30 2.40215 29.4732 1.46447 28.5355C0.526784 27.5979 0 26.3261 0 25V5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H25ZM8.33333 11.6667C7.89131 11.6667 7.46738 11.8423 7.15482 12.1548C6.84226 12.4674 6.66667 12.8913 6.66667 13.3333V21.6667C6.66667 22.1087 6.84226 22.5326 7.15482 22.8452C7.46738 23.1577 7.89131 23.3333 8.33333 23.3333C8.77536 23.3333 9.19928 23.1577 9.51184 22.8452C9.8244 22.5326 10 22.1087 10 21.6667V13.3333C10 12.8913 9.8244 12.4674 9.51184 12.1548C9.19928 11.8423 8.77536 11.6667 8.33333 11.6667ZM13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V21.6667C11.6667 22.1087 11.8423 22.5326 12.1548 22.8452C12.4674 23.1577 12.8913 23.3333 13.3333 23.3333C13.7754 23.3333 14.1993 23.1577 14.5118 22.8452C14.8244 22.5326 15 22.1087 15 21.6667V15.5667C15.5083 14.9933 16.3667 14.32 17.3217 13.9117C17.8767 13.675 18.7117 13.5783 19.2917 13.7617C19.4841 13.8105 19.6554 13.9204 19.78 14.075C19.8667 14.1917 20 14.4517 20 15V21.6667C20 22.1087 20.1756 22.5326 20.4882 22.8452C20.8007 23.1577 21.2246 23.3333 21.6667 23.3333C22.1087 23.3333 22.5326 23.1577 22.8452 22.8452C23.1577 22.5326 23.3333 22.1087 23.3333 21.6667V15C23.3333 13.8833 23.05 12.89 22.46 12.0933C21.9171 11.3709 21.1573 10.8412 20.2917 10.5817C18.7883 10.11 17.1233 10.3717 16.0117 10.8483C15.6558 11.0014 15.3091 11.175 14.9733 11.3683C14.9035 10.9843 14.701 10.637 14.4013 10.3869C14.1016 10.1369 13.7237 9.99994 13.3333 10ZM8.33333 6.66667C7.89131 6.66667 7.46738 6.84226 7.15482 7.15482C6.84226 7.46738 6.66667 7.89131 6.66667 8.33333C6.66667 8.77536 6.84226 9.19928 7.15482 9.51184C7.46738 9.8244 7.89131 10 8.33333 10C8.77536 10 9.19928 9.8244 9.51184 9.51184C9.8244 9.19928 10 8.77536 10 8.33333C10 7.89131 9.8244 7.46738 9.51184 7.15482C9.19928 6.84226 8.77536 6.66667 8.33333 6.66667Z" fill="#353185" fillRule="evenodd" />
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/tekiro_tools",
            icon: (
                <svg className="w-full h-full" fill="none" viewBox="0 0 40 40">
                    <path d="M21.7136 3.33203C23.5886 3.33703 24.5403 3.34703 25.3619 3.37036L25.6853 3.38203C26.0586 3.39536 26.4269 3.41203 26.8719 3.43203C28.6453 3.51536 29.8553 3.79536 30.9169 4.20703C32.0169 4.63036 32.9436 5.2037 33.8703 6.1287C34.7181 6.96159 35.3739 7.96948 35.7919 9.08203C36.2036 10.1437 36.4836 11.3537 36.5669 13.1287C36.5869 13.572 36.6036 13.9404 36.6169 14.3154L36.6269 14.6387C36.6519 15.4587 36.6619 16.4104 36.6653 18.2854L36.6669 19.5287V21.712C36.671 22.9277 36.6582 24.1434 36.6286 25.3587L36.6186 25.682C36.6053 26.057 36.5886 26.4254 36.5686 26.8687C36.4853 28.6437 36.2019 29.852 35.7919 30.9154C35.3739 32.0279 34.7181 33.0358 33.8703 33.8687C33.0374 34.7165 32.0295 35.3723 30.9169 35.7904C29.8553 36.202 28.6453 36.482 26.8719 36.5654L25.6853 36.6154L25.3619 36.6254C24.5403 36.6487 23.5886 36.6604 21.7136 36.6637L20.4703 36.6654H18.2886C17.0724 36.6697 15.8561 36.6569 14.6403 36.627L14.3169 36.617C13.9213 36.602 13.5257 36.5848 13.1303 36.5654C11.3569 36.482 10.1469 36.202 9.08359 35.7904C7.97164 35.3721 6.96433 34.7163 6.13192 33.8687C5.2835 33.036 4.6271 32.0281 4.20859 30.9154C3.79692 29.8537 3.51692 28.6437 3.43359 26.8687L3.38359 25.682L3.37526 25.3587C3.34453 24.1434 3.33064 22.9277 3.33359 21.712V18.2854C3.32898 17.0697 3.3412 15.854 3.37026 14.6387L3.38192 14.3154C3.39526 13.9404 3.41192 13.572 3.43192 13.1287C3.51526 11.3537 3.79526 10.1454 4.20692 9.08203C4.62641 7.96903 5.28396 6.96109 6.13359 6.1287C6.96551 5.28128 7.97224 4.62549 9.08359 4.20703C10.1469 3.79536 11.3553 3.51536 13.1303 3.43203C13.5736 3.41203 13.9436 3.39536 14.3169 3.38203L14.6403 3.37203C15.8556 3.34242 17.0712 3.32964 18.2869 3.3337L21.7136 3.33203ZM20.0003 11.6654C17.7901 11.6654 15.6705 12.5433 14.1077 14.1061C12.5449 15.6689 11.6669 17.7886 11.6669 19.9987C11.6669 22.2088 12.5449 24.3285 14.1077 25.8913C15.6705 27.4541 17.7901 28.332 20.0003 28.332C22.2104 28.332 24.33 27.4541 25.8928 25.8913C27.4556 24.3285 28.3336 22.2088 28.3336 19.9987C28.3336 17.7886 27.4556 15.6689 25.8928 14.1061C24.33 12.5433 22.2104 11.6654 20.0003 11.6654ZM20.0003 14.9987C20.6569 14.9986 21.3071 15.1278 21.9137 15.379C22.5204 15.6302 23.0717 15.9984 23.536 16.4626C24.0004 16.9268 24.3688 17.4779 24.6202 18.0845C24.8715 18.6911 25.001 19.3413 25.0011 19.9979C25.0012 20.6545 24.872 21.3047 24.6208 21.9113C24.3696 22.518 24.0014 23.0693 23.5372 23.5336C23.073 23.998 22.5219 24.3664 21.9153 24.6178C21.3087 24.8692 20.6585 24.9986 20.0019 24.9987C18.6758 24.9987 17.4041 24.4719 16.4664 23.5342C15.5287 22.5966 15.0019 21.3248 15.0019 19.9987C15.0019 18.6726 15.5287 17.4008 16.4664 16.4632C17.4041 15.5255 18.6758 14.9987 20.0019 14.9987M28.7519 9.16536C28.1994 9.16536 27.6695 9.38486 27.2788 9.77556C26.8881 10.1663 26.6686 10.6962 26.6686 11.2487C26.6686 11.8012 26.8881 12.3311 27.2788 12.7218C27.6695 13.1125 28.1994 13.332 28.7519 13.332C29.3045 13.332 29.8344 13.1125 30.2251 12.7218C30.6158 12.3311 30.8353 11.8012 30.8353 11.2487C30.8353 10.6962 30.6158 10.1663 30.2251 9.77556C29.8344 9.38486 29.3045 9.16536 28.7519 9.16536Z" fill="#353185" />
                </svg>
            )
        },
    ];

    return (
        <div className="relative w-full bg-[#353185] py-12 lg:py-20 overflow-hidden h-screen">
            {/* Decorative Element - Top Left - Hidden on mobile */}
            <div className="hidden lg:block absolute -left-[80px] -top-[150px] w-[500px] h-[500px] pointer-events-none">
                <Image
                    fill
                    src="/images/ea8c5194ccd76102a358ded8c16351846216362c.webp"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Background Decorative Gradients - Hidden on mobile */}
            <div className="hidden lg:block absolute -left-[100px] -top-[120px] w-[490px] h-[505px] rotate-[16.435deg] opacity-50">
                <svg className="w-full h-full" fill="none" viewBox="0 0 666 691">
                    <defs>
                        <filter id="blur1" x="0" y="0" width="665.142" height="690.277">
                            <feGaussianBlur stdDeviation="50" />
                        </filter>
                        <linearGradient id="grad1" x1="574.164" y1="16.9522" x2="127.672" y2="367.74">
                            <stop stopColor="#413CA4" />
                            <stop offset="1" stopColor="#433EA8" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M511.239 100L100 406.764L110.296 590.277L565.142 100H511.239Z" fill="url(#grad1)" filter="url(#blur1)" />
                </svg>
            </div>

            <div className="relative max-w-[1440px] mx-auto px-5 lg:px-[80px]">
                {/* Top Section: Logo and Navigation */}
                <div className="flex lg:flex-row flex-col items-start lg:justify-between gap-8 lg:gap-0 mb-10 lg:mb-16">
                    {/* Logo */}
                    <div>
                        <Image
                            width={350}
                            height={150}
                            alt="PT Altama Surya Anugerah"
                            className="h-[120px] lg:h-[100px] xl:h-[150px] w-auto"
                            src="/images/footer.webp"
                        />
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-x-6 gap-y-8 lg:gap-[80px] lg:mr-[40px] w-full lg:w-auto">
                        {/* Company */}
                        <div>
                            <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                                Company
                            </h3>
                            <div className="flex flex-col gap-2 lg:gap-3">
                                {companyLinks.map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                                Product
                            </h3>
                            <div className="flex flex-col gap-2 lg:gap-3">
                                {productLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                                Contact Us
                            </h3>
                            <div className="flex flex-col gap-2 lg:gap-3">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Company Overview */}
                        <div>
                            <h3 className="text-white text-[16px] lg:text-[24px] font-['League_Spartan'] font-bold tracking-tight lg:tracking-[-0.96px] mb-3 lg:mb-6">
                                Overview
                            </h3>
                            <div className="flex flex-col gap-2 lg:gap-3">
                                {overviewLinks.map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="text-white text-[14px] lg:text-[18px] font-['Inter'] font-medium lg:font-semibold tracking-tight lg:tracking-[-0.72px] hover:underline transition-all"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3 lg:gap-[12px] mb-8 lg:mb-[280px]">
                    {socialMedia.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 lg:w-[52px] h-12 lg:h-[52px] bg-[#f1f0fa] rounded-xl lg:rounded-[16px] flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <div className="w-6 lg:w-8 h-6 lg:h-8">
                                {social.icon}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Copyright and Certifications */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5">
                    <p className="text-white text-[12px] lg:text-[18px] font-['League_Spartan'] font-medium tracking-tight lg:tracking-[-0.72px] text-center">
                        Copyright 2025 PT. Altama Surya Anugerah. All Right Reserved
                    </p>
                </div>
            </div>

            {/* Background Text - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-[330px] -translate-x-1/2 pointer-events-none">
                <p
                    className="text-[240px] font-['League_Spartan'] font-bold leading-[1.292] tracking-[-9.6px] text-center bg-gradient-to-b from-[#413ca4] to-[#353185] to-[75.929%] bg-clip-text blur-sm select-none"
                    style={{ WebkitTextFillColor: 'transparent' }}
                >
                    INNOVATION
                </p>
            </div>
        </div>
    );
}