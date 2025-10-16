"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const CTA_TEXT = "START NOW";

const socialProofMessages = [
  {
    id: 1,
    text: "✅ Marcus from Austin, TX just claimed her $100 reward"
  },
  {
    id: 2,
    text: "👥 850 users browsing now"
  }
];

const steps = [
  {
    icon: "✨",
    title: "Click 'START NOW'",
    description: "Begin your journey to earning a $100 Crumbl gift card"
  },
  {
    icon: "✉️",
    title: "Enter your email and cookie preferences",
    description: "Tell us about your favorite Crumbl flavors"
  },
  {
    icon: "📝",
    title: "Complete the Crumbl flavor survey",
    description: "Share your honest feedback about cookie experiences"
  },
  {
    icon: "🎯",
    title: "Finish 5+ simple offers",
    description: "Complete quick tasks like app downloads or surveys"
  },
  {
    icon: "🎁",
    title: "Receive your $100 Crumbl gift card",
    description: "Get your reward delivered via email within 24-48 hours"
  }
];

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "Most participants finish everything in under 20 minutes. Your $100 gift card is delivered within 24-48 hours after completing the required offers."
  },
  {
    question: "What kind of offers are required?",
    answer:
      "Offers include quick app downloads, free trials, and short survey opportunities from trusted partners. You can pick the ones that fit your interests."
  },
  {
    question: "How will I get the gift card?",
    answer:
      "We email the digital Crumbl gift card directly to the address you provide during signup, so double-check it for accuracy."
  },
  {
    question: "Is this really free?",
    answer:
      "Yes! There’s no purchase required. Just complete at least five qualifying offers and provide your authentic survey responses."
  },
  {
    question: "Can I do this more than once?",
    answer:
      "Each person can claim the reward one time. Feel free to share the opportunity with friends who love Crumbl cookies as much as you do!"
  }
];

function CTAButton({ className = "" }) {
  return (
    <a className={`cta-button ${className}`} href="#start">
      {CTA_TEXT}
    </a>
  );
}

function AccordionItem({ index, openIndex, setOpenIndex, item }) {
  const isOpen = openIndex === index;

  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-trigger"
        onClick={() => setOpenIndex(isOpen ? null : index)}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="faq-answer">{item.answer}</p>}
    </div>
  );
}

export default function LandingPage() {
  const [socialIndex, setSocialIndex] = useState(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  const rotatingMessages = useMemo(() => socialProofMessages, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSocialIndex((current) => (current + 1) % rotatingMessages.length);
    }, 4800);

    return () => {
      window.clearInterval(interval);
    };
  }, [rotatingMessages.length]);

  return (
    <main className="page">
      <header className="hero" id="start">
        <div className="hero__header">
          <span className="logo" aria-label="Crumbl logo">
            Crumbl
          </span>
        </div>

        <div className="hero__content">
          <div className="hero__text">
            <h1>Get a $100 Crumbl Gift Card</h1>
            <p className="hero__subtitle">
              Review your favorite cookie flavors and earn a $100 gift card as a
              thank you for your feedback.
            </p>

            <CTAButton className="hero__cta" />

            <div className="social-proof" role="status" aria-live="polite">
              {rotatingMessages[socialIndex]?.text}
            </div>
          </div>

          <div className="hero__visual">
            <div className="gift-card">
              <Image
                src="/gift-card.svg"
                alt="Illustration of a Crumbl gift card with a playful cookie scene"
                width={420}
                height={280}
                priority
              />
              <span className="badge">✔️ Verified by TikTok</span>
            </div>
          </div>
        </div>
      </header>

      <section className="process">
        <div className="section-heading">
          <h2>How It Works</h2>
          <p>Five simple steps to earn your Crumbl gift card</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step" key={step.title}>
              <span className="step__index">{index + 1}</span>
              <div className="step__icon" aria-hidden>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <CTAButton className="process__cta" />
      </section>

      <section className="testimonial">
        <div className="testimonial__stars" aria-hidden>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
        <div className="testimonial__quote-mark" aria-hidden>
          “
        </div>
        <blockquote>
          <p>
            Reviewed a few cookies, got my gift card two days later. I bought six
            boxes. No regrets.
          </p>
          <footer>— Tyler S., Scottsdale, AZ</footer>
        </blockquote>
      </section>

      <section className="faq">
        <div className="section-heading">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about earning your reward</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              index={index}
              openIndex={faqOpenIndex}
              setOpenIndex={setFaqOpenIndex}
              item={item}
            />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <CTAButton />
      </section>
    </main>
  );
}
