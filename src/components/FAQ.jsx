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
    "Yes. I offer ongoing support, updates, bug fixes, and maintenance after deployment if needed, but comes at a cost "
  },
  {
    question: "Haw do we start working together",
    answer : "You can simply send a message, through the contact section or social links, and we'll discuss the project, goals, timeline, and pricing"
  },
  {
    question: "Why choose me",
    answer : "I don't just build websites, I create digital experiences designed to help businesses stand out, attract customers, and grow faster online"
  }

];

const CSS = `
.faq-section {
  background: #2D1F1F;
  padding: 110px 24px;
  color: #f5ece6;
}

.faq-container {
  max-width: 1000px;
  margin: 0 auto;
}

.faq-tag {
  color: #C46A3C;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.faq-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
  margin-bottom: 50px;
}

.faq-title span {
  color: #C46A3C;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  border-radius: 24px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 24px 26px;
  background: transparent;
  border: none;
  color: #f5ece6;
  font-family: "Syne", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.faq-icon {
  color: #C46A3C;
  font-size: 28px;
  line-height: 1;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.faq-item.open .faq-answer {
  max-height: 160px;
}

.faq-answer p {
  padding: 0 26px 24px;
  color: #bca9a1;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  line-height: 1.7;
}

@media (max-width: 640px) {
  .faq-section {
    padding: 80px 18px;
  }

  .faq-question {
    font-size: 16px;
    padding: 20px;
  }

  .faq-answer p {
    font-size: 14px;
    padding: 0 20px 20px;
  }
}
`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <style>{CSS}</style>

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
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
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