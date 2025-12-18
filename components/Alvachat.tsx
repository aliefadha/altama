"use client"
import Image from "next/image";
import { useState } from "react";

export default function AlvaChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Chat Button - Sticky di kanan bawah */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed right-8 bottom-8 z-40 w-[150px] h-[200px] hover:scale-105 transition-transform duration-300"
            >
                <Image
                    fill
                    alt="Alva Chat Assistant"
                    className="w-full h-full object-contain drop-shadow-lg"
                    src="/images/c0ade58209357fc63454edf28ce292084ee5dc56.png"
                />
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/20 z-[45]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Chat Widget */}
                    <div className="fixed right-8 bottom-[220px] z-[50] w-[367px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Header Purple */}
                        <div className="bg-[#353185] px-6 py-5">
                            <div className="flex items-center gap-3 mb-3">
                                {/* Chat Icon Circle */}
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>

                                <div className="flex-1">
                                    <div className="text-white font-bold text-lg">ALVA</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        <span className="text-white text-sm">Online</span>
                                    </div>
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="text-white text-sm">Altama Virtual Assistant</div>
                        </div>

                        {/* Chat Content */}
                        <div className="p-6 space-y-4">
                            {/* Welcome Message */}
                            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4">
                                <p className="text-gray-800 mb-2">
                                    Halo! Selamat datang di PT Altama Surya Artha Deco 👋
                                </p>
                                <p className="text-gray-600">
                                    Ada yang bisa kami bantu hari ini?
                                </p>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/6287777000966"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-4 px-6 rounded-full transition-colors duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat via WhatsApp
                            </a>

                            {/* Response Time Note */}
                            <p className="text-center text-sm text-gray-500">
                                Biasanya membalas dalam beberapa menit
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}