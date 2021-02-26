import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

Modal.setAppElement("#modal");

interface ModalWrapperProps {
  isOpen: boolean;
  toggleModal: () => void;
  citiesSetter: (formData: CityInfo) => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  toggleModal,
  citiesSetter,
}) => {
  const onsubmit = (data: FormData) => {
    citiesSetter({
      picture: data.picture,
      title: data.cityName,
      adress: data.adress,
      activated: data.activated,
      stats: [
        { statLabel: "Habitants", statValue: data.people },
        { statLabel: "Hôtels", statValue: data.hotels },
        { statLabel: "Revenu Moy", statValue: data.averageIncome },
        { statLabel: "m2", statValue: data.squareMeter },
      ],
    });
    toggleModal();
  };

  const { register, handleSubmit, errors } = useForm<FormData>();
  const isErrors = Object.keys(errors).length > 0;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Example Modal"
        className="modal-container focus:outline-none"
        onRequestClose={() => toggleModal()}
      >
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="flex place-content-between mb-5">
            <h1 className="font-title modal-title font-bold">
              Ajouter une destination
            </h1>
            <button
              onClick={() => toggleModal()}
              className=" focus:outline-none p-1"
            >
              X
            </button>
          </div>
          <TextField
            label="Nom de la ville"
            name="cityName"
            type="text"
            variant="outlined"
            className="form-input w-full"
            inputRef={register({ required: true })}
          />
          <TextField
            label="Adresse"
            name="adress"
            type="text"
            variant="outlined"
            className="form-input w-full"
            inputRef={register({ required: true })}
          />
          <TextField
            label="Lien de l'image"
            name="picture"
            type="text"
            variant="outlined"
            className="form-input w-full"
            inputRef={register({ required: true })}
          />

          <div className="flex flex-wrap place-content-around mb-5">
            <TextField
              label="Habitants"
              name="people"
              type="number"
              variant="outlined"
              className="w-1/4 form-input"
              inputRef={register({ required: true })}
            />
            <TextField
              label="Hotels"
              name="hotels"
              type="number"
              variant="outlined"
              className="w-1/4 form-input"
              inputRef={register({ required: true })}
            />
            <TextField
              label="Revenu Moy"
              name="averageIncome"
              type="number"
              variant="outlined"
              className="w-1/4 form-input"
              inputRef={register({ required: true })}
            />
            <TextField
              label="m2"
              name="squareMeter"
              type="number"
              variant="outlined"
              className="w-1/5 form-input"
              inputRef={register({ required: true })}
            />
          </div>
          <div>
            {isErrors && (
              <span className="bg-red-400 p-2 text-white rounded">
                Tous les champs sont requis pour poursuivre
              </span>
            )}
          </div>
          <div className="flex place-content-between place-items-center h-1/5">
            <div>
              <FormControlLabel
                value="start"
                control={<Checkbox name="activated" color="primary" />}
                label="Activer"
                name="activated"
                labelPlacement="end"
                ref={register({ required: true })}
              />
            </div>
            <button type="submit" className="p-2 w-1/4 button">
              + AJOUTER
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ModalWrapper;
