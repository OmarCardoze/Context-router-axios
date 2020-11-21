import React from 'react'
import { AfricaRegion } from './Regions/AfricaRegion'
import { AmericaRegion } from './Regions/AmericaRegion'
import { AsiaRegion } from './Regions/AsiaRegion'
import { EuropeRegion } from './Regions/EuropeRegion'
import { OceaniaRegion } from './Regions/OceaniaRegion'


export const Home = () => {
    return (
       <>
            <AmericaRegion />
            <AsiaRegion />
            <EuropeRegion />
            <AfricaRegion />
            <OceaniaRegion />
       </>
    )
}
