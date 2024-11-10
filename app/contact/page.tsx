import React from 'react';

const Contact = () => {
  return (
    <section
      className="py-20 bg-cover bg-center"
      id="contact"
      style={{
        backgroundImage: "url('/palebrown.jpg')", 
      }}
    >
      <div className="max-w-screen-xl mx-auto text-center p-8 rounded-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-black">Contact Us</h2>
        <p className="mb-6 text-black">We’d love to hear from you! Reach out with any questions or feedback.</p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-500 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-500 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-500 rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
