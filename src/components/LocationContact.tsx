import React, { useState } from 'react';
import { CLUB_INFO, FAQS } from '../data/clubData';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Clock, Navigation, ChevronDown, HelpCircle, Mail } from 'lucide-react';
import { buildWhatsAppGeneralQuery } from '../utils/bookingStore';

export const LocationContact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const whatsappUrl = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="location" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Near Masjid Auqaf • Shah Kamal Road Lahore</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
            Find Us & Get In Touch
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Located conveniently Near Masjid Auqaf, Shah Kamal Road, Lahore. Easily accessible from Canal Bank Road, Ichhra, Wahdat Road, and Muslim Town.
          </p>
        </div>

        {/* Contact & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 space-y-6 bg-slate-900/90 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-2xl">
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-serif text-white border-b border-slate-800 pb-4">
                Lounge Contact & Location
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-slate-400">Address</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">{CLUB_INFO.address}</p>
                  <p className="text-xs text-slate-400">{CLUB_INFO.area}, {CLUB_INFO.city}</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-slate-400">Operating Hours</h4>
                  <p className="text-sm font-bold text-emerald-300 mt-0.5">{CLUB_INFO.openingHours}</p>
                  <p className="text-xs text-slate-400">Night Match Hours: 11:00 PM – 04:00 AM</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono font-bold text-slate-400">Phone & WhatsApp</h4>
                  <a
                    href={`tel:${CLUB_INFO.phone}`}
                    className="text-sm font-extrabold text-amber-400 hover:underline block mt-0.5"
                  >
                    {CLUB_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-400">Manager Desk Helpline</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">Social Media & Direct Chat:</h4>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={CLUB_INFO.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-950/60 hover:bg-blue-900 border border-blue-800/60 text-blue-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>

                <a
                  href={CLUB_INFO.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-pink-950/60 hover:bg-pink-900 border border-pink-800/60 text-pink-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/60 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={CLUB_INFO.googleMapDirectUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Directions in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl bg-slate-900 relative min-h-[400px]">
            <iframe
              title="Top spin Snooker Club Map Location Lahore"
              src={CLUB_INFO.googleMapEmbedUrl}
              className="w-full h-full min-h-[420px] filter brightness-90 contrast-125"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* FAQs Section */}
        <div className="pt-12 border-t border-slate-900">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              Got Questions About Playing At Top spin Snooker Club?
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-400"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
