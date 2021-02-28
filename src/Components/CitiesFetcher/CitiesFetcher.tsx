import React, { useContext, useEffect } from 'react'
import { useLocalStorage } from '../../Hooks/UseLocalStorage'
import { AppContext } from '../Context'
import { addCities } from '../../Store/Action'
import axios from 'axios'

const CitiesFetcher: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(AppContext)
  const [localStorage, setlocalStorage] = useLocalStorage('cities')

  useEffect(() => {
    const citiesfetcher = (url: string) =>
      axios.get(url).then((res) => {
        addCities(dispatch, res.data as ICityInfo[])
        setlocalStorage(res.data)
        return res.data
      })

    if (localStorage?.length === 0) {
      citiesfetcher('/cities.json')
    } else {
      addCities(dispatch, localStorage)
    }
  }, [dispatch, localStorage, setlocalStorage])

  if (!state) return <div>loading...</div>

  return <>{children}</>
}

export default CitiesFetcher
