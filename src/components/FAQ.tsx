
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I verify if a property is legally clear?",
      answer: "All properties listed on 90acre.com go through our verification process. We check land titles, NOCs, and other legal documents. However, we recommend independent legal verification before finalizing any purchase."
    },
    {
      question: "What are the charges for listing a property?",
      answer: "Listing your property on 90acre.com is completely free. We only charge a small commission when your property gets successfully sold through our platform."
    },
    {
      question: "Can I get a loan for land purchase?",
      answer: "Yes, many banks provide land purchase loans. We can connect you with our partner banks and financial institutions who offer competitive rates for land investments."
    },
    {
      question: "How long does the property buying process take?",
      answer: "The process typically takes 15-30 days depending on documentation verification, bank approvals (if applicable), and registration formalities."
    },
    {
      question: "Do you provide property management services?",
      answer: "While our primary focus is on land sales and purchases, we can connect you with trusted property management services in your area."
    },
    {
      question: "Is there any hidden cost involved?",
      answer: "No, we believe in complete transparency. All costs including registration, stamp duty, and our service charges are clearly mentioned upfront."
    }
  ];

  return (
    <section className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about land investments and our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-elegant border-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
