import React from 'react';
import { CLUB_FEATURES, CLUB_INFO } from '../data/clubData';
import { Award, ShieldCheck, Coffee, Tv, Sparkles, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppGeneralQuery } from '../utils/bookingStore';
import vipLoungeImg from '../assets/images/vip_snooker_lounge_1785322492572.jpg';

interface FeaturesSectionProps {
  onBookTableClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onBookTableClick }) => {
  const whatsappUrl = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    Coffee: <Coffee className="w-6 h-6 text-amber-300" />,
    Tv: <Tv className="w-6 h-6 text-cyan-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-yellow-400" />
  };

  return (
    <section id="features" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Main Hall Highlight Feature Block */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/60 border border-emerald-500/30 overflow-hidden p-8 lg:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>6 Full-Size 12ft Snooker Tables</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight leading-tight">
                Chilled AC Gaming Hall & Tournament Slates
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Step into our fully air-conditioned Top spin Snooker Club located Near Masjid Auqaf, Shah Kamal Road, Lahore. Equipped with 6 full-size 12ft tournament tables, Strachan 6811 cloth, heated slate beds, big screens, and comfortable sofa seating for players.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Continuous Inverter AC Cooling</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Championship Slate Heating Systems</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Live Cricket & PSL Big Screen TV</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Attendant Service & Pro Cue Racks</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onBookTableClick}
                  className="px-6 py-3.5 rounded-xl font-extrabold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl flex items-center gap-2"
                >
                  <span>Book A Table Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl font-bold text-sm text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl group">
                <img
                  src={vipLoungeImg}
                  alt="Top spin Snooker Club Hall"
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs">
                  <span className="text-amber-400 font-bold font-mono">6 TABLES HALL #1 - #6</span>
                  <p className="text-slate-300 text-[11px] mt-0.5">Riley & Star Championship Tables with Strachan Cloth</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Club General Highlights Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
              Why Players Choose Top spin Snooker Club
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Near Masjid Auqaf, Shah Kamal Road, Lahore — Where precision craftsmanship meets local hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLUB_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                  {iconMap[feat.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
                </div>
                <h4 className="text-lg font-bold text-white font-serif">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
