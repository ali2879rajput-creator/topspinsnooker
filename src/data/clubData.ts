import { PoolTable, ClubInfo, BookingAddon } from '../types';
import heroBannerImg from '../assets/images/hero_snooker_table_1785325722220.jpg';
import vipLoungeImg from '../assets/images/vip_snooker_lounge_1785322492572.jpg';
import starTableImg from '../assets/images/snooker_star_table_1785325056357.jpg';
import masterTableImg from '../assets/images/snooker_master_table_1785325077777.jpg';
import premierTableImg from '../assets/images/snooker_premier_table_1785325094309.jpg';

export const CLUB_INFO: ClubInfo = {
  name: 'Top spin Snooker Club',
  tagline: 'Premier 6-Table AC Snooker Club Near Masjid Auqaf, Shah Kamal Road, Lahore',
  address: 'Near Masjid Auqaf, Shah Kamal Road',
  road: 'Shah Kamal Road',
  area: 'Near Masjid Auqaf',
  city: 'Lahore, Punjab, Pakistan',
  phone: '0312 4077787',
  whatsappPhone: '923124077787',
  whatsappFormatted: '0312 4077787',
  whatsappUrl: 'https://wa.me/923124077787',
  facebookUrl: 'https://www.instagram.com/faraank1967/',
  instagramUrl: 'https://www.instagram.com/faraank1967/',
  openingHours: 'Open 24/7 Daily (Full Inverter AC Chilled Environment)',
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.12345678!2d74.321!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23bf392330a10c8!2sShah%20Kamal%20Road%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1650000000000!5m2!1sen!2spk',
  googleMapDirectUrl: 'https://maps.google.com/?q=Top+spin+Snooker+Club+Near+Masjid+Auqaf+Shah+Kamal+Road+Lahore'
};

export const SNOOKER_TABLES: PoolTable[] = [
  {
    id: 'tbl-star-01',
    name: 'Table #1 - Riley Grand Championship Snooker',
    category: 'snooker_championship',
    categoryName: 'Championship 12ft',
    size: '12 ft Full Size',
    cloth: 'Strachan 6811 Gold Tournament Green',
    balls: 'Aramith 1G Tournament Champion Balls',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: heroBannerImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM', '12:00 AM'],
    description: 'Championship grade 12ft full size Riley table equipped with heating slate, tournament cut pockets, and continuous chilled AC airflow. Perfect for competitive breaks.',
    rating: 4.9,
    specs: ['Precision Steel Block Cushions', 'Chilled Inverter AC Hall', 'Overhead LED Shadowless Fixture', 'Custom Weight Cues Included']
  },
  {
    id: 'tbl-royal-02',
    name: 'Table #2 - Royal 12ft Snooker Table',
    category: 'snooker_championship',
    categoryName: 'Championship 12ft',
    size: '12 ft Full Size',
    cloth: 'Strachan No. 1 Championship Cloth',
    balls: 'Super Aramith Pro-Cup Snooker Set',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: vipLoungeImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM', '09:00 PM', '11:00 PM', '01:00 AM'],
    description: 'Full size 12ft tournament table fitted with Strachan No. 1 Championship Cloth, heated slates, plush sofa seating, and dedicated attendant service.',
    rating: 5.0,
    specs: ['Strachan No. 1 Championship Cloth', 'Chilled Inverter AC Hall', 'Tournament Slate Heating', 'Live Cricket Screening']
  },
  {
    id: 'tbl-snooker-03',
    name: 'Table #3 - Star Tournament 12ft Snooker',
    category: 'snooker_championship',
    categoryName: 'Championship 12ft',
    size: '12 ft Full Size',
    cloth: 'Strachan 6811 Tournament Felt',
    balls: 'Aramith Tournament Champion Balls',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: starTableImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['11:00 AM', '01:00 PM', '03:00 PM', '06:00 PM', '09:00 PM', '11:30 PM'],
    description: 'Official Star tournament spec 12ft table featuring ultra-smooth slate bed, crisp cloth response, and ice-cool AC hall comfort.',
    rating: 4.9,
    specs: ['Official Star Slate Frame', 'High-Output AC Cooling', 'Professional Scoreboard', 'Marker Assistance Available']
  },
  {
    id: 'tbl-snooker-04',
    name: 'Table #4 - Master Series 12ft Snooker',
    category: 'snooker_standard',
    categoryName: '12ft Snooker',
    size: '12 ft Full Size',
    cloth: 'West of England 6811 Cloth',
    balls: 'Aramith Snooker Ball Set',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: masterTableImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['12:00 PM', '02:30 PM', '05:00 PM', '07:30 PM', '10:00 PM', '12:30 AM'],
    description: 'Fast playing 12ft Snooker table favored by local regulars for practice sessions, Century breaks, and friendly frames.',
    rating: 4.8,
    specs: ['Slate Bed Heating', 'Chilled Hall Environment', 'Ergonomic Wall Cue Racks', 'Complimentary Chalk & Gloves']
  },
  {
    id: 'tbl-executive-05',
    name: 'Table #5 - Executive 12ft Snooker Table',
    category: 'snooker_standard',
    categoryName: '12ft Snooker',
    size: '12 ft Full Size',
    cloth: 'Strachan 6811 Gold Tournament Green',
    balls: 'Super Aramith 1G Snooker Set',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: vipLoungeImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['02:00 PM', '04:30 PM', '07:00 PM', '09:30 PM', '12:00 AM', '02:00 AM'],
    description: '12ft Snooker table featuring Strachan 6811 cloth, ambient dimmable overhead lighting, continuous air conditioning, and comfortable sofa seating.',
    rating: 4.9,
    specs: ['Strachan 6811 Gold Felt', 'Chilled AC Gaming Hall', 'Comfortable Sofa Seating', 'Dimmable Overhead Lighting']
  },
  {
    id: 'tbl-snooker-06',
    name: 'Table #6 - Premier Club 12ft Snooker',
    category: 'snooker_standard',
    categoryName: '12ft Snooker',
    size: '12 ft Full Size',
    cloth: 'Strachan Tournament Cloth',
    balls: 'Aramith Premier Snooker Balls',
    rate10BallsPKR: 150,
    rate15BallsPKR: 180,
    featuredImage: premierTableImg,
    isVip: false,
    hasAC: true,
    maxPlayers: 4,
    availableSlotsToday: ['11:30 AM', '01:30 PM', '04:00 PM', '06:30 PM', '08:30 PM', '11:00 PM'],
    description: 'High-precision 12ft Snooker table situated in our main air-conditioned gaming hall with shadowless LED lighting and weighted ash cues.',
    rating: 4.8,
    specs: ['Full Air Conditioning', 'Weighted Ash Cues', 'Digital Marker Scoreboard', 'Fast Slate Roll']
  }
];

