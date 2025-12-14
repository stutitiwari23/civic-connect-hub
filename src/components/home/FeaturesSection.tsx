import { 
  Camera, 
  MapPin, 
  Bell, 
  BarChart3, 
  Shield, 
  Smartphone 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Camera,
    title: 'Photo Upload',
    description: 'Attach photos to your reports for clear documentation of civic issues.',
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'Pinpoint exact locations using integrated mapping for accurate issue reporting.',
  },
  {
    icon: Bell,
    title: 'Real-time Updates',
    description: 'Receive notifications as your reported issues progress through resolution.',
  },
  {
    icon: BarChart3,
    title: 'Status Tracking',
    description: 'Monitor the status of all reported issues from submission to resolution.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your personal information is protected with enterprise-grade security.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Report issues on-the-go with our responsive, mobile-optimized platform.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need to Report & Track Issues
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides all the tools citizens need to effectively communicate civic problems and authorities need to resolve them.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
