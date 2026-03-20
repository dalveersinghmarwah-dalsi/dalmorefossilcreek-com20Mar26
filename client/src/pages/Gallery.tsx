import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ASSETS } from "../../../shared/const";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="Venue Gallery"
          subtitle="Explore the beauty and elegance of Dalmore Fossil Creek"
          backgroundImage={ASSETS.images.gallery[0]}
        />

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 mx-8 md:mx-16 lg:mx-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ASSETS.images.gallery.map((image: string, index: number) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-medium">View</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-smooth"
            >
              <X size={24} className="text-black" />
            </button>
            <img
              src={selectedImage}
              alt="Full size gallery image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
