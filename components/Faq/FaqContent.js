import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const faqs = [
  {
    id: "who",
    q: "Who does Maranatha support?",
    a: "We support people living with disability and mental health coexisting challenges, as well as people affected by homelessness, drug and alcohol use, or domestic and family violence. Support is available to people across Western Australia.",
  },
  {
    id: "ndis",
    q: "Do I need an NDIS plan to access support?",
    a: "Some of our services are accessed through NDIS funding, while others are community-based and do not require a plan. If you are not sure what applies to your situation, contact us and we can talk through what is available to you.",
  },
  {
    id: "clinical",
    q: "Do you provide medical, clinical or crisis services directly?",
    a: "No. Maranatha support does not replace medical, clinical, detoxification, legal or emergency services. Where a clinical or professional service is needed, we help connect you with the appropriate specialist provider. If you are in immediate danger, always call 000.",
  },
  {
    id: "start",
    q: "How do I get started?",
    a: "You do not need to have everything figured out before contacting us. Tell us a little about your situation, and we can talk through the next step together, including which of our services may be a good fit.",
  },
  {
    id: "areas",
    q: "What kind of support do you offer?",
    a: "Our services cover living and independence (such as Supported Independent Living and respite), wellbeing and disability support (such as mental health and psychosocial recovery), community participation, and broader community and wellbeing services such as counselling, homelessness support and youth services. You can see the full list on our Services page.",
  },
  {
    id: "carers",
    q: "Can families and carers be involved?",
    a: "Yes. We work alongside families, carers and other supports where that is appropriate and where the person we are supporting is comfortable with that involvement.",
  },
];

const FaqContent = () => {
  return (
    <section className="mar-faq-area">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-7">
            <Accordion allowZeroExpanded className="mar-faq-accordion">
              {faqs.map((item) => (
                <AccordionItem key={item.id} uuid={item.id} className="mar-faq-item">
                  <AccordionItemHeading>
                    <AccordionItemButton className="mar-faq-question">
                      {item.q}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="mar-faq-answer">
                    <p>{item.a}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="col-lg-5">
            <div className="mar-side-card mar-faq-side">
              <span className="mar-eyebrow">Still have questions?</span>
              <h3>We&apos;re happy to talk it through.</h3>
              <p>
                If your question isn&apos;t answered here, get in touch and
                we can talk about your circumstances directly.
              </p>
              <Link href="/contact" className="mar-btn mar-btn-primary w-100">
                Contact Maranatha
              </Link>
              <a href="tel:+61493396991" className="mar-btn mar-btn-secondary w-100">
                0493 396 991
              </a>
            </div>
            <div className="mar-faq-image">
              <Image src="/images/faq.png" alt="" width={520} height={420} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
