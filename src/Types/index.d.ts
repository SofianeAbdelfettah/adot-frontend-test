interface CityInfo {
  picture: string;
  title: string;
  adress: string;
  activated: boolean;
  stats: CityStats[]
}

interface CityStats {
  statLabel: string;
  statValue: number;
}

interface FormData {
  activated: boolean;
  picture: string;
  cityName: string;
  adress: string;
  people: number;
  hotels: number;
  averageIncome: number;
  squareMeter: number;
}