import React, { useState } from "react";
import Card from "./Components/Card";
import ModalWrapper from "./Components/ModalWrapper";
import axios from "axios";
import useSWR from "swr";

const App = () => {
  const [cities, setCities] = useState<CityInfo[]>([]);
  const [modal, setModalToggle] = useState<boolean>(false);

  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      setCities(res.data as CityInfo[]);
      return res.data;
    });

  const { data, error } = useSWR("/cities.json", fetcher);

  const toggleModal = () => setModalToggle(!modal);
  const citiesSetter = (formData: CityInfo) => setCities([...cities, formData]);

  if (error) return <div>failed to load</div>;
  if (!cities) return <div>loading...</div>;

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
              citiesSetter={citiesSetter}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -my-8 gap-8">
          {cities.map((city, index) => (
            <Card key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
