import React, { useState } from 'react';

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 rounded-xl bg-white/80 shadow p-4">
      <button
        className="w-full text-left font-semibold text-lg flex justify-between items-center"
        aria-expanded={open}
        aria-controls={`faq-answer-${question}`}
        onClick={() => setOpen((o) => !o)}
      >
        {question}
        <span className="ml-2">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div
          id={`faq-answer-${question}`}
          className="overflow-hidden mt-2 text-gray-600"
          role="region"
          aria-live="polite"
        >
          {answer}
        </div>
      )}
    </div>
  );
}; 