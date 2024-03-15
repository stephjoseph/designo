import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import ContactUsForm from '../components/ContactUsForm/ContactUsForm';
import LocationsCta from '../components/LocationsCta';

const ContactUs = () => {
  return (
    <Layout>
      <main>
        <ContactUsForm />
        <LocationsCta />
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title='Contact Us' />;

export default ContactUs;
