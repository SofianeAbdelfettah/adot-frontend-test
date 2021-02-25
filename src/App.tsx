import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import ModalWrapper from "./Components/ModalWrapper";

const App = () => {
  const [cities, setCities] = useState<CityInfo[]>([]);
  const [modal, setModalToggle] = useState<boolean>(false);

  const toggleModal = () => setModalToggle(!modal);
  const citiesSetter = (formData: CityInfo) => setCities([...cities, formData]);

  useEffect(() => {
    fetch("/cities.json")
      .then((response) => response.json())
      .then((data) => setCities(data as CityInfo[]));
  }, []);

  if (!cities) return <div>loading ...</div>;

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="w-11/12 pt-10 pb-10 pl-2 flex place-content-between">
          <h1 className="font-title title">Destinations</h1>
          <div>
            <div onClick={() => toggleModal()}>
              <button className="button font-sans">+ AJOUTER</button>
            </div>
            <ModalWrapper
              isOpen={modal}
              toggleModal={toggleModal}
              citiesSetter={citiesSetter}
            />
          </div>
        </div>
        <div className="w-11/12 grid md:grid-cols-3 auto-cols-fr gap-5 ">
          {cities.map((city, index) => (
            <Card key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
