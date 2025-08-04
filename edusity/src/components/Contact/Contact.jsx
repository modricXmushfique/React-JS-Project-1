import React from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "d9653473-2860-4ca7-a2c5-5f9fca0b155c"); // Replace with your Web3Forms access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
        
      } else {
        setResult("❌ " + (data.message || "Something went wrong."));
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className='contact'>
      <div className="contact-col">
        <h3>
          Send us a message
          <img src="/assets/msg_icon.png" alt="Message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact information.
          Your feedback, questions, and suggestions are important to us as we strive to provide
          exceptional service to our university community.
        </p>
        <ul>
          <li><strong>Email:</strong> contact@bdfy.dev</li>
          <li><strong>Phone:</strong> +1 123-456-7890</li>
          <li>
            <strong>Address:</strong> Gulshan 1, Dhaka<br />
            Banani, Bangladesh
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
};

export default Contact;

























































