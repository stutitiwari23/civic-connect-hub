import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
            <Shield className="h-4 w-4" />
            <span>Trusted by citizens across the city</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in">
            Report Civic Issues.{' '}
            <span className="text-primary-foreground/80">Get Them Resolved.</span>
          </h1>

          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A transparent platform connecting citizens with municipal authorities. Report problems in your neighborhood and track their resolution in real-time.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/report">
                Report an Issue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/issues">View All Issues</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary-foreground/80" />
                <span className="text-3xl font-bold text-primary-foreground">2,500+</span>
              </div>
              <p className="mt-1 text-sm text-primary-foreground/70">Active Citizens</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-6 w-6 text-primary-foreground/80" />
                <span className="text-3xl font-bold text-primary-foreground">1,200+</span>
              </div>
              <p className="mt-1 text-sm text-primary-foreground/70">Issues Resolved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-primary-foreground/80" />
                <span className="text-3xl font-bold text-primary-foreground">48hrs</span>
              </div>
              <p className="mt-1 text-sm text-primary-foreground/70">Avg. Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
