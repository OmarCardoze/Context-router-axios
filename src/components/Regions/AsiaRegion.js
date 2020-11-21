import React, { useContext } from 'react'
import { CountryContext } from '../../context/contextCountry'
import {StyledLink} from './StyleCountryRegion'

export const AsiaRegion = () => {

    const [state, setstate] = React.useState([])

    const { instance } = useContext(CountryContext)

    React.useEffect(() => {
        instance.get('/region/asia').then(res => setstate(res.data))
    }, [instance])


    console.log(state);
    return (
        <div>
            <h1>Asia</h1>
            {
                state.map((pais) => (
                    <>
                        <StyledLink to={`/name/${pais.name}`}>{pais.name}</StyledLink>
                    </>
                ))
            }
        </div>
    )
}
