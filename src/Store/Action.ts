import { ACTION_TYPE } from './Reducer'

export const addCities = (
  dispatch: React.Dispatch<any>,
  formData: ICityInfo[]
) =>
  dispatch({
    type: ACTION_TYPE.ADD_ALL,
    payload: formData,
  })

export const addCity = (dispatch: React.Dispatch<any>, formData: ICityInfo) =>
  dispatch({
    type: ACTION_TYPE.ADD_CITY,
    payload: formData,
  })
