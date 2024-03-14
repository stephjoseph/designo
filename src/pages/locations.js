import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import LocationsLocations from '../components/LocationsLocations';

const Locations = () => {
  return (
    <Layout>
      <main>
        <LocationsLocations />
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title='Locations' />;

export default Locations;
