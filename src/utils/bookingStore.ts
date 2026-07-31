import { BookingRequest } from '../types';

const STORAGE_KEY = 'top_spin_snooker_bookings_v1';

export function getSavedBookings(): BookingRequest[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to parse saved bookings:', err);
    return [];
  }
}

export function saveBooking(booking: BookingRequest): BookingRequest[] {
  const current = getSavedBookings();
  const updated = [booking, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save booking to localStorage:', err);
  }
  return updated;
}

export function cancelBooking(bookingId: string): BookingRequest[] {
  const current = getSavedBookings();
  const updated = current.map(b => b.id === bookingId ? { ...b, status: 'cancelled' as const } : b);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update booking status:', err);
  }
  return updated;
}

export function generateBookingRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'TSC-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function buildWhatsAppBookingMessage(b: BookingRequest, whatsappPhone: string): string {
  const durationOrFrameText = b.frameCount
    ? `${b.frameCount} x ${b.frameType === '10_balls' ? '10-Ball Frames (Rs. 150/frame)' : '15-Ball Frames (Rs. 180/frame)'}`
    : 'Per Frame Snooker Match';

  const text = `*NEW TABLE RESERVATION - TOP SPIN SNOOKER CLUB* 🎱
  
📍 *Location:* Near Masjid Auqaf, Shah Kamal Road, Lahore
🎟️ *Booking Ref:* ${b.bookingRef}
🎱 *Table:* ${b.tableName}
👤 *Name:* ${b.customerName}
📞 *Phone:* ${b.customerPhone}
📅 *Date:* ${b.date}
⏰ *Time:* ${b.startTime}
🎯 *Session:* ${durationOrFrameText}
👥 *Players:* ${b.playersCount}
💰 *Total Amount:* PKR ${b.totalAmountPKR.toLocaleString()}

${b.selectedAddons.length > 0 ? `☕ *Add-ons:* ${b.selectedAddons.map(a => `${a.name} (x${a.qty})`).join(', ')}\n` : ''}${b.specialNotes ? `📝 *Notes:* ${b.specialNotes}\n` : ''}Please confirm my reservation slot. Thank you!`;

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppGeneralQuery(whatsappPhone: string): string {
  return `https://wa.me/${whatsappPhone}`;
}
