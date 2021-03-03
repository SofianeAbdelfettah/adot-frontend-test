import React, { useState, useContext } from 'react'
import Card from '../Components/Card'
import ModalWrapper from '../Components/ModalWrapper'
import { AppContext } from '../Components/Context'
import { addCity } from '../Store/Action'
import { useLocalStorage } from '../Hooks/UseLocalStorage'

const App: React.FC = () => {
  const [modal, setModalToggle] = useState<boolean>(false)
  const { state, dispatch } = useContext(AppContext)
  const [localStorage, setlocalStorage] = useLocalStorage('cities')

  const toggleModal = () => setModalToggle(!modal)

  const onClose = (data: ICityInfo) => {
    addCity(dispatch, data)
    setlocalStorage([...localStorage, data])
  }

  return (
    <div className="bg-gray-100 w-full sm:h-full h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="w-11/12 pt-10 pb-20 flex place-content-between">
          <h1 className="font-title title">Destinations</h1>
          <div>
            <div data-testid="toggleModalBtn" onClick={() => toggleModal()}>
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
          {state.cityInfo.map((city: ICityInfo, index: number) => (
            <Card key={index} city={city} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
