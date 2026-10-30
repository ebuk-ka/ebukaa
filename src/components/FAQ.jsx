import "./FAQ.css";
import { useState } from "react";

const faqs = [
  {
    question: "What kind of websites do you build?",
    answer:
      "I build modern business websites, portfolios, landing pages, e-commerce sites, booking systems, dashboards and full web apps.",
  },
  {
    question: "Can you add payments to a website?",
    answer:
      "Yes. I can integrate payment systems like Paystack for stores, service businesses, bookings and order-based websites.",
  },
  {
    question: "Do you only design or do you also code?",
    answer:
      "I do both. I design clean interfaces and build them with React, Tailwind, Supabase and modern frontend tools.",
  },
  {
    question: "How long does a project take?",
    answer:
      "It depends on the size. A simple landing page can be fast, while an e-commerce site or dashboard takes more planning and development.",
  },
  {
    question: "Can you redesign an old website?",
    answer:
      "Yes. I can improve the look, speed, mobile responsiveness, structure and user experience of an existing website.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: 
    "Yes. I offer ongoing support, updates, bug fixes, and maintenance after deployment if needed, at an additional cost."
  },
  {
    question: "How do we start working together?",
    answer : "You can simply send a message, through the contact section or social links, and we'll discuss the project, goals, timeline, and pricing"
  },
  {
    question: "Why choose me?",
    answer : "I don't just build websites, I create digital experiences designed to help businesses stand out, attract customers, and grow faster online"
  }

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <p className="faq-tag">FAQ</p>

          <h2 className="faq-title">
            Questions clients <span>usually ask</span>
          </h2>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                key={index}
              >
                <button
                  className="faq-question"
                  id={`faq-question-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer" id={`faq-answer-${index}`} aria-labelledby={`faq-question-${index}`} hidden={openIndex !== index}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
