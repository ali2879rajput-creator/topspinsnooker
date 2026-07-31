import React, { useState } from 'react';
import { SNOOKER_TABLES } from '../data/clubData';
import { TableCategory, PoolTable } from '../types';
import { Star, Users, Flame, Shield, Check, ArrowRight, Zap, Info } from 'lucide-react';

interface TableSelectionProps {
  onSelectTableForBooking: (tableId: string) => void;
}

export const TableSelection: React.FC<TableSelectionProps> = ({ onSelectTableForBooking }) => {
  const [selectedTableForSpecs, setSelectedTableForSpecs] = useState<PoolTable | null>(null);

  const filteredTables = SNOOKER_TABLES;

  return (
    <section id="tables" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Tournament Cloth & Slate Bed Tables</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
            Our 12ft Snooker Tables
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your preferred table at <strong className="text-emerald-400">Top spin Snooker Club</strong> (Near Masjid Auqaf, Shah Kamal Road, Lahore). Reserve online to guarantee your frame time.
          </p>
        </div>

        {/* Tables Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTables.map((table) => (
            <div
              key={table.id}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Table Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                  {table.categoryName}
                </span>
                {table.hasAC && (
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                    Full AC
                  </span>
                )}
              </div>

              {/* Table Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={table.featuredImage}
                  alt={table.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Frame Rate Overlay */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md text-right">
                  <span className="text-[10px] text-slate-400 block uppercase font-mono tracking-wider">Per Frame Rate</span>
                  <span className="text-sm font-black text-amber-400 font-mono">
                    Rs. 150 - 180
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-emerald-400 font-mono font-semibold mb-1">
                    <span>{table.categoryName}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Users className="w-3.5 h-3.5" /> Max {table.maxPlayers} Players
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                    {table.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {table.description}
                  </p>

                  {/* Spec List */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-amber-500/30 flex items-center justify-between font-mono">
                      <span className="text-amber-400 font-bold">10-Ball Frame:</span>
                      <span className="text-white font-bold">PKR {table.rate10BallsPKR || 150}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center justify-between font-mono">
                      <span className="text-emerald-400 font-bold">15-Ball Frame:</span>
                      <span className="text-white font-bold">PKR {table.rate15BallsPKR || 180}</span>
                    </div>
                  </div>
                </div>

                {/* Available Slots Preview */}
                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Today's Slots:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {table.availableSlotsToday.slice(0, 4).map((slot, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-slate-950 text-[11px] text-slate-300 border border-slate-800 font-mono"
                      >
                        {slot}
                      </span>
                    ))}
                    {table.availableSlotsToday.length > 4 && (
                      <span className="px-2 py-1 rounded bg-slate-950 text-[11px] text-emerald-400 font-mono">
                        +{table.availableSlotsToday.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedTableForSpecs(table)}
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    title="Table Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onSelectTableForBooking(table.id)}
                    className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-md hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Reserve Table</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Table Specs Detail Modal */}
      {selectedTableForSpecs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 text-slate-100 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-bold text-amber-400 font-serif">
                {selectedTableForSpecs.name}
              </h3>
              <button
                onClick={() => setSelectedTableForSpecs(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300">
              {selectedTableForSpecs.description}
            </p>

            <div className="space-y-2 text-sm bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Dimensions / Size:</span>
                <span className="font-bold text-white">{selectedTableForSpecs.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cloth Felt:</span>
                <span className="font-bold text-emerald-400">{selectedTableForSpecs.cloth}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Official Balls:</span>
                <span className="font-bold text-white">{selectedTableForSpecs.balls}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Frame Pricing:</span>
                <span className="font-bold text-amber-400 font-mono">10-Ball: Rs. 150 | 15-Ball: Rs. 180</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">Key Features & Amenities:</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedTableForSpecs.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                onClick={() => {
                  const id = selectedTableForSpecs.id;
                  setSelectedTableForSpecs(null);
                  onSelectTableForBooking(id);
                }}
                className="w-full py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Proceed To Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
