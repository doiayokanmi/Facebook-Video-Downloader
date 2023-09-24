'use client'

import React, { useState } from 'react';
interface AccordionProps {
    title: string;
    content: string;
    isOpen: boolean;
    toggleAccordion: () => void;
  }

const Accordion = ({ title, content, isOpen, toggleAccordion  }: AccordionProps) => {
  
  return (
    <div className="border-b border-primary">
      <div className="flex items-center justify-between p-2 py-4 cursor-pointer" onClick={toggleAccordion}>
        <h2 className="">{title}</h2>
        <span className={`transform text-primary ${isOpen ? 'rotate-0' : 'rotate-45'} transition-transform`}>
            &#10006;
        </span>
      </div>
      {isOpen && (
        <div className="p-2">
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
