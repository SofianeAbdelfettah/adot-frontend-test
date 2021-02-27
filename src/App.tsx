import React, { useState, useContext, useEffect } from "react";
import Card from "./Components/Card";
import ModalWrapper from "./Components/ModalWrapper";
import { AppContext } from "./Components/Context";
import { addCities, addCity } from "./Store/Action";
import { useLocalStorage } from "./Hooks/UseLocalStorage";
import axios from "axios";

const App = () => {
  const [modal, setModalToggle] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext);
  const [localStorage, setlocalStorage] = useLocalStorage("cities");

  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      addCities(dispatch, res.data as CityInfo[]);
      setlocalStorage(res.data);
      return res.data;
    });

  useEffect(() => {
    if (localStorage?.length === 0) {
      fetcher("/cities.json");
    } else {
      addCities(dispatch, localStorage);
    }
  }, []);

  const toggleModal = () => setModalToggle(!modal);

  const onClose = (data: CityInfo) => {
    addCity(dispatch, data);
    setlocalStorage([...localStorage, data]);
  };

  if (!state) return <div>loading...</div>;

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-11/12 pt-10 pb-20 flex place-content-between">
          <h1 className="font-title title">Destinations</h1>
          <div>
            <div onClick={() => toggleModal()}>
              <button className="button font-sans">+ AJOUTER</button>
            </div>
            <ModalWrapper
              isOpen={modal}
              toggleModal={toggleModal}
              onClose={onClose}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -my-8 gap-8">
          {state.cityInfo.map((city: CityInfo, index: number) => (
            <Card key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
