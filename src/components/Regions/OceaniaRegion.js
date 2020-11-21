import React, { useContext } from 'react'
import { CountryContext } from '../../context/contextCountry'
import {StyledLink} from './StyleCountryRegion'

export const OceaniaRegion = () => {

    const [state, setstate] = React.useState([])

    const { instance } = useContext(CountryContext)

    React.useEffect(() => {
        instance.get('/region/oceania').then(res => setstate(res.data))
    }, [instance])

    return (
        <div>
            <h1>Oceanía</h1>
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
 