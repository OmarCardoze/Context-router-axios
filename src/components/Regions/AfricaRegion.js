import React, { useContext } from 'react'
import { CountryContext } from '../../context/contextCountry'
import {StyledLink} from './StyleCountryRegion'

export const AfricaRegion = () => {

    const [state, setstate] = React.useState([])

    const { instance } = useContext(CountryContext)

    React.useEffect(() => {
        instance.get('/region/africa').then(res => setstate(res.data))
    }, [instance])

    return (
        <div>
            <h1>África</h1>
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
