import React, { useState, useEffect } from 'react';
import { SNOOKER_TABLES, BOOKING_ADDONS, CLUB_INFO } from '../data/clubData';
import { BookingRequest, PoolTable } from '../types';
import { saveBooking, generateBookingRef, buildWhatsAppBookingMessage } from '../utils/bookingStore';
import { Calendar, Clock, Users, Coffee, CheckCircle2, MessageCircle, AlertCircle, Sparkles, Receipt, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface BookingPageProps {
  initialTableId?: string;
  onBookingSuccess: (booking: BookingRequest) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ initialTableId, onBookingSuccess }) => {
  // Today's YYYY-MM-DD format
  const todayStr = new Date().toISOString().split('T')[0];

  const [selectedTableId, setSelectedTableId] = useState<string>(
    initialTableId || SNOOKER_TABLES[0].id
  );

  useEffect(() => {
    if (initialTableId) {
      setSelectedTableId(initialTableId);
    }
  }, [initialTableId]);

  const selectedTable: PoolTable = SNOOKER_TABLES.find(t => t.id === selectedTableId) || SNOOKER_TABLES[0];

  const [bookingDate, setBookingDate] = useState<string>(todayStr);
  const [startTime, setStartTime] = useState<string>('08:00 PM');
  const [frameType, setFrameType] = useState<'10_balls' | '15_balls'>('10_balls');
  const [frameCount, setFrameCount] = useState<number>(3);
  const [playersCount, setPlayersCount] = useState<number>(2);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');

  // Selected add-ons { [addonId]: quantity }
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: number }>({});

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [createdBooking, setCreatedBooking] = useState<BookingRequest | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Available Time Slots
  const timeSlots = [
    '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM',
    '11:00 PM', '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM'
  ];

  // Calculation
  const activeFrameRate = frameType === '10_balls' ? (selectedTable.rate10BallsPKR || 150) : (selectedTable.rate15BallsPKR || 180);
  const tableTotal = activeFrameRate * frameCount;

  const addonsTotal = Object.entries(selectedAddons).reduce((acc, [addonId, qtyVal]) => {
    const qty = Number(qtyVal) || 0;
    if (qty <= 0) return acc;
    const addon = BOOKING_ADDONS.find(a => a.id === addonId);
    return acc + (addon ? addon.pricePKR * qty : 0);
  }, 0);

  const grandTotalPKR = tableTotal + addonsTotal;

  const handleToggleAddon = (addonId: string, delta: number) => {
    setSelectedAddons(prev => {
      const currentQty = prev[addonId] || 0;
      const nextQty = Math.max(0, currentQty + delta);
      return { ...prev, [addonId]: nextQty };
    });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!customerName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!customerPhone.trim() || customerPhone.length < 10) {
      setFormError('Please enter a valid phone number (e.g., 0300 1234567).');
      return;
    }

    const addonList = Object.entries(selectedAddons)
      .filter(([_, qtyVal]) => Number(qtyVal) > 0)
      .map(([addonId, qtyVal]) => {
        const item = BOOKING_ADDONS.find(a => a.id === addonId);
        const qty = Number(qtyVal);
        return {
          addonId,
          name: item?.name || 'Item',
          qty,
          price: item?.pricePKR || 0
        };
      });

    const newBooking: BookingRequest = {
      id: 'bk-' + Date.now(),
      bookingRef: generateBookingRef(),
      tableId: selectedTable.id,
      tableName: selectedTable.name,
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      date: bookingDate,
      startTime,
      frameType,
      frameCount,
      totalAmountPKR: grandTotalPKR,
      playersCount,
      selectedAddons: addonList,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      specialNotes: specialNotes.trim()
    };

    saveBooking(newBooking);
    setCreatedBooking(newBooking);
    setIsSubmitted(true);
    onBookingSuccess(newBooking);
  };

  return (
    <section id="booking" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Table Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white tracking-tight">
            Book Your Snooker / Pool Table
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Reserve tables at <strong className="text-amber-400">Top spin Snooker Club</strong>, Near Masjid Auqaf, Shah Kamal Road, Lahore. Real-time rate calculator & WhatsApp instant confirmation.
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Booking Form */}
            <form onSubmit={handleSubmitBooking} className="lg:col-span-8 space-y-8 bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl">
              
              {/* Step 1: Select Table */}
              <div>
                <label className="flex items-center gap-2 text-base font-bold text-white mb-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black">1</span>
                  Select 12ft Snooker Table
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SNOOKER_TABLES.map((table) => {
                    const isSelected = table.id === selectedTableId;
                    return (
                      <button
                        key={table.id}
                        type="button"
                        onClick={() => setSelectedTableId(table.id)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          isSelected
                            ? 'bg-emerald-950/70 border-emerald-500 shadow-lg shadow-emerald-950/50 text-white'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold font-mono text-emerald-400">{table.categoryName}</span>
                          <span className="text-xs font-bold text-amber-400 font-mono">Rs. 150 - 180 / frame</span>
                        </div>
                        <h4 className="font-bold text-sm text-white">{table.name}</h4>
                        <p className="text-[11px] text-slate-400 mt-1">{table.cloth}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Per Frame Rate Selection */}
              <div className="space-y-4 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between gap-3">
                  <label className="flex items-center gap-2 text-sm font-bold text-white">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black">2</span>
                    Game Rates (Per Frame Pricing):
                  </label>
                  <span className="text-xs text-amber-400 font-mono font-semibold">No Hourly Charges</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Frame Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Select Ball Frame Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFrameType('10_balls')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          frameType === '10_balls'
                            ? 'bg-amber-950/80 border-amber-400 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="block font-bold text-xs text-amber-400">10-Ball Frame</span>
                        <span className="block font-black text-sm text-white font-mono mt-0.5">Rs. 150</span>
                        <span className="block text-[10px] text-slate-400">Per game</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFrameType('15_balls')}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          frameType === '15_balls'
                            ? 'bg-emerald-950/80 border-emerald-400 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="block font-bold text-xs text-emerald-400">15-Ball Frame</span>
                        <span className="block font-black text-sm text-white font-mono mt-0.5">Rs. 180</span>
                        <span className="block text-[10px] text-slate-400">Full Snooker frame</span>
                      </button>
                    </div>
                  </div>

                  {/* Frame Count Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Number of Frames
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 5, 10].map((cnt) => (
                        <button
                          key={cnt}
                          type="button"
                          onClick={() => setFrameCount(cnt)}
                          className={`flex-1 py-3 rounded-xl font-mono font-bold text-xs border transition-colors ${
                            frameCount === cnt
                              ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
                          }`}
                        >
                          {cnt} {cnt === 1 ? 'Frame' : 'Frames'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Time Slot & Players Count */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    Reservation Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Preferred Start Time
                  </label>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    Players Count
                  </label>
                  <select
                    value={playersCount}
                    onChange={(e) => setPlayersCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value={1}>1 Player (Practice)</option>
                    <option value={2}>2 Players (Single Match)</option>
                    <option value={3}>3 Players</option>
                    <option value={4}>4 Players (Doubles)</option>
                    <option value={6}>6 Players (Group Lounge)</option>
                  </select>
                </div>
              </div>

              {/* Step 5: Customer Details */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Player Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Usman Rajput"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 4567890"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">Special Requests (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Please keep AC turned on before arrival / need cue tips chalk"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-extrabold text-slate-950 text-base bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>CONFIRM & GENERATE RESERVATION</span>
              </button>

            </form>

            {/* Right Column: Live Bill Breakdown Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                
                <div className="flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-3">
                  <Receipt className="w-5 h-5" />
                  <h3 className="font-serif font-bold text-lg text-white">Booking Summary</h3>
                </div>

                {/* Table Selected */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block">
                    Selected Table
                  </span>
                  <h4 className="font-bold text-white text-sm">{selectedTable.name}</h4>
                  <p className="text-xs text-slate-400">{selectedTable.size} • {selectedTable.cloth}</p>
                </div>

                {/* Reservation Details */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Date & Start Time:</span>
                    <span className="font-semibold text-white">{bookingDate} at {startTime}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Game Type:</span>
                    <span className="font-bold text-amber-400">
                      {frameType === '10_balls' ? '10-Ball Frame' : '15-Ball Frame'} ({frameCount} {frameCount === 1 ? 'frame' : 'frames'})
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Table Charge:</span>
                    <span className="font-mono text-emerald-400">
                      PKR {activeFrameRate} x {frameCount} frames = PKR {tableTotal}
                    </span>
                  </div>
                  {addonsTotal > 0 && (
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Add-ons Total:</span>
                      <span className="font-mono text-amber-400">PKR {addonsTotal}</span>
                    </div>
                  )}
                </div>

                {/* Grand Total */}
                <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-emerald-300 font-mono block">Grand Total</span>
                    <span className="text-xs text-slate-400">Pay at club counter</span>
                  </div>
                  <span className="text-2xl font-black text-amber-400 font-mono">
                    PKR {grandTotalPKR.toLocaleString()}
                  </span>
                </div>

                {/* Guarantees */}
                <div className="space-y-2 text-xs text-slate-400 pt-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>No advance deposit required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Near Masjid Auqaf, Shah Kamal Road, Lahore</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Receipt Card */
          createdBooking && (
            <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-slate-900 border border-emerald-500/50 shadow-2xl text-center space-y-6">
              
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase font-mono tracking-wider">
                  BOOKING CONFIRMED
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-3">
                  Reservation Ticket Generated!
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reference Code: <strong className="text-amber-400 font-mono">{createdBooking?.bookingRef}</strong>
                </p>
              </div>

              {/* Receipt Specs */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-left space-y-3 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Customer Name:</span>
                  <span className="font-bold text-white">{createdBooking?.customerName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-bold text-emerald-400">{createdBooking?.customerPhone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Table Reserved:</span>
                  <span className="font-bold text-white">{createdBooking?.tableName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Date & Slot:</span>
                  <span className="font-bold text-amber-400">{createdBooking?.date} at {createdBooking?.startTime}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Session Type:</span>
                  <span className="font-bold text-emerald-400">
                    {createdBooking?.frameCount} x {createdBooking?.frameType === '10_balls' ? '10-Ball Frames (Rs. 150/frame)' : '15-Ball Frames (Rs. 180/frame)'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Club Address:</span>
                  <span className="font-medium text-white">Near Masjid Auqaf, Shah Kamal Road, Lahore</span>
                </div>
                <div className="flex justify-between pt-1 font-bold text-sm">
                  <span className="text-slate-300">Total Payable:</span>
                  <span className="text-amber-400 font-mono text-base">PKR {createdBooking?.totalAmountPKR.toLocaleString()}</span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2 space-y-3">
                <a
                  href={buildWhatsAppBookingMessage(createdBooking!, CLUB_INFO.whatsappPhone)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-2xl font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl flex items-center justify-center gap-3 text-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Ticket via WhatsApp to Club Manager</span>
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline font-medium"
                >
                  Book another table session
                </button>
              </div>

            </div>
          )
        )}

      </div>
    </section>
  );
};
