import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    // 1️⃣ Send email via backend
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Thank you! Your message has been sent successfully.");
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          // Throw the specific error from the server if available
          const errorMessage = data.error || data.message || "Failed to send message";
          throw new Error(errorMessage);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Show the actual error message to the user
        alert(`Failed to send message: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-[#FF4500]`}>
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white-100 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white-100 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white-100 rounded-lg"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white-100 rounded-lg"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl text-white-100 font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
