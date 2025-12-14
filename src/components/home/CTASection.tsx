import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Free to use for all citizens',
  'Track issues in real-time',
  'Receive status notifications',
  'Contribute to your community',
];

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Make Your City Better?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Join thousands of active citizens who are already making a difference in their communities.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground"
              >
                <CheckCircle className="h-4 w-4" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/report">
                Report Your First Issue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/issues">Browse Issues</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
