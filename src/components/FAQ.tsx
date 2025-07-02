import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import automationFlowImg from "@/assets/automation-flow.jpg";

const FAQ = () => {
  const faqs = [
    {
      question: "What Is Your Service Fee?",
      answer: "Our service fees are customized based on your specific automation needs and the complexity of your workflows. We offer flexible pricing models including project-based and ongoing support options."
    },
    {
      question: "What's Your Guarantee?",
      answer: "We guarantee that our automation solutions will save you time and increase productivity. If you're not satisfied with the results within the first 30 days, we'll work with you to make it right or provide a full refund."
    },
    {
      question: "Am I Qualified To Work With Axe Automation?",
      answer: "If you have repetitive tasks, manual processes, or workflows that could benefit from automation, you're qualified! We work with businesses of all sizes across various industries."
    },
    {
      question: "How Long Are Your Contracts?",
      answer: "We offer flexible contract terms ranging from project-based work to ongoing monthly support. Most clients start with a 3-6 month implementation period, followed by optional ongoing maintenance contracts."
    },
    {
      question: "Do You Also Offer Pinterest Content Management?",
      answer: "Yes! We can automate social media management including Pinterest content scheduling, posting, and analytics reporting as part of our comprehensive automation solutions."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Take a Look <br />
              <span className="text-brand-purple">into How we Work</span>
            </h2>
            
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <img 
                src={automationFlowImg} 
                alt="Automation workflow diagram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;