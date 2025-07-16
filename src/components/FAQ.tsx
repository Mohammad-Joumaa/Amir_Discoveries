import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import automationFlowImg from "@/assets/FAQ.png";

const FAQ = () => {
  const faqs = [
    {
      question: "How Much Does It Cost?",
      answer: "Investment varies depending on your project scope and automation requirements. We provide transparent pricing with both one-time project rates and monthly retainer options tailored to fit your budget and goals."
    },
    {
      question: "Do You Offer Any Guarantees?",
      answer: "We stand behind our work with a 30-day satisfaction promise. Our automation systems are designed to deliver measurable improvements in efficiency and productivity - if we don't meet your expectations, we'll make it right."
    },
    {
      question: "Is My Business A Good Fit?",
      answer: "Perfect fit if you're spending hours on repetitive tasks or managing complex workflows manually. We partner with forward-thinking businesses ready to scale smarter, regardless of company size or industry."
    },
  {
      question: "What If I Need Changes After Implementation?",
      answer: "Business needs evolve, and so do our solutions. We provide ongoing optimization and can modify workflows as your processes change. Most adjustments are included in our support packages."
},
    {
  question: "Can You Handle Social Media Management?",
  answer: "Yes! We automate your entire social media workflow including Pinterest. From content creation and scheduling to analytics and performance optimization - we've got your social presence covered."
},
    {
      question: "Which Industries Do You Work With?",
      answer: "Our automation expertise spans e-commerce, healthcare, finance, real estate, marketing agencies, and SaaS platforms. Any business with repetitive workflows and data management challenges can benefit from our solutions."
    },
    {
  question: "How Do You Protect My Information?",
  answer: "Your information stays completely secure and under your control. We implement bank-level security measures and privacy safeguards, ensuring you retain full ownership of all your business data throughout our partnership."
}
  ];
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              How We Turn Your Vision Into Results <br />
              <span className="text-brand-purple">By Simplifying Complex Processes</span>
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