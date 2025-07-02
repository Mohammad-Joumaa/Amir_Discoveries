import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our company was struggling to keep up with the demands of our growing business until we found this automation agency. They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity.",
      author: "Adeline M."
    },
    {
      text: "I was skeptical at first about using an automation agency, but I am so glad I did. They helped me automate all of my repetitive tasks, which has given me back so much time in my day. I can now focus on the things that I'm passionate about in my business without feeling overwhelmed.",
      author: "Trevor D."
    },
    {
      text: "If you're looking for a way to scale your business without sacrificing your personal life, then this automation agency is the way to go. They helped me automate everything from social media management to customer support, which has allowed me to take my business to the next level without burning out.",
      author: "Meredith L."
    },
    {
      text: "This automation agency has been a game-changer for my business. They helped me automate my entire workflow, which has resulted in a significant increase in productivity. I can't imagine running my business without their help.",
      author: "Michael H."
    },
    {
      text: "If you're tired of feeling like you're always behind on your work, then you need to work with this automation agency. They helped me automate all of my repetitive tasks, which has given me more time to focus on the things that matter most in my business. I'm so grateful for their help!",
      author: "Alice K."
    },
    {
      text: "I can't recommend this automation agency enough. They have helped me automate my entire workflow, which has saved me so much time and energy. I no longer feel like I'm drowning in my work, and I'm able to focus on growing my business.",
      author: "Corey W."
    }
  ];

  const StarRating = () => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Look at what our clients say:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <StarRating />
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                <div className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;