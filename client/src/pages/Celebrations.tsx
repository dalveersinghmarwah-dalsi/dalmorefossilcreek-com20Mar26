import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ASSETS } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Celebrations() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-r from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Celebrations
            </h1>
            <p className="text-lg text-gray-600">
              Make your special moments unforgettable
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                  Your Perfect Celebration
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  From intimate ceremonies to grand receptions, Dalmore Fossil Creek provides the perfect setting for your celebration. Our elegant indoor and outdoor spaces can be customized to match your vision.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Lakeside outdoor ceremony space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Indoor chapel with wooden arches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Grand reception hall for up to 220 guests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-xl">✓</span>
                    <span className="text-gray-600">Luxurious bridal ready room</span>
                  </li>
                </ul>
                <Link href="/schedule-tour">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    Schedule Tour
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={ASSETS.images.ceremony}
                  alt="Ceremony"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="bg-rose-50 rounded-lg p-12 text-center">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Custom Packages Available
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                Starting at $3,400 - Fully customizable based on your needs
              </p>
              <Link href="/prices">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white">
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
