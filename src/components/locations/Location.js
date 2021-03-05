import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h4 className="location__address">Address: {location.address}</h4>
        <div className="location__sqft">Square Footage: {location.squarefootage}</div>
        <div className="location__handicap">{location.handicapaccessible ? "Handicap Accessible" : "Not handicap accessible"}</div>
    </section>
)