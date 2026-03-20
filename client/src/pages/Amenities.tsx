import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AMENITIES, ASSETS } from "../../../shared/const";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Amenities() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-r from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Venue Amenities
            </h1>
            <p className="text-lg text-gray-600">
              Complete facilities designed for your perfect event
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                  Everything You Need
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Dalmore Fossil Creek is equipped with state-of-the-art facilities and amenities to ensure your event runs seamlessly. From elegant ceremony spaces to spacious reception halls, we have everything covered.
                </p>
                <Link href="/schedule-tour">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                    Schedule a Tour
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={ASSETS.images.ballroom}
                  alt="Ballroom"
                  className="rounded-lg shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {AMENITIES.map((amenity: any, index: number) => (
                <div
                  key={index}
                  className="p-8 border-2 border-gray-100 rounded-lg hover:border-rose-300 hover:shadow-lg transition-all"
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

            <div className="mt-16 p-12 bg-rose-50 rounded-lg text-center">
              <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
                Ready to Experience Dalmore?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Schedule a tour today and see firsthand why Dalmore Fossil Creek is the perfect venue for your celebration.
              </p>
              <Link href="/schedule-tour">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6">
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
