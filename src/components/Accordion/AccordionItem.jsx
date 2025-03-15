import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error(
      "useAccordionItemContext must be used within an AccordionItem component"
    );
  }
  return ctx;
}
export default function AccordionItem({ id, className, children }) {
  return (
    //reusable id
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
