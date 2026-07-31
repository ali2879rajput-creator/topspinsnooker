import React from 'react';
import { MapPin, MessageCircle, Calendar, Sparkles, Facebook, Instagram, ShieldCheck, ChevronRight, Award, Trophy, Phone } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import { buildWhatsAppGeneralQuery } from '../utils/bookingStore';
import heroBannerImg from '../assets/images/hero_snooker_table_1785325722220.jpg';

interface HeroSectionProps {
  onBookTableClick: () => void;
  onExploreTablesClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookTableClick,
  onExploreTablesClick
}) => {
  const whatsappUrl = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-16 sm:py-24">
      {/* Background Hero Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImg}
          alt="Top spin Snooker Club Interior"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950" />
      </div>

      {/* Decorative Emerald Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Highlight Location Tag & Frame Rates Banner */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-2xl backdrop-blur-md">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Near Masjid Auqaf, Shah Kamal Road, Lahore</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/90 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-bold shadow-2xl backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>10 Balls: <strong className="text-white">Rs. 150</strong> | 15 Balls: <strong className="text-white">Rs. 180</strong></span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-serif max-w-5xl mx-auto leading-tight">
          TOP SPIN SNOOKER CLUB <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400">
            6 FULL-SIZE AC TABLES
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-sans leading-relaxed">
          Welcome to <strong className="text-white font-semibold">Top spin Snooker Club</strong> located Near Masjid Auqaf, Shah Kamal Road, Lahore. We feature 6 full-size 12ft Snooker tables in a 24/7 chilled AC environment with Strachan 6811 cloth and best-in-class gaming services.
        </p>

        {/* Social Icons Quick Bar */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">Connect With Us:</span>
          <div className="flex items-center gap-3">
            <a
              href={CLUB_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-blue-400 hover:text-white hover:bg-blue-600 transition-all shadow-lg hover:scale-110"
              title="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={CLUB_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-pink-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:scale-110"
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-emerald-800/80 text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all shadow-lg hover:scale-110"
              title="WhatsApp Direct Inquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={onBookTableClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 text-base"
          >
            <Calendar className="w-5 h-5" />
            <span>BOOK A TABLE NOW</span>
            <ChevronRight className="w-5 h-5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-white bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-600/50 hover:border-emerald-500 transition-all shadow-xl flex items-center justify-center gap-2 text-base backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp Booking</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-sm">Riley & Star</span>
            </div>
            <p className="text-xs text-slate-400">12ft Full Size Championship Tables</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
              <Award className="w-4 h-4" />
              <span className="text-sm">Strachan 6811</span>
            </div>
            <p className="text-xs text-slate-400">Gold Tournament Green Felts</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm">24/7 Chilled AC</span>
            </div>
            <p className="text-xs text-slate-400">Inverter AC Gaming Environment</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-left">
            <div className="flex items-center gap-2 text-amber-300 font-bold mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Open 24/7</span>
            </div>
            <p className="text-xs text-slate-400">Late Night Snooker & Pro Cues</p>
          </div>
        </div>

      </div>
    </section>
  );
};
