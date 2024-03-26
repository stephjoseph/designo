import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import {
  locationsLocations,
  locationsLocationsLocation,
  locationsLocationsLocationMap,
  locationsLocationsLocationContent,
} from './LocationsLocations.module.css';
import mapPin from '../../images/locations/desktop/icon-map-pin.svg';

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

  const locationIcon =
    typeof window !== 'undefined'
      ? L.icon({
          iconUrl: mapPin,
          iconSize: [32, 40],
          iconAnchor: [16, 40],
        })
      : null;

  return (
    <section className={locationsLocations}>
      <h1>Locations</h1>

      {data.allLocationsJson.nodes.map((item) => (
        <div
          key={item.id}
          className={locationsLocationsLocation}
          id={item.country}
        >
          <div className={locationsLocationsLocationMap}>
            <MapContainer
              style={{ height: '100%' }}
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
              <Marker
                position={[item.lat, item.long]}
                icon={!!locationIcon ? locationIcon : null}
              />
            </MapContainer>
          </div>

          <div className={locationsLocationsLocationContent}>
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
