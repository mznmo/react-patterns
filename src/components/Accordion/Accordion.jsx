import { useContext, useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "useAccordionContext must be used within an Accordion component"
    );
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [itemId, setItemId] = useState();

  function toggleItem(id) {
    setItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId: itemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
