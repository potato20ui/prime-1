import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceList = [
    { id: 'landlord', name: 'Landlord Representation' },
    { id: 'tenant', name: 'Tenant Representation' },
    { id: 'research', name: 'Research & Consultancy' },
    { id: 'acquisition', name: 'Investment & Acquisition' },
    { id: 'project', name: 'Project Management' },
    { id: 'ag', name: 'AG Services' }, // ➡️ Added AG Services here!
];

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState('landlord');

    return (
        <div className="w-full min-h-screen">
            {/* Banner */}
            <div className="relative w-full h-[503px] bg-cover bg-center text-white mb-20" style={{ backgroundImage: 'url(/images/bg2.png)' }}>
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-[#0E406F]/50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold"
                    >
                        SERVICES
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-4 text-lg"
                    >
                        <div className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full font-semibold">
                            <Link to="/" className="hover:underline">Home</Link>
                            <span className="mx-2">/</span>
                            <span>Services</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                {/* Sidebar */}
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-lg p-6 max-h-[600px] overflow-y-auto"
                    >
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Services</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-800 rounded-full mb-6" />
                        <div className="space-y-3">
                            {serviceList.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-300 ${selectedService === service.id
                                        ? 'bg-blue-100 text-blue-700 font-semibold shadow'
                                        : 'hover:bg-blue-100 text-gray-700'
                                        }`}
                                >
                                    <span>{service.name}</span>
                                    <ArrowRight size={18} />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Need Help Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="bg-[#0b2c53] text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-[530px] w-[450px] mx-auto"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                            <PhoneCall size={32} color="white" />
                        </div>
                        <p className="text-2xl font-bold mb-2">Need Help?</p>
                        <p className="text-lg font-semibold mb-6">Call Here</p>
                        <div className="text-sm space-y-2 text-center">
                            <p><strong>Phone:</strong> <a href="tel:+63288881000" className="text-blue-300 hover:underline">+63 2 8888 1000</a></p>
                            <p><strong>Mobile:</strong> <a href="tel:+639171234567" className="text-blue-300 hover:underline">+63 917 123 4567</a></p>
                        </div>
                    </motion.div>
                </div>

                {/* Main Content Area */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="lg:col-span-2"
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        {serviceList.find((s) => s.id === selectedService)?.name}
                    </h2>
                    <div className="text-gray-700 text-justify leading-relaxed space-y-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                {selectedService === 'landlord' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            PRIME Philippines offers comprehensive landlord representation services to maximize property value...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Strategic property marketing and leasing campaigns tailored to each property’s unique selling points.</li>
                                            <li>Expert tenant screening and lease negotiation services to ensure stable income streams.</li>
                                            <li>Vacant land management and advice for mixed-use projects to unlock full potential.</li>
                                            <li>Full asset management services including maintenance, tenant relations, and financial reporting.</li>
                                            <li>Regular market evaluations to ensure competitive lease terms and optimal utilization.</li>
                                        </ul>
                                    </>
                                )}
                                {selectedService === 'tenant' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            Our tenant representation services aim to help businesses secure ideal commercial spaces...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Office, retail, and industrial site selection services matching operational needs.</li>
                                            <li>Lease negotiations and reviews for best lease terms.</li>
                                            <li>Assistance with branch expansion strategies.</li>
                                            <li>Space planning and layout recommendations for efficiency and productivity.</li>
                                            <li>Guidance on operational costs like rent, utilities, and maintenance fees.</li>
                                        </ul>
                                    </>
                                )}
                                {selectedService === 'research' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            PRIME Philippines provides in-depth research services that help clients make informed real estate decisions...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Quarterly market reports analyzing trends, pricing, and demand.</li>
                                            <li>Feasibility studies assessing real estate project viability.</li>
                                            <li>Highest and best use (HBU) analysis for maximum profitability.</li>
                                            <li>Custom research services for specific client needs.</li>
                                            <li>Location analysis for identifying prime opportunities.</li>
                                        </ul>
                                    </>
                                )}
                                {selectedService === 'acquisition' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            Whether you're buying or selling, our acquisition services ensure seamless, beneficial transactions...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Investment guidance and analysis for property acquisitions.</li>
                                            <li>Due diligence: property inspections, legal reviews, market appraisals.</li>
                                            <li>Valuation services for accurate property pricing.</li>
                                            <li>Joint venture consulting and investment portfolio management.</li>
                                            <li>Property disposition services with favorable negotiation terms.</li>
                                        </ul>
                                    </>
                                )}
                                {selectedService === 'project' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            PRIME Philippines offers end-to-end project management services for real estate developments...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Construction monitoring for timely, on-budget project completion.</li>
                                            <li>Timeline and budget management services.</li>
                                            <li>Procurement of permits and regulatory approvals.</li>
                                            <li>Stakeholder coordination for development process streamlining.</li>
                                            <li>Post-completion evaluations for project success validation.</li>
                                        </ul>
                                    </>
                                )}
                                {selectedService === 'ag' && (
                                    <>
                                        <p className="mb-4 font-medium">
                                            AG Services specializes in agriculture-focused real estate solutions, supporting landowners and investors in maximizing agricultural property value...
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>Advisory for agri-business development and land conversions.</li>
                                            <li>Investment sourcing and marketing of agricultural properties.</li>
                                            <li>Feasibility studies for farm-to-market road projects and logistics hubs.</li>
                                            <li>Tenant acquisition for agri-leases and partnerships.</li>
                                            <li>Consultation on agri-tourism and sustainability initiatives.</li>
                                        </ul>
                                    </>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
