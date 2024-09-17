"use client";

const { useState, useRef } = require("react");

import { FaChevronDown } from "react-icons/fa6";

const AccordionItem = ({ title, content, borderBottom = true, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <li className={borderBottom ? "border-b border-divider" : ""}>
      <button
        className="flex justify-between items-center w-full p-4 text-left transition-colors duration-300 bg-bgLight"
        onClick={toggleAccordion}
      >
        <span className="tracking-wide">
          {index + 1} - {title}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-[-180deg]" : ""
          }`}
        >
          <FaChevronDown />
        </span>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden bg-bgLight transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="p-4 text-paragraph">{content}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
