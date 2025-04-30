import React from 'react';
import { Form } from 'react-router-dom';




export const contactData = async ({request})=> {
try {
  const res = await request.formData();
  const data = Object.fromEntries(res)
console.log(data);


  return null
} catch (error) {
  
}console.log(error);

}
export const Contact = () => {


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">📬 Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Got a question or feedback? We'd love to hear from you!
        </p>
        
        <Form method='POST' action='/contact' className="space-y-4">
          <div>
            <label className="block mb-1 font-medium"htmlFor="username" >Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Your name"
              required
              id='username'
              name='username'
              autoComplete='off'
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="you@example.com"
              required
              id='email'
              name='email'
              autoComplete='off'
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Your message"
              required
              id='message'
              name='message'
              autoComplete='off'
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};
