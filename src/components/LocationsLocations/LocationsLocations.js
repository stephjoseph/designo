import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import {
  locationsLocations,
  locationsLocationsLocation,
  locationsLocationsContent,
} from './LocationsLocations.module.css';

const LocationsLocations = () => {
  const data = useStaticQuery(graphql`
    query {
      allLocationsJson {
        nodes {
          country
          id
          name
          address1
          address2
          lat
          long
          phone
          email
        }
      }
    }
  `);

  const locationIcon = new Icon({
    iconUrl: '/static/513a00c8981ba83374787695a553ab3b/icon-map-pin.svg',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  });

  return (
    <section className={locationsLocations}>
      <h1>Locations</h1>

      {data.allLocationsJson.nodes.map((item) => (
        <div
          key={item.id}
          className={locationsLocationsLocation}
          id={item.country}
        >
          <MapContainer
            style={{ height: '326px' }}
            center={[item.lat, item.long]}
            zoom={5}
            zoomControl={false}
          >
            <TileLayer
              minZoom={0}
              maxZoom={20}
              maxNativeZoom={19}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[item.lat, item.long]} icon={locationIcon} />
          </MapContainer>
          <div className={locationsLocationsContent}>
            <h2>{item.country}</h2>
            <address>
              <div>
                <strong>{item.name}</strong>
                <span>{item.address1}</span>
                <span>{item.address2}</span>
              </div>
              <div>
                <strong>Contact</strong>
                <span>P : {item.phone}</span>
                <span>M : {item.email}</span>
              </div>
            </address>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LocationsLocations;
