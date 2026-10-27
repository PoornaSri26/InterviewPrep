import { OfferPackage } from '../types';

export const initialOffers: OfferPackage[] = [
  {
    id: 'offer-google-l4',
    companyName: 'Google',
    location: 'Mountain View, CA',
    costOfLivingIndex: 100, // SF/Bay baseline
    role: 'Software Engineer',
    level: 'L4',
    baseSalary: 165000,
    annualBonus: 15, // target %
    signingBonus: 30000,
    equityTotal: 360000, // RSU value over vesting period
    vestingYears: 4,
    cliffMonths: 12,
    benefits: {
      health: 8000,
      retirement401k: 50,
      pto: 25,
      remoteDays: 2,
      otherPerks: 'Free meals, on-site gym, 12 parental leave weeks, tuition reimbursement'
    },
    notes: 'Refreshers historically granted each year based on performance. Bonus paid 80/20 split.',
    createdAt: '2026-10-01'
  },
  {
    id: 'offer-meta-e4',
    companyName: 'Meta',
    location: 'Seattle, WA',
    costOfLivingIndex: 78,
    role: 'Software Engineer',
    level: 'E4',
    baseSalary: 178000,
    annualBonus: 10,
    signingBonus: 25000,
    equityTotal: 320000,
    vestingYears: 4,
    cliffMonths: 12,
    benefits: {
      health: 7000,
      retirement401k: 100, // match up to 6% (showing full match %)
      pto: 21,
      remoteDays: 2,
      otherPerks: 'Year-end bonus up to 15%, Meta gear stipend, wellness reimbursement'
    },
    notes: 'Signing bonus paid over first two years (15k + 10k). RSUs vest quarterly after year 1 cliff.',
    createdAt: '2026-10-03'
  },
  {
    id: 'offer-amazon-l5',
    companyName: 'Amazon',
    location: 'Austin, TX',
    role: 'SDE II',
    level: 'L5',
    baseSalary: 160000,
    annualBonus: 10,
    signingBonus: 60000,
    equityTotal: 300000,
    vestingYears: 4,
    cliffMonths: 12,
    costOfLivingIndex: 72,
    benefits: {
      health: 6500,
      retirement401k: 50,
      pto: 15,
      remoteDays: 3,
      otherPerks: 'RTO-flexible team, Austin relocation package, onsite medical clinic'
    },
    notes: 'RSU vesting is back-loaded (10/40/40/40). Sign-on bonus covers the low year-1 equity payout.',
    createdAt: '2026-10-05'
  }
];
