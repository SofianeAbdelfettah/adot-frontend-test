import React, { createContext, useReducer } from "react";
import {
  IAddCityAction,
  IAddAllCitiesAction,
  cityReducer,
} from "../../Store/Reducer";

const initialState: InitialStateType = {
  cityInfo: [],
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<InitialStateType, IAddCityAction | IAddAllCitiesAction>
  >(cityReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
