"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyFormPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        position: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white min-h-screen pt-[80px] pb-[80px]">
            <div className="max-w-[1440px] mx-auto px-[160px]">
                {/* Header Section */}
                <div className="flex flex-col gap-[24px] items-center mb-[64px]">
                    <h1 className="font-['League_Spartan'] font-bold text-[28px] leading-[1.292] text-center tracking-[-1.12px]">
                        <span className="text-[#353185]">GROW WITH US </span>
                        <span className="text-[#f4c41c]">AT ALTAMA!</span>
                    </h1>

                    {/* Progress Stepper */}
                    <div className="flex items-center justify-between w-[440px]">
                        {/* Step 1 - Active */}
                        <div className="flex flex-col items-center gap-[8px]">
                            <div className="relative size-[46px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
                                    <circle cx="26.5" cy="26.5" fill="#353185" r="26.5" />
                                </svg>
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-white text-[18px] tracking-[-0.72px]">
                                    1
                                </p>
                            </div>
                        </div>

                        {/* Line 1 */}
                        <div className="h-[2.5px] w-[124px] bg-[#D9D9D9] rounded-full" />

                        {/* Step 2 - Inactive */}
                        <div className="flex flex-col items-center gap-[8px]">
                            <div className="relative size-[46px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
                                    <circle cx="26.5" cy="26.5" fill="#D9D9D9" r="26.5" />
                                </svg>
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-[#414141] text-[18px] tracking-[-0.72px]">
                                    2
                                </p>
                            </div>
                        </div>

                        {/* Line 2 */}
                        <div className="h-[2.5px] w-[124px] bg-[#D9D9D9] rounded-full" />

                        {/* Step 3 - Inactive */}
                        <div className="flex flex-col items-center gap-[8px]">
                            <div className="relative size-[46px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
                                    <circle cx="26.5" cy="26.5" fill="#D9D9D9" r="26.5" />
                                </svg>
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Inter'] font-medium text-[#414141] text-[18px] tracking-[-0.72px]">
                                    3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="flex flex-col gap-[28px] max-w-[980px] mx-auto">
                    {/* Nama Lengkap */}
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-['Inter'] font-medium text-[#121212] text-[20px] leading-[103.33%] tracking-[-0.8px]">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Nama Lengkap"
                            className="w-full px-[22px] py-[14px] rounded-[44px] border-2 border-[#353185] font-['Inter'] text-[#414141] text-[20px] leading-[103.33%] tracking-[-0.8px] focus:outline-none focus:border-[#605bc3] transition-colors"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-['Inter'] font-medium text-[#121212] text-[20px] leading-[103.33%] tracking-[-0.8px]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                            className="w-full px-[22px] py-[14px] rounded-[44px] bg-[#f5f3f3] font-['Inter'] text-[#898989] text-[20px] leading-[103.33%] tracking-[-0.8px] focus:outline-none focus:bg-white focus:border-2 focus:border-[#353185] transition-colors"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-['Inter'] font-medium text-[#121212] text-[20px] leading-[103.33%] tracking-[-0.8px]">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="w-full px-[22px] py-[14px] rounded-[44px] bg-[#f5f3f3] font-['Inter'] text-[#898989] text-[20px] leading-[103.33%] tracking-[-0.8px] focus:outline-none focus:bg-white focus:border-2 focus:border-[#353185] transition-colors"
                        />
                    </div>

                    {/* City / Location */}
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-['Inter'] font-medium text-[#121212] text-[20px] leading-[103.33%] tracking-[-0.8px]">
                            City / Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="City / Location"
                            className="w-full px-[22px] py-[14px] rounded-[44px] bg-[#f5f3f3] font-['Inter'] text-[#898989] text-[20px] leading-[103.33%] tracking-[-0.8px] focus:outline-none focus:bg-white focus:border-2 focus:border-[#353185] transition-colors"
                        />
                    </div>

                    {/* Position Applied */}
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-['Inter'] font-medium text-[#121212] text-[20px] leading-[103.33%] tracking-[-0.8px]">
                            Position Applied
                        </label>
                        <div className="relative">
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full px-[22px] py-[14px] pr-[56px] rounded-[44px] bg-[#f5f3f3] font-['Inter'] text-[#414141] text-[20px] leading-[103.33%] tracking-[-0.8px] appearance-none focus:outline-none focus:bg-white focus:border-2 focus:border-[#353185] transition-colors cursor-pointer"
                            >
                                <option value="">- Select -</option>
                                <option value="Modern Market Coordinator Staff">Modern Market Coordinator Staff</option>
                                <option value="Marketing Manager">Marketing Manager</option>
                                <option value="Sales Executive">Sales Executive</option>
                                <option value="HR Specialist">HR Specialist</option>
                                <option value="Product Designer">Product Designer</option>
                            </select>
                            {/* Custom Dropdown Arrow */}
                            <div className="absolute right-[28px] top-1/2 -translate-y-1/2 pointer-events-none">
                                <div className="size-[20px] scale-y-[-100%]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                        <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-[20px] items-center justify-end max-w-[980px] mx-auto mt-[64px]">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="flex gap-[8px] items-center justify-center px-[28px] py-[14px] rounded-[64px] border-4 border-[#353185] hover:bg-gray-50 transition-colors duration-300"
                    >
                        <div className="size-[20px] rotate-[90deg] scale-y-[-100%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d="M17 14L12 9L7 14" stroke="#353185" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="font-['Inter'] font-semibold text-[#353185] text-[20px] tracking-[-0.8px] whitespace-nowrap">
                            Back
                        </p>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={() => router.push('/career/apply-form2')}
                        className="bg-[#353185] flex gap-[8px] items-center justify-center px-[28px] py-[14px] rounded-[64px] hover:bg-[#605bc3] transition-colors duration-300"
                    >
                        <p className="font-['Inter'] font-semibold text-white text-[20px] tracking-[-0.8px] whitespace-nowrap">
                            Next
                        </p>
                        <div className="size-[20px] rotate-[90deg]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path d="M17 14L12 9L7 14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}