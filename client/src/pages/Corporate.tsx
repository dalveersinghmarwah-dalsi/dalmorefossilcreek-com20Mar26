import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ASSETS } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Corporate() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title="Corporate Events"
          subtitle="Professional venues for business success"
          backgroundImage={ASSETS.images.ballroom}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative animate-slide-in-left">
                <img
                  src={ASSETS.images.ballroom}
                  alt="Corporate Event"
                  className="rounded-lg shadow-lg w-full h-96 object-cover hover:shadow-xl transition-smooth"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                  Impress Your Team & Clients
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Dalmore Fossil Creek offers the perfect environment for corporate meetings, conferences, and team events. Our high-tech facilities and professional staff ensure your event runs flawlessly.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-100">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">State-of-the-art conference facilities</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-200">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">High-speed Wi-Fi and AV equipment</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-300">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Flexible layouts for any event type</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-400">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Professional catering services</span>
                  </li>
                </ul>
                <Link href="/schedule-tour">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                    Schedule Tour
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg text-center animate-fade-in-up animate-delay-100 hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Conferences
                </h3>
                <p className="text-gray-600">
                  Host your next industry conference with all the technology and support you need.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center animate-fade-in-up animate-delay-200 hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Team Events
                </h3>
                <p className="text-gray-600">
                  Build team spirit with engaging corporate events in our elegant spaces.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center animate-fade-in-up animate-delay-300 hover:shadow-lg transition-smooth">
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Client Meetings
                </h3>
                <p className="text-gray-600">
                  Impress your clients with a professional and sophisticated meeting venue.
                </p>
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-12 text-center animate-fade-in-up animate-delay-400">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Ready to Book Your Event?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Contact us for custom pricing and availability for your corporate event.
              </p>
              <Link href="/contact">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
