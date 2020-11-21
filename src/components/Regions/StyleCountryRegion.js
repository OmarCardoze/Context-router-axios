import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
        display: inline-block;
        text-decoration: none;
        color: #000;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        background-color: #0001;
        word-wrap: break-word;

        &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
}
`

