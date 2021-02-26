import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import ModalWrapper from "./Components/ModalWrapper";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3fd48b",
    },
  },
});

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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
};

export default App;
