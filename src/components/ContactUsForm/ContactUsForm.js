import React, { useState } from 'react';
import {
  contactUsForm,
  contactUsFormContent,
  contactUsFormForm,
  contactUsFormFormInputs,
} from './ContactUsForm.module.css';

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
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number is invalid';
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
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
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className='error'>{errors.name}</span>}
          <input
            type='text'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
          <input
            type='text'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className='error'>{errors.phone}</span>}
          <textarea
            name='message'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols='30'
            rows='4'
          ></textarea>
          {errors.message && <span className='error'>{errors.message}</span>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactUsForm;
