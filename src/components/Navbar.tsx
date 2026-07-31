import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Calendar, Clock, Facebook, Instagram, Shield, ChevronRight } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { buildWhatsAppGeneralQuery } from '../utils/bookingStore';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  myBookingsCount: number;
  onOpenMyBookings: () => void;
  onOpenBookingModal: (tableId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  myBookingsCount,
  onOpenMyBookings,
  onOpenBookingModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'tables', label: 'Tables & Rates' },
    { id: 'booking', label: 'Book Table' },
    { id: 'features', label: 'Amenities' },
    { id: 'location', label: 'Location' },
  ];

  const whatsappLink = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-emerald-900/30 text-slate-100 shadow-2xl">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 px-4 py-1.5 text-xs border-b border-emerald-800/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-emerald-300/90 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Near Masjid Auqaf, Shah Kamal Road, Lahore
            </span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Open 24/7 Daily
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Icons in Header */}
            <div className="flex items-center gap-2 pr-2 border-r border-slate-800">
              <a
                href={CLUB_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                title="Facebook - Top spin Snooker Club"
                className="p-1 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                title="Instagram - Top spin Snooker Club"
                className="p-1 rounded-full text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Direct Inquiry"
                className="p-1 rounded-full text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={`tel:${CLUB_INFO.phone}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLUB_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Branding */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 via-slate-900 to-amber-600 p-0.5 shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Snooker ball stylized icon */}
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-amber-300 to-emerald-400 font-mono">
                  8
                </span>
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white font-serif group-hover:text-amber-400 transition-colors">
                  TOP SPIN
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 font-mono font-bold border border-emerald-800/40">
                  LAHORE
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans tracking-wide">
                6 AC Snooker Tables • Shah Kamal Road
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-900/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Social Quick Access */}
          <div className="hidden lg:flex items-center gap-3">
            {/* My Bookings Button */}
            <button
              onClick={onOpenMyBookings}
              className="relative flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>My Bookings</span>
              {myBookingsCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-slate-950 bg-amber-400 rounded-full animate-pulse">
                  {myBookingsCount}
                </span>
              )}
            </button>

            {/* Book Now Main CTA */}
            <button
              onClick={() => onOpenBookingModal()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Book A Table</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenMyBookings}
              className="relative p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              aria-label="My Bookings"
            >
              <Calendar className="w-5 h-5 text-emerald-400" />
              {myBookingsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold text-slate-950 bg-amber-400 rounded-full flex items-center justify-center">
                  {myBookingsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                  activeSection === item.id
                    ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50'
                    : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 text-center shadow-lg"
            >
              Book A Table Now
            </button>

            <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-800">
              <a
                href={CLUB_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href={CLUB_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-pink-400"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
