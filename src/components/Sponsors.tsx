import { Users, Award, Clock, Shield } from "lucide-react";

const Sponsors = () => {
    const clubs = [
        {
            id: 1,
            Name: "MNK Dubravice",
            logo: "mnk-dubravice.png"
        },
        {
            id: 2,
            Name: "MNK Rupe",
            logo: "mnk-rupe.jpg"
        },
        {
            id: 3,
            Name: "NK Sošk",
            logo: "nk-sosk.png"
        },
        {
            id: 4,
            Name: "NK Došk",
            logo: "nk-dosk.png"
        }
    ];

    return (
        <section id="sponzori" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-6">
                            Ponosni sponzori i prijatelji klubova
                        </h2>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-row justify-center items-center flex-wrap gap-6">
                        {clubs.map((club) => (
                            <div key={club.id} className="construction-card hover-lift w-40 h-40">
                                <div
                                    className="h-full w-full bg-contain bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `url(/assets/${club.logo})`,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;