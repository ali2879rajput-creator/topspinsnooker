import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TableSelection } from './components/TableSelection';
import { BookingPage } from './components/BookingPage';
import { FeaturesSection } from './components/FeaturesSection';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MyBookingsModal } from './components/MyBookingsModal';
import { getSavedBookings } from './utils/bookingStore';
import { BookingRequest } from './types';
import { CLUB_INFO } from './data/clubData';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
import { buildWhatsAppGeneralQuery } from './utils/bookingStore';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedTableForBooking, setSelectedTableForBooking] = useState<string | undefined>(undefined);
  const [myBookings, setMyBookings] = useState<BookingRequest[]>([]);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState<boolean>(false);

  // Load saved bookings on mount
  useEffect(() => {
    refreshBookings();
  }, []);

  const refreshBookings = () => {
    setMyBookings(getSavedBookings());
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTableForBooking = (tableId: string) => {
    setSelectedTableForBooking(tableId);
    handleNavigate('booking');
  };

  const handleBookingSuccess = (newBooking: BookingRequest) => {
    refreshBookings();
  };

  const whatsappUrl = buildWhatsAppGeneralQuery(CLUB_INFO.whatsappPhone);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        myBookingsCount={myBookings.filter(b => b.status === 'confirmed').length}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        onOpenBookingModal={(tableId) => {
          if (tableId) setSelectedTableForBooking(tableId);
          handleNavigate('booking');
        }}
      />

      {/* Main One Page Sections */}
      <main className="space-y-0">
        {/* Hero Banner */}
        <HeroSection
          onBookTableClick={() => handleNavigate('booking')}
          onExploreTablesClick={() => handleNavigate('tables')}
        />

        {/* Snooker & Pool Tables Grid */}
        <TableSelection
          onSelectTableForBooking={handleSelectTableForBooking}
        />

        {/* Dedicated Interactive Booking Module / Page */}
        <BookingPage
          initialTableId={selectedTableForBooking}
          onBookingSuccess={handleBookingSuccess}
        />

        {/* Club Amenities & Features */}
        <FeaturesSection
          onBookTableClick={() => handleNavigate('booking')}
        />

        {/* Location (Near Masjid Auqaf, Shah Kamal Road Lahore) & Map */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleNavigate('booking')}
      />

      {/* Floating Action Button for Instant WhatsApp Chat & Social Links */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating Social Quick Stack */}
        <div className="flex flex-col gap-2 items-center bg-slate-950/90 p-2 rounded-2xl border border-slate-800 shadow-2xl backdrop-blur-md">
          <a
            href={CLUB_INFO.facebookUrl}
            target="_blank"
            rel="noreferrer"
            title="Facebook Page - Top spin Snooker Club"
            className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-slate-900 transition-all"
          >
            <Facebook className="w-5 h-5" />
          </a>

          <a
            href={CLUB_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            title="Instagram - Top spin Snooker Club"
            className="p-2.5 rounded-xl text-slate-400 hover:text-pink-400 hover:bg-slate-900 transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            title="WhatsApp Direct Reservation Inquiry"
            className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:scale-105 transition-all flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* My Bookings Drawer/Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={myBookings}
        onBookingsUpdated={refreshBookings}
      />

    </div>
  );
}
