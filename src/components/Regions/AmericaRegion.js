import React, { useContext } from 'react'
import { CountryContext } from '../../context/contextCountry'
import {StyledLink} from './StyleCountryRegion'

export const AmericaRegion = () => {

    const [state, setstate] = React.useState([])

    const { instance } = useContext(CountryContext)

    React.useEffect(() => {
        instance.get('/region/americas').then(res => setstate(res.data))
    }, [instance])

    return (
        <div>
            <h1>América</h1>
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
