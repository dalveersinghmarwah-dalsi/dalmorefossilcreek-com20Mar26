import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ASSETS } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Celebrations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title="Celebrations"
          subtitle="Make your special moments unforgettable"
          backgroundImage={ASSETS.images.ceremony}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                  Your Perfect Celebration
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  From intimate ceremonies to grand receptions, Dalmore Fossil Creek provides the perfect setting for your celebration. Our elegant indoor and outdoor spaces can be customized to match your vision.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-100">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Lakeside outdoor ceremony space</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-200">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Indoor chapel with wooden arches</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-300">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Grand reception hall for up to 220 guests</span>
                  </li>
                  <li className="flex items-start gap-3 animate-fade-in-up animate-delay-400">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Luxurious bridal ready room</span>
                  </li>
                </ul>
                <Link href="/schedule-tour">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                    Schedule Tour
                  </Button>
                </Link>
              </div>
              <div className="relative animate-slide-in-right">
                <img
                  src={ASSETS.images.ceremony}
                  alt="Ceremony"
                  className="rounded-lg shadow-lg w-full h-96 object-cover hover:shadow-xl transition-smooth"
                />
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-12 text-center animate-fade-in-up animate-delay-500">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Custom Packages Available
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Starting at $3,400 - Fully customizable based on your needs
              </p>
              <Link href="/prices">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                  View Pricing
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
