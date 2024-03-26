import React, { useState } from 'react';
import {
  contactUsForm,
  contactUsFormContent,
  contactUsFormForm,
  contactUsFormFormInputs,
  contactUsFormFormInputsInput,
} from './ContactUsForm.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) {
      errors.name = "Can't be empty";
    }

    if (!email.trim()) {
      errors.email = "Can't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!phone.trim()) {
      errors.phone = "Can't be empty";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number is invalid';
    }

    if (!message.trim()) {
      errors.message = "Can't be empty";
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      console.log({ name, email, phone, message });
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
    } else {
      // Form is invalid, update errors state
      setErrors(errors);
    }
  };

  return (
    <section className={contactUsForm}>
      <div className={contactUsFormContent}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={contactUsFormForm}>
        <div className={contactUsFormFormInputs}>
          <div className={contactUsFormFormInputsInput}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <span className='error'>
                {errors.name}
                <StaticImage
                  src='../../images/contact/desktop/icon-error.svg'
                  alt='error icon'
                />
              </span>
            )}
          </div>
          <div className={contactUsFormFormInputsInput}>
            <input
              type='text'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className='error'>
                {errors.email}{' '}
                <StaticImage
                  src='../../images/contact/desktop/icon-error.svg'
                  alt='error icon'
                />
              </span>
            )}
          </div>
          <div className={contactUsFormFormInputsInput}>
            <input
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <span className='error'>
                {errors.phone}{' '}
                <StaticImage
                  src='../../images/contact/desktop/icon-error.svg'
                  alt='error icon'
                />
              </span>
            )}
          </div>
          <div className={contactUsFormFormInputsInput}>
            <textarea
              name='message'
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols='30'
              rows='4'
            ></textarea>
            {errors.message && (
              <span className='error'>
                {errors.message}{' '}
                <StaticImage
                  src='../../images/contact/desktop/icon-error.svg'
                  alt='error icon'
                />
              </span>
            )}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactUsForm;
