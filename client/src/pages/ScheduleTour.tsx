import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { VENUE_INFO } from "../../../shared/const";
import { toast } from "sonner";

export default function ScheduleTour() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.eventType
    ) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Tour request submitted! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-r from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
              Schedule a Tour
            </h1>
            <p className="text-lg text-gray-600">
              Experience Dalmore Fossil Creek in person
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">
                  Request a Tour
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="celebration">Celebration</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="reception">Reception</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Tour Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Guest Count
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                        placeholder="50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
                      placeholder="Tell us more about your event..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3"
                  >
                    Request Tour
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-600">{VENUE_INFO.address}</p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Phone
                    </h3>
                    <a
                      href={`tel:${VENUE_INFO.phone}`}
                      className="text-rose-600 hover:text-rose-700 font-medium"
                    >
                      {VENUE_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email
                    </h3>
                    <a
                      href={`mailto:${VENUE_INFO.email}`}
                      className="text-rose-600 hover:text-rose-700 font-medium"
                    >
                      {VENUE_INFO.email}
                    </a>
                  </div>

                  <div className="bg-rose-50 p-8 rounded-lg border-2 border-rose-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday - Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
