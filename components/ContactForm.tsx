import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 2500);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      <input
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Email"
        type="email"
        {...register('email', { required: 'Email is required', pattern: { value: /.+@.+\..+/, message: 'Invalid email' } })}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      <textarea
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Your Message"
        rows={4}
        {...register('message', { required: 'Message is required' })}
      />
      {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      <Button type="submit" variant="primary" size="md" disabled={submitted}>
        {submitted ? 'Sent!' : 'Send Message'}
      </Button>
      {isSubmitSuccessful && submitted && (
        <div className="text-green-600 text-center font-semibold">Thank you! We received your message.</div>
      )}
    </form>
  );
}; 