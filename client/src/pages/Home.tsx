import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ASSETS, VENUE_INFO, AMENITIES } from "../../../shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Heart, Users, Sparkles, ArrowDown, Star, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* HERO SECTION - Premium with dynamic effects */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${ASSETS.images.hero}')`,
              backgroundPosition: "center",
              animation: "zoom-in 20s ease-out infinite alternate",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
                {VENUE_INFO.name}
              </h1>
              <p className="text-2xl md:text-3xl mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
                {VENUE_INFO.tagline}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-10 py-7 rounded-lg shadow-2xl hover:shadow-rose-600/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link href="/schedule-tour">
                  Schedule Tour
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-2 border-white hover:bg-white/20 text-lg px-10 py-7 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link href="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white opacity-80" size={32} />
          </div>
        </section>

        {/* ABOUT SECTION - Premium layout */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full -mr-48 -mt-48 opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-100 rounded-full -ml-36 -mb-36 opacity-40"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-6">
                  Premium Venue Experience
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-gray-900 leading-tight">
                  Welcome to Dalmore
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Discover the perfect venue for your wedding, celebration, or corporate event. Dalmore Fossil Creek offers luxurious indoor and outdoor spaces with stunning views and complete amenities.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our versatile event space accommodates intimate gatherings and grand celebrations alike, with professional staff ready to make your event unforgettable.
                </p>
                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-rose-600/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <Link href="/amenities">
                    Explore Amenities <ChevronRight size={20} className="ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="animate-fade-in-up animate-delay-200">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                  <img
                    src={ASSETS.images.ceremony}
                    alt="Ceremony"
                    className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Dynamic cards */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-6">
                What We Offer
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From intimate celebrations to grand corporate events, we have the perfect space and services for your occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="animate-fade-in-up animate-delay-100 group">
                <Link href="/celebrations">
                  <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <Heart className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                        Celebrations
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Weddings, anniversaries, and special occasions. Create unforgettable memories in our elegant spaces.
                      </p>
                      <span className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
                        Learn More <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="animate-fade-in-up animate-delay-200 group">
                <Link href="/corporate">
                  <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <Users className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                        Corporate Events
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Conferences, meetings, and team events with state-of-the-art facilities and professional support.
                      </p>
                      <span className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
                        Learn More <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="animate-fade-in-up animate-delay-300 group">
                <Link href="/prices">
                  <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                        Receptions
                      </h3>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        Grand reception halls for up to 220 guests with elegant dining and entertainment spaces.
                      </p>
                      <span className="text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
                        View Pricing <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AMENITIES SECTION - Grid with hover effects */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-50 rounded-full -mr-48 opacity-50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-6">
                Facilities
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
                Venue Amenities
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AMENITIES.slice(0, 6).map((amenity: any, index: number) => (
                <div
                  key={index}
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-rose-300 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl mb-6 flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300">
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4 text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 animate-fade-in-up animate-delay-300">
              <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-lg shadow-lg hover:shadow-rose-600/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <Link href="/amenities">
                  View All Amenities
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA SECTION - Premium gradient */}
        <section className="py-24 bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 animate-fade-in-up">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-95 animate-fade-in-up animate-delay-100">
              Schedule a tour of our beautiful venue and discover why Dalmore Fossil Creek is the perfect choice for your celebration.
            </p>
            <Button asChild className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-12 py-5 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold animate-fade-in-up animate-delay-200">
              <Link href="/schedule-tour">
                Schedule Your Tour Today
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
