export enum ACTION_TYPE {
  ADD_CITY = "ADD_CITY",
  ADD_ALL = "ADD_ALL",
}

export interface IAddCityAction {
  type: ACTION_TYPE;
  payload: CityInfo;
}

export interface IAddAllCitiesAction {
  type: ACTION_TYPE;
  payload: CityInfo[];
}

export const cityReducer: React.Reducer<
  InitialStateType,
  IAddCityAction | IAddAllCitiesAction
> = (state: InitialStateType, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ALL:
      return {
        cityInfo: [...state.cityInfo, ...(action.payload as CityInfo[])],
      };
    case ACTION_TYPE.ADD_CITY:
      const data = action.payload as CityInfo;
      return {
        cityInfo: [
          ...state.cityInfo,
          data,
        ],
      };
    default:
      return state;
  }
};