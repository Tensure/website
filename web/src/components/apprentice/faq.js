import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "./faq.module.css";

const FAQ = ({ data }) => {
  return (
    <div className={styles.faqContent}>
      <h2>FAQ</h2>
      <Accordion className={styles.accordion}>
        {data.map(({ node: faqs }) => (
          <div className={styles.accordionItem} key={faqs.id}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordionButton}>
                  {faqs.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordionPanel}>
                <p>{faqs.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
