import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'http://127.0.0.1:6001/lands'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [lands, setLands] = useState([])

  const fetchLands = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      
      const landsArr = await response.json()

      if (landsArr) {
        const lands = landsArr.map((land) => {
          const {
            id,
            name,
            flag,
            capital,
            currency,
            list_id,
          } = land

          return {
            id: id,
            name: name,
            image: flag,
            capital: capital,
            currency: currency,
            list_id: list_id
          }
        })

        const filteredLands = lands.filter((land) => {
          return land.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        // console.log(filteredLands)
        setLands(filteredLands)
      } else {
        setLands([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchLands()
  }, [searchTerm, fetchLands])

  return (
    <AppContext.Provider
      value={{ loading, lands, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }