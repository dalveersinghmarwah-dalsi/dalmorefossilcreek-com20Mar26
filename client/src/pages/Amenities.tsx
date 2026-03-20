import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { AMENITIES, ASSETS } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Amenities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title="Venue Amenities"
          subtitle="Complete facilities designed for your perfect event"
          backgroundImage={ASSETS.images.ballroom}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                  Everything You Need
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Dalmore Fossil Creek is equipped with state-of-the-art facilities and amenities to ensure your event runs seamlessly. From elegant ceremony spaces to spacious reception halls, we have everything covered.
                </p>
                <Link href="/schedule-tour">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                    Schedule a Tour
                  </Button>
                </Link>
              </div>
              <div className="relative animate-slide-in-right">
                <img
                  src={ASSETS.images.ballroom}
                  alt="Ballroom"
                  className="rounded-lg shadow-lg w-full h-96 object-cover hover:shadow-xl transition-smooth"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {AMENITIES.map((amenity: any, index: number) => (
                <div
                  key={index}
                  className="p-8 border-2 border-gray-100 rounded-lg hover:border-rose-300 hover:shadow-lg transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-rose-600 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 p-12 bg-rose-50 rounded-lg text-center animate-fade-in-up animate-delay-500">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Ready to Experience Dalmore?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a tour today and see firsthand why Dalmore Fossil Creek is the perfect venue for your celebration.
              </p>
              <Link href="/schedule-tour">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 transition-smooth">
                  Schedule Your Tour
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
