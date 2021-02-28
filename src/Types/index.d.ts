interface ICityInfo {
  picture: string
  title: string
  adress: string
  activated: boolean
  stats: CityStats[]
}

interface ICityStats {
  statLabel: string
  statValue: number
}

interface ICityForm {
  activated: boolean
  picture: string
  cityName: string
  adress: string
  people: number
  hotels: number
  averageIncome: number
  squareMeter: number
}

type InitialStateType = {
  cityInfo: CityInfo[]
}
