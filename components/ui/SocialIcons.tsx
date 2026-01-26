"use client";

import { WhatsApp, Facebook, YouTube, LinkedIn, Instagram } from "./Icon";

const socialMediaConfig = [
    {
        name: "WhatsApp",
        url: "https://wa.me/6287777000966",
        icon: WhatsApp,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/TekiroTools/?locale=id_ID",
        icon: Facebook,
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@ptaltama",
        icon: YouTube,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/pt-altama-surya-anugerah",
        icon: LinkedIn,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/tekiro_tools",
        icon: Instagram,
    },
];

export function SocialIcons() {
    return (
        <div className="flex gap-3 lg:gap-[12px] mb-8 lg:mb-[280px]">
            {socialMediaConfig.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 lg:w-[52px] h-12 lg:h-[52px] bg-[#f1f0fa] rounded-xl lg:rounded-[16px] flex items-center justify-center hover:bg-white transition-colors"
                >
                    <div className="w-6 lg:w-8 h-6 lg:h-8">
                        <social.icon />
                    </div>
                </a>
            ))}
        </div>
    );
}
