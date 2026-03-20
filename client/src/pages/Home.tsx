import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ASSETS, VENUE_INFO, AMENITIES } from "../../../shared/const";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { ChevronRight, Heart, Users, Sparkles, ArrowDown } from "lucide-react";

export default function Home() {
  const aboutRef = useInView();
  const servicesRef = useInView();
  const amenitiesRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-smooth-lg"
            style={{
              backgroundImage: `url('${ASSETS.images.hero}')`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-smooth-lg"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
              {VENUE_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in-up animate-delay-100">
              {VENUE_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
              <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-8 py-6 transition-smooth hover-lift">
                <Link href="/schedule-tour">
                  Schedule Tour
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 transition-smooth hover-lift">
                <Link href="/gallery">
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <ArrowDown className="text-white opacity-70 animate-bounce" size={24} />
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef.ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-100 rounded-full -ml-36 -mb-36 opacity-30"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`scroll-trigger-left ${aboutRef.isInView ? 'in-view' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                  Welcome to Dalmore
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Discover the perfect venue for your wedding, celebration, or corporate event. Dalmore Fossil Creek offers luxurious indoor and outdoor spaces with stunning views and complete amenities.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our versatile event space accommodates intimate gatherings and grand celebrations alike, with professional staff ready to make your event unforgettable.
                </p>
                <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth hover-lift">
                  <Link href="/amenities">
                    Explore Amenities <ChevronRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className={`relative scroll-trigger-right ${aboutRef.isInView ? 'in-view' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-600 rounded-lg blur-xl opacity-25 group-hover:opacity-40 transition-smooth-lg"></div>
                  <img
                    src={ASSETS.images.ceremony}
                    alt="Ceremony"
                    className="relative rounded-lg shadow-2xl w-full h-96 object-cover hover-lift hover-glow"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-lg -z-10 group-hover:scale-110 transition-smooth-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section ref={servicesRef.ref} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-16 scroll-trigger ${servicesRef.isInView ? 'in-view' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mb-4 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From intimate celebrations to grand corporate events, we have the perfect space and services for your occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Celebrations Card */}
              <Button asChild className={`bg-white rounded-lg shadow-md hover-lift hover-glow p-8 cursor-pointer relative group overflow-hidden scroll-trigger-bounce ${servicesRef.isInView ? 'in-view' : ''}`} style={{ animationDelay: '0s' }}>
                <Link href="/celebrations">
                  <div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-smooth-lg"></div>
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-smooth">
                      <Heart className="text-rose-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                      Celebrations
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Weddings, anniversaries, and special occasions. Create unforgettable memories in our elegant spaces.
                    </p>
                    <span className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth group-hover:translate-x-2">
                      Learn More <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </Button>

              {/* Corporate Events Card */}
              <Button asChild className={`bg-white rounded-lg shadow-md hover-lift hover-glow p-8 cursor-pointer relative group overflow-hidden scroll-trigger-bounce ${servicesRef.isInView ? 'in-view' : ''}`} style={{ animationDelay: '0.1s' }}>
                <Link href="/corporate">
                  <div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-smooth-lg"></div>
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-smooth">
                      <Users className="text-rose-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                      Corporate Events
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Conferences, meetings, and team events with state-of-the-art facilities and professional support.
                    </p>
                    <span className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth group-hover:translate-x-2">
                      Learn More <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </Button>

              {/* Receptions Card */}
              <Button asChild className={`bg-white rounded-lg shadow-md hover-lift hover-glow p-8 cursor-pointer relative group overflow-hidden scroll-trigger-bounce ${servicesRef.isInView ? 'in-view' : ''}`} style={{ animationDelay: '0.2s' }}>
                <Link href="/prices">
                  <div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-rose-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-smooth-lg"></div>
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-smooth">
                      <Sparkles className="text-rose-600" size={24} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900">
                      Receptions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Grand reception halls for up to 220 guests with elegant dining and entertainment spaces.
                    </p>
                    <span className="text-rose-600 hover:text-rose-700 font-medium flex items-center gap-2 transition-smooth group-hover:translate-x-2">
                      View Pricing <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Amenities Preview */}
        <section ref={amenitiesRef.ref} className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-50 rounded-full -mr-48 opacity-40"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 text-center scroll-trigger ${amenitiesRef.isInView ? 'in-view' : ''}`}>
              Venue Amenities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mb-12 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AMENITIES.slice(0, 6).map((amenity: any, index: number) => (
                <div
                  key={index}
                  className={`p-6 border-2 border-gray-100 rounded-lg hover-lift hover-glow transition-smooth scroll-trigger-scale group ${amenitiesRef.isInView ? 'in-view' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg mb-4 group-hover:scale-110 transition-smooth"></div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-900 group-hover:text-rose-600 transition-smooth">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={`text-center mt-16 scroll-trigger ${amenitiesRef.isInView ? 'in-view' : ''}`}>
              <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white transition-smooth hover-lift px-8 py-3">
                <Link href="/amenities">
                  View All Amenities
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef.ref} className="py-16 md:py-24 bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 scroll-trigger ${ctaRef.isInView ? 'in-view' : ''}`}>
              Ready to Plan Your Event?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto opacity-90 scroll-trigger ${ctaRef.isInView ? 'in-view' : ''}`} style={{ animationDelay: '0.1s' }}>
              Schedule a tour of our beautiful venue and discover why Dalmore Fossil Creek is the perfect choice for your celebration.
            </p>
            <Button asChild className={`bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6 transition-smooth hover-lift font-semibold scroll-trigger ${ctaRef.isInView ? 'in-view' : ''}`} style={{ animationDelay: '0.2s' }}>
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
