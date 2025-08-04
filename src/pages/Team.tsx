import { useEffect } from "react";
import { HiOutlineSparkles } from "react-icons/hi";

const Team = () => {
    useEffect(() => {
        // Placeholder for future logging if needed
        // logEvent("page_view", { ... });
    }, []);

    const founders = [
        {
            name: "Abhinav Reddy Palle",
            role: "CEO & Co-Founder",
            image: "https://zwive.s3.us-west-1.amazonaws.com/founder+images/Abhinav.JPG",
            experience: "Software Engineer at Waymo, Google, Flexport",
            education: "MS Computer Science, UCR",
            linkedin: "https://www.linkedin.com/in/abhinavreddy-palle/",
        },
        {
            name: "Luella Fu",
            role: "CRO & Co-Founder",
            image: "https://zwive.s3.us-west-1.amazonaws.com/founder+images/Luella.jpeg",
            experience: "Tenured Professor SFSU • Ex-Meta",
            education: "PhD Statistics USC • MS Yale",
            linkedin: "https://www.linkedin.com/in/luella-fu-9575551b/",
        },
    ];

    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <div className="relative overflow-hidden pt-24 pb-16">
                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 text-gray-300 text-sm font-medium border border-gray-700">
                                <HiOutlineSparkles className="w-5 h-5" />
                                Meet Our Team
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            World-Class AI Team
                        </h1>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Engineers from Waymo, Google, and Meta combined with
                            tenured research expertise from USC and Yale.
                        </p>
                    </div>
                </div>
            </div>

            {/* Founders Section */}
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
                        {founders.map((founder, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-8">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-56 h-56 rounded-full mx-auto object-cover border-4 border-gray-800 shadow-lg"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {founder.name}
                                </h2>
                                <div className="text-xl text-gray-400 mb-4">
                                    {founder.role}
                                </div>
                                <div className="text-lg text-gray-500 mb-6 leading-relaxed max-w-md mx-auto">
                                    <p className="mb-2">{founder.experience}</p>
                                    <p className="text-gray-400">
                                        {founder.education}
                                    </p>
                                </div>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Build the Future?
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let's discuss how we can accelerate the future of
                            robotics together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:abhinav@quicksight.ai"
                                className="inline-block px-10 py-4 text-base font-bold text-gray-300 rounded-lg border border-gray-600 hover:bg-white hover:text-gray-950 transition-all duration-300 transform hover:scale-105"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Team;
