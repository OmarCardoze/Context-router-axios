import React, { createContext } from 'react'
import Axios from 'axios'

export const CountryContext = createContext()
const DataProvider = ({ children }) => {

    const instance = Axios.create({
        baseURL: 'https://restcountries.eu/rest/v2/',
    });

    return (
        <CountryContext.Provider value={{
            instance
        }}>
            {children}
        </CountryContext.Provider>
    )
}

export default DataProvider