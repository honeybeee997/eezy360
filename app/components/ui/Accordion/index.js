import AccordionItem from "./AccordionItem";

const Accordion = ({ items = [] }) => {
  return (
    <ul className="rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          borderBottom={index !== items.length - 1}
          key={index}
          title={item.title}
          content={item.content}
          index={index}
        />
      ))}
    </ul>
  );
};

export default Accordion;
