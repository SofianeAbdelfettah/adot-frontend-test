import { ACTION_TYPE } from './Reducer'

export const addCities = (dispatch: any,formData: CityInfo[]) =>
    dispatch({
      type: ACTION_TYPE.ADD_ALL,
      payload: formData,
    });
  
export const addCity = (dispatch: any, formData: CityInfo) =>
    dispatch({
      type: ACTION_TYPE.ADD_CITY,
      payload: formData,
    });