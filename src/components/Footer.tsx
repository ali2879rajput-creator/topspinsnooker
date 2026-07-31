import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Clock, Heart } from 'lucide-react';
import { buildWhatsAppGeneralQuery } from '../utils/bookingStore';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const whatsappUrl = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-slate-900 to-amber-600 p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-base font-black text-amber-400 font-mono">8</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-white text-lg tracking-tight">TOP SPIN</h3>
                <p className="text-[11px] text-emerald-400 font-mono uppercase tracking-widest">Snooker Club</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Lahore’s premier snooker club located Near Masjid Auqaf, Shah Kamal Road. Tournament Strachan cloth tables, heated slates, full AC gaming hall, and 24/7 gaming environment.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLUB_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                title="Facebook"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Direct Inquiry"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tables')} className="hover:text-white transition-colors">
                  Snooker & Pool Tables
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-white transition-colors text-amber-300 font-semibold">
                  Reserve A Table Online
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-white transition-colors">
                  Club Amenities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('location')} className="hover:text-white transition-colors">
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Shah Kamal Road Location</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Near Masjid Auqaf, Shah Kamal Road, Lahore, Punjab, Pakistan</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{CLUB_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </p>
            </div>
          </div>

          {/* Hours & Table Reservation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Table Reservations</h4>
            <p className="text-xs text-slate-400">
              Walk-ins welcome, or book your table online to avoid waiting during peak night hours.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg transition-colors"
            >
              Book Table Online
            </button>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Top spin Snooker Club. Near Masjid Auqaf, Shah Kamal Road, Lahore. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Crafted for Snooker & Pool Enthusiasts in Lahore
          </p>
        </div>

      </div>
    </footer>
  );
};
