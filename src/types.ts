export type TableCategory = 'snooker_championship' | 'snooker_vip' | 'snooker_standard';

export interface PoolTable {
  id: string;
  name: string;
  category: TableCategory;
  categoryName: string;
  size: string;
  cloth: string;
  balls: string;
  rate10BallsPKR: number; // 10 ball frame rate (e.g. 150)
  rate15BallsPKR: number; // 15 ball frame rate (e.g. 180)
  featuredImage: string;
  isVip: boolean;
  hasAC: boolean;
  maxPlayers: number;
  availableSlotsToday: string[];
  description: string;
  rating: number;
  specs: string[];
}

export interface BookingAddon {
  id: string;
  name: string;
  pricePKR: number;
  category: 'gear';
}

export interface BookingRequest {
  id: string;
  bookingRef: string;
  tableId: string;
  tableName: string;
  customerName: string;
  customerPhone: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  frameType: '10_balls' | '15_balls';
  frameCount: number;
  totalAmountPKR: number;
  playersCount: number;
  selectedAddons: { addonId: string; name: string; qty: number; price: number }[];
  status: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  specialNotes?: string;
}

export interface ClubInfo {
  name: string;
  tagline: string;
  address: string;
  road: string;
  area: string;
  city: string;
  phone: string;
  whatsappPhone: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  openingHours: string;
  googleMapEmbedUrl: string;
  googleMapDirectUrl: string;
}
