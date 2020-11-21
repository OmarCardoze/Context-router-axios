import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavMenu = () => {

  const NavMenu = styled.nav`
  background-color: black;
  padding: 10px;
`
const List = styled.ul`
  display: flex;
  list-style: none;
  color: #fff;

`
const Vin = styled.li`
  color: #fff;
  margin-right: 4px;
`
  return (
    <NavMenu>
      <List>
        <Vin>
          <Link to="/">Home</Link>
        </Vin>
      </List>
    </NavMenu>
  )
}
