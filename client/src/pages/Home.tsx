import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ASSETS, VENUE_INFO, AMENITIES } from "../../../shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronRight, Heart, Users, Sparkles } from "lucide-react";

export default function Home() {
  const aboutRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const amenitiesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${ASSETS.images.hero}')`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
              {VENUE_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in-up animate-delay-100">
              {VENUE_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
              <Link href="/schedule-tour">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 transition-smooth">
                  Schedule Tour
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 transition-smooth"
                >
                  View Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-16 md:py-24 bg-white scroll-animate">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate-left">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                  Welcome to Dalmore
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed animate-fade-in-up">
                  Discover the perfect venue for your wedding, celebration, or corporate event. Dalmore Fossil Creek offers luxurious indoor and outdoor spaces with stunning views and complete amenities.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in-up animate-delay-100">
                  Our versatile event space accommodates intimate gatherings and grand celebrations alike, with professional staff ready to make your event unforgettable.
                </p>
                <Link href="/amenities">
                  <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth animate-fade-in-up animate-delay-200">
                    Explore Amenities <ChevronRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative scroll-animate-right">
                <img
                  src={ASSETS.images.ceremony}
                  alt="Ceremony"
                  className="rounded-lg shadow-lg w-full h-96 object-cover hover:shadow-xl transition-smooth"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section ref={servicesRef} className="py-16 md:py-24 bg-gray-50 scroll-animate">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From intimate celebrations to grand corporate events, we have the perfect space and services for your occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Celebrations Card */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-smooth p-8 scroll-animate-scale">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-rose-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Celebrations
                </h3>
                <p className="text-gray-600 mb-6">
                  Weddings, anniversaries, and special occasions. Create unforgettable memories in our elegant spaces.
                </p>
                <Link href="/celebrations">
                  <a className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth">
                    Learn More <ChevronRight size={16} />
                  </a>
                </Link>
              </div>

              {/* Corporate Events Card */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-smooth p-8 scroll-animate-scale">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-rose-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Corporate Events
                </h3>
                <p className="text-gray-600 mb-6">
                  Conferences, meetings, and team events with state-of-the-art facilities and professional support.
                </p>
                <Link href="/corporate">
                  <a className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth">
                    Learn More <ChevronRight size={16} />
                  </a>
                </Link>
              </div>

              {/* Receptions Card */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-smooth p-8 scroll-animate-scale">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-rose-600" size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                  Receptions
                </h3>
                <p className="text-gray-600 mb-6">
                  Grand reception halls for up to 220 guests with elegant dining and entertainment spaces.
                </p>
                <Link href="/prices">
                  <a className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth">
                    View Pricing <ChevronRight size={16} />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Preview */}
        <section ref={amenitiesRef} className="py-16 md:py-24 bg-white scroll-animate">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-gray-900 text-center scroll-animate">
              Venue Amenities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AMENITIES.slice(0, 6).map((amenity: any, index: number) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:border-rose-300 hover:shadow-md transition-smooth scroll-animate"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-900">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 scroll-animate">
              <Link href="/amenities">
                <Button className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth">
                  View All Amenities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 md:py-24 bg-gradient-to-r from-rose-600 to-rose-700 text-white scroll-animate">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Plan Your Event?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Schedule a tour of our beautiful venue and discover why Dalmore Fossil Creek is the perfect choice for your celebration.
            </p>
            <Link href="/schedule-tour">
              <Button className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6 transition-smooth">
                Schedule Your Tour Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
