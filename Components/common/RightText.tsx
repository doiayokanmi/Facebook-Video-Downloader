'use client'

import React, { useState } from 'react'
import { accordionItems } from '@/util';
import Accordion from './Accordion';

const RightText = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <>
        <div className="basis-1/2 border border-slate-500">
          <h1 className="bg-primary-foreground p-4 text-white">
            Frequently Ask Question
          </h1>

          {accordionItems.map((item, index) => (
              <Accordion key={index} title={item.title} content={item.content} isOpen={index === openIndex}
              toggleAccordion={() => toggleAccordion(index)} />
            ))}
        </div>
    </>
  )
}

export default RightText