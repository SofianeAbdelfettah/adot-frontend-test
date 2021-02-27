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

interface CityForm {
  activated: boolean;
  picture: string;
  cityName: string;
  adress: string;
  people: number;
  hotels: number;
  averageIncome: number;
  squareMeter: number;
}

type InitialStateType = {
  cityInfo: CityInfo[];
};
