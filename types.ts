export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  accommodation: string;
  foodHighlight: string;
}

export interface PlannerPreferences {
  duration: number;
  budget: 'Budget' | 'Moderate' | 'Luxury';
  interests: string[];
}
