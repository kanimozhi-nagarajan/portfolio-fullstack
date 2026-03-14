import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-xl border border-sky-500 space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-300">Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 border border-gray-700 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 border border-gray-700 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Message</label>

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 border border-gray-700 focus:outline-none focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
