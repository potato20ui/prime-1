import { SetStateAction, useEffect, useState } from "react";

const HomePage = () => {
    const [dealAmount, setDealAmount] = useState(0);
    const [clientsServed, setClientsServed] = useState(0);
    const [projectsDone, setProjectsDone] = useState(0);
    const [researchStudies, setResearchStudies] = useState(0);

    useEffect(() => {
        const animateNumber = (start: number, end: number, setter: { (value: SetStateAction<number>): void; }, duration: number) => {
            let increment = (end - start) / duration;
            let currentValue = start;

            const interval = setInterval(() => {
                currentValue += increment;
                if (currentValue >= end) {
                    clearInterval(interval);
                    setter(end);
                } else {
                    setter(Math.floor(currentValue));
                }
            }, 1);
        };

        animateNumber(0, 500, setDealAmount, 1000);
        animateNumber(0, 7000, setClientsServed, 1000);
        animateNumber(0, 3000, setProjectsDone, 1000);
        animateNumber(0, 150, setResearchStudies, 1000);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center py-32 text-white"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4 text-white">Welcome to PRIME Philippines</h1>
                    <p className="text-xl mb-8 text-white opacity-80">Your trusted partner in real estate investment and property management.</p>
                    <p className="text-3xl mb-8 text-white opacity-80 font-bold">
                        <span className="relative inline-block">
                            REAL ESTATE, WE ADVISE, YOU ADVANCE
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0033A0] via-[#C8102E] to-[#F1C40F] translate-y-1"></span>
                        </span>
                    </p>
                    <button className="mt-6 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-[#0033A0] via-[#C8102E] to-[#F1C40F] hover:opacity-90 transition duration-300">
                        Inquire Now
                    </button>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-12 bg-white text-gray-800">
                <h2 className="text-4xl font-bold text-center mb-8">Our Achievements</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
                    <div className="text-center">
                        <p className="text-5xl font-semibold">{dealAmount}M+</p>
                        <p className="text-xl mt-4 opacity-80">worth of deals transacted</p>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-semibold">{clientsServed}+</p>
                        <p className="text-xl mt-4 opacity-80">clients served</p>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-semibold">{projectsDone}+</p>
                        <p className="text-xl mt-4 opacity-80">real estate projects</p>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-semibold">{researchStudies}+</p>
                        <p className="text-xl mt-4 opacity-80">research studies done</p>
                    </div>
                </div>
            </section>

            {/* New Sections */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img className="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Commercial Properties" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Commercial Properties</h3>
                                <p className="text-gray-600">Find prime office spaces, retail hubs, and investment opportunities tailored for businesses.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img className="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Residential Projects" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Residential Projects</h3>
                                <p className="text-gray-600">Explore premium homes, condos, and residential developments to fit every lifestyle.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img className="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" alt="Industrial Solutions" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Industrial Solutions</h3>
                                <p className="text-gray-600">Get strategic spaces for warehouses, logistics hubs, and manufacturing operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-8 bg-white text-center">
                <p className="text-2xl font-semibold text-gray-800 mb-6">An award-winning & recognized leader in the Philippine commercial and industrial real estate service industry.</p>
                <p className="text-lg text-gray-600">Entrust your real estate needs to a company well-equipped to deal with today's modern real estate business, with offices in Manila, Davao, and Cebu.</p>
            </section>
        </div>
    );
};

export default HomePage;
