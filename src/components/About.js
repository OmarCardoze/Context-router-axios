import React from 'react'
import { CountryContext } from '../context/contextCountry'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export const About = () => {

    const [state, setstate] = React.useState([])
    const { instance } = React.useContext(CountryContext)
    let { nameCountry } = useParams();

    React.useEffect(() => {
        instance.get(`/name/${nameCountry}`).then(res => setstate(res.data[0]))
    }, [instance, nameCountry])


    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #0001;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 70%;
`

    const FlagImage = styled.img`
        width: 200px;
`

    return (

        <Wrapper>
            <h1>{state.name}</h1>
            <FlagImage src={state.flag} alt={state.name} />
            <p>Capital: {state.capital}</p>
            <p>Population: {state.population}</p>
            <p>Subregion: {state.subregion}</p>
        </Wrapper>
    )
}
