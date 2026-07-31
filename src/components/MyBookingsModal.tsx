import React from 'react';
import { BookingRequest } from '../types';
import { cancelBooking, buildWhatsAppBookingMessage } from '../utils/bookingStore';
import { CLUB_INFO } from '../data/clubData';
import { Calendar, Clock, MessageCircle, XCircle, CheckCircle2, AlertCircle, MapPin, Trash2, Receipt } from 'lucide-react';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: BookingRequest[];
  onBookingsUpdated: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onBookingsUpdated
}) => {
  if (!isOpen) return null;

  const handleCancel = (id: string) => {
    if (confirm('Are you sure you want to cancel this table reservation?')) {
      cancelBooking(id);
      onBookingsUpdated();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif text-white">My Table Reservations</h3>
              <p className="text-xs text-slate-400">Top spin Snooker Club • Shah Kamal Road Lahore</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <Calendar className="w-12 h-12 mx-auto text-slate-600" />
              <p className="text-base font-semibold text-slate-300">No Reservations Found</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                You haven't reserved any snooker or pool tables yet. Book a table now to secure your frame time!
              </p>
            </div>
          ) : (
            bookings.map((booking) => {
              const isCancelled = booking.status === 'cancelled';
              const waLink = buildWhatsAppBookingMessage(booking, CLUB_INFO.whatsappPhone);

              return (
                <div
                  key={booking.id}
                  className={`p-5 rounded-2xl border transition-all space-y-3 ${
                    isCancelled
                      ? 'bg-slate-950/60 border-slate-800/80 opacity-60'
                      : 'bg-slate-950 border-emerald-900/60 hover:border-emerald-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/40">
                        {booking.bookingRef}
                      </span>
                      <span className="font-bold text-sm text-white">{booking.tableName}</span>
                    </div>

                    <span className={`text-[11px] font-bold uppercase font-mono px-2.5 py-0.5 rounded-full ${
                      isCancelled
                        ? 'bg-red-950 text-red-400 border border-red-800/50'
                        : 'bg-emerald-950 text-emerald-400 border border-emerald-800/50'
                    }`}>
                      {isCancelled ? 'CANCELLED' : 'CONFIRMED'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Date:</span>
                      <span className="font-semibold text-white">{booking.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Session Details:</span>
                      <span className="font-semibold text-white">
                        {booking.startTime} • {booking.frameCount ? `${booking.frameCount} x ${booking.frameType === '10_balls' ? '10-Ball Frame' : '15-Ball Frame'}` : 'Per Frame'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Total Amount:</span>
                      <span className="font-mono font-bold text-amber-400">PKR {booking.totalAmountPKR.toLocaleString()}</span>
                    </div>
                  </div>

                  {booking.selectedAddons.length > 0 && (
                    <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/50">
                      <span className="text-slate-500">Add-ons: </span>
                      {booking.selectedAddons.map(a => `${a.name} (x${a.qty})`).join(', ')}
                    </div>
                  )}

                  {!isCancelled && (
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-3.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Send Ticket to WhatsApp</span>
                      </a>

                      <button
                        onClick={() => handleCancel(booking.id)}
                        className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-900 text-xs flex items-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
