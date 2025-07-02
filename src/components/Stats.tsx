import { Button } from "@/components/ui/button";

const Stats = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Highly automated businesses are 6x more likely to see significant revenue growth
          </h2>
          <div className="flex justify-center mb-8">
            <Button variant="outline" asChild>
              <a href="#processes">
                <span className="mr-2">→</span>
                Check the list of our Automated Processes
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;