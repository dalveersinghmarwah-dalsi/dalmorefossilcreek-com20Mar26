import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ASSETS } from "../../../shared/const";

export default function Prices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title="Pricing"
          subtitle="Custom packages based on your event details and budget"
          backgroundImage={ASSETS.images.reception}
        />

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-rose-50 rounded-lg p-8 md:p-12 text-center mb-12 animate-fade-in-up">
                <h2 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                  Starting at $3,400
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our pricing is fully customizable based on your specific event needs, guest count, and date. Contact us for a personalized quote.
                </p>
                <Link href="/contact">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                    Request a Quote
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-gray-200 rounded-lg p-8 animate-fade-in-up animate-delay-100 hover:shadow-lg transition-smooth">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                    Celebrations
                  </h3>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Indoor & Outdoor Ceremony Spaces</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Grand Reception Hall (up to 220 guests)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Bridal & Groom Ready Rooms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Professional Event Coordination</span>
                    </li>
                  </ul>
                  <Link href="/schedule-tour">
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                      Schedule Tour
                    </Button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-8 animate-fade-in-up animate-delay-200 hover:shadow-lg transition-smooth">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                    Corporate Events
                  </h3>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>High-Tech Conference Facilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Flexible Layout Options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>AV Equipment & Wi-Fi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose-600 font-bold">✓</span>
                      <span>Catering & Beverage Services</span>
                    </li>
                  </ul>
                  <Link href="/schedule-tour">
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                      Schedule Tour
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center animate-fade-in-up animate-delay-300">
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team is ready to discuss your event and provide a customized quote.
                </p>
                <Link href="/contact">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
