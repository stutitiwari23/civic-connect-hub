import { FileText, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Report an Issue',
    description: 'Submit a detailed report with category, location, description, and photos of the civic issue.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Review & Assign',
    description: 'Municipal authorities review the report and assign it to the appropriate department.',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Resolution Work',
    description: 'The assigned team works on resolving the issue and updates the status accordingly.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Issue Resolved',
    description: 'Once completed, the issue is marked as resolved and you receive a notification.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple four-step process from reporting to resolution
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.step} 
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/10" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
