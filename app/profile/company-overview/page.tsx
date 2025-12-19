import CompanyOverviewHeroSection from "@/components/section/CompanyOverviewHeroSection";
import VisiMisiMilestone from "@/components/section/VisiMisiMilestone";


export default function CompanyOverviewPage() {
    return (
        <>
            {/* Main Content */}
            <div className="w-full bg-white relative overflow-hidden">
                {/* Visi Misi Milestone Section */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-360 relative">
                        {/* Desktop - Scale down dari 1920px ke 1440px */}
                        <div className="hidden lg:block origin-top" style={{ transform: 'scale(0.75)', width: '133.33%', marginLeft: '-16.665%' }}>
                            <VisiMisiMilestone />
                        </div>
                        {/* Mobile - Full width */}
                        <div className="lg:hidden w-full">
                            <VisiMisiMilestone />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}