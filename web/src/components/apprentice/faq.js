import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './faq.module.css'

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }

const FAQ = () => (
  <div className={styles.faqContent}>
    <h2>FAQ</h2>
    <Accordion className={styles.accordion}>
      <AccordionItem className={styles.accordionItem}>
          <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionButton}>
                  Do I have to have a computer?
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordionPanel}>
              <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
              </p>
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordionItem}>
          <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionButton}>
                  What is the example curriculum?
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordionPanel}>
              <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
              </p>
          </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className={styles.accordionItem}>
          <AccordionItemHeading>
              <AccordionItemButton className={styles.accordionButton}>
                Is full-time employment guaranteed?
              </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className={styles.accordionPanel}>
              <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
              </p>
          </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>
)

export default FAQ
