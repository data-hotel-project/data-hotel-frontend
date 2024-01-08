export interface iRoom {
  id: string;
  number: number;
  quantity: number;
  status: string;
  entry_date: string | null;
  departure_date: string | null;
  daily_rate: string;
  total_value: string;
  hotel: string;
  guest: string | null;
  full_url: string;
  full_url2: string;
  full_url3: string;
  full_url4: string;
  full_url5: string;

  [key: string]: string | number | null;
}

export interface iUpdateRoom {
  number?: number;
  quantity?: number;
  status?: string;
  departure_date?: string | null;
  guest?: string | null;
  full_url?: string;
  full_url2?: string;
  full_url3?: string;
  full_url4?: string;
  full_url5?: string;
}
