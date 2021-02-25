import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./index.css";

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
          <input
            type="text"
            placeholder="Nom de la ville"
            name="cityName"
            className="form-input w-full"
            ref={register({ required: true })}
          />
          <input
            type="text"
            placeholder="Adresse"
            name="adress"
            className="form-input w-full"
            ref={register({ required: true })}
          />
          <input
            type="text"
            placeholder="Lien de l'image"
            name="picture"
            className="form-input w-full"
            ref={register({ required: true })}
          />
          <div className="flex place-content-between">
            <input
              type="number"
              placeholder="Habitants"
              name="people"
              className="form-input w-1/4 mr-2"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="Hotels"
              name="hotels"
              className="form-input w-1/4 mr-2"
              ref={register({ required: true })}
            />
            <input
              type="number"
              placeholder="Revenu Moy"
              name="averageIncome"
              className="form-input w-1/4 mr-2"
              ref={register({ required: true })}
            />
            <input
              type="number"
              placeholder="m2"
              name="squareMeter"
              className="form-input w-1/4 mr-2"
              ref={register({ required: true })}
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
              <input
                type="checkbox"
                className="h-4 w-6 border rounded-md checked:bg-green-600 checked:border-transparent mr-2"
                name="activated"
                ref={register({ required: true })}
              />
              Activer
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
