import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IssueCard from '@/components/issues/IssueCard';
import { mockIssues } from '@/data/mockIssues';
import { ArrowRight } from 'lucide-react';

const RecentIssuesSection = () => {
  const recentIssues = mockIssues.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Recent Reports
            </h2>
            <p className="mt-2 text-muted-foreground">
              Stay updated with the latest civic issues reported by citizens
            </p>
          </div>
          <Button asChild variant="default">
            <Link to="/issues">
              View All Issues
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentIssues.map((issue, index) => (
            <div 
              key={issue.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IssueCard issue={issue} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentIssuesSection;
