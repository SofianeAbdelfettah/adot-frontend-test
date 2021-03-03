export enum ACTION_TYPE {
  ADD_CITY = 'ADD_CITY',
  ADD_ALL = 'ADD_ALL',
}

export interface IAddCityAction {
  type: ACTION_TYPE
  payload: ICityInfo
}

export interface IAddAllCitiesAction {
  type: ACTION_TYPE
  payload: ICityInfo[]
}

export const cityReducer: React.Reducer<
  InitialStateType,
  IAddCityAction | IAddAllCitiesAction
> = (state: InitialStateType, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ALL:
      const UniqCities = new Set([
        ...state.cityInfo,
        ...(action.payload as ICityInfo[]),
      ])
      return {
        cityInfo: [...UniqCities],
      }
    case ACTION_TYPE.ADD_CITY:
      const data = action.payload as ICityInfo
      return {
        cityInfo: [...state.cityInfo, data],
      }
    default:
      return state
  }
}
