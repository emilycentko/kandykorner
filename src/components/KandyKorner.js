import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import "./KandyKorner.css"


export const KandyKorner = () => (
    <>
        <article className="locations">
            <LocationProvider>
                <LocationList />    
            </LocationProvider>
        </article>
    </>
)