export const BOOKING_ADDONS: BookingAddon[] = [
  { id: 'add-01', name: 'Pro Carbon Fiber Cue Rental', pricePKR: 200, category: 'gear' },
  { id: 'add-02', name: 'Dedicated Table Marker / Referee', pricePKR: 300, category: 'gear' },
  { id: 'add-03', name: 'Super Aramith 1G Ball Set Upgrade', pricePKR: 250, category: 'gear' },
  { id: 'add-04', name: 'Billiards Glove & Taom Chalk Set', pricePKR: 150, category: 'gear' }
];

export const CLUB_FEATURES = [
  {
    title: 'Tournament Grade Slates',
    description: 'Rileys & Star tables featuring official Strachan 6811 Gold cloth and precision slate heating.',
    icon: 'Award'
  },
  {
    title: '24/7 Chilled Air Conditioning',
    description: 'Full inverter air conditioning throughout our 6-table snooker hall for comfortable gaming year-round.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Shadowless LED Lighting & Scoreboards',
    description: 'Professional overhead LED panels designed for glare-free sight lines and accurate frame scoring.',
    icon: 'Sparkles'
  },
  {
    title: 'Pro Cues & Accessories',
    description: 'Access to weighted ash wood cues, chalks, glove rentals, and cue tip maintenance.',
    icon: 'Award'
  }
];

export const FAQS = [
  {
    question: 'Where exactly is Top spin Snooker Club located in Lahore?',
    answer: 'We are situated Near Masjid Auqaf, Shah Kamal Road, Lahore — easily accessible from Canal Bank Road, Ichhra, Wahdat Road, and Muslim Town.'
  },
  {
    question: 'What are the frame rates and game charges?',
    answer: 'We charge strictly on a per-game frame basis: Rs. 150 per frame for 10-Ball games and Rs. 180 per frame for 15-Ball (Full Snooker) games. We do not offer hourly billing.'
  },
  {
    question: 'How do I book a Snooker table in advance?',
    answer: 'You can select your preferred 12ft Snooker table on this website, choose your preferred frame type (10-Ball or 15-Ball) and frame count, and confirm instantly. You will receive a booking confirmation code and direct WhatsApp link for the front desk.'
  },
  {
    question: 'Are all 6 tables air conditioned?',
    answer: 'Yes! All 6 of our full-size 12ft Snooker tables are located in our fully air-conditioned hall with comfortable sofa seating for players and spectators.'
  },
  {
    question: 'What are the opening hours and parking facilities?',
    answer: 'We are open 24 hours a day, 7 days a week with full air conditioning. We offer dedicated guarded parking for bikes and cars right outside Near Masjid Auqaf, Shah Kamal Road, Lahore.'
  }
];
