import React, { useEffect,useRef } from "react";
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import { Icon,divIcon, point } from "leaflet"
import markerIcon from "../assets/location-pin.png"
import MarkerClusterGroup from "react-leaflet-cluster";
const CompanyMap = (props) => {
    let companies = props.companies   
    
    const customIcon = new Icon({
        iconUrl: markerIcon,
        iconSize:[38,38]
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="h-10 w-10 rounded-full bg-amber-400 transform-gpu scale-95 items-center justify-center flex">${cluster.getChildCount()}</div>`,
         })
    }
    return (
        <div>
            <MapContainer center={[-25.2744, 133.7751]} zoom={6} className="h-[100vh] w-[100vh] m-10 mt-5">
            <TileLayer
                attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createCustomClusterIcon}>
            {companies.map((c, i) => (
                <Marker key={i} position={[c.latitude, c.longitude]} icon={customIcon}>
                <Popup>{c.companyName}</Popup>
                </Marker>
            ))}
            </MarkerClusterGroup>
            </MapContainer>
        </div>
    )
}

export default CompanyMap;