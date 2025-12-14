import { Issue, categoryLabels } from '@/types/issue';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';
import { MapPin, Calendar, ThumbsUp, Tag } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface IssueCardProps {
  issue: Issue;
  onClick?: () => void;
}

const IssueCard = ({ issue, onClick }: IssueCardProps) => {
  return (
    <Card
      className={cn(
        'group cursor-pointer overflow-hidden transition-all duration-300',
        'hover:shadow-card-hover hover:-translate-y-1'
      )}
      onClick={onClick}
    >
      {issue.imageUrl && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={issue.imageUrl}
            alt={issue.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-2 top-2">
            <StatusBadge status={issue.status} size="sm" />
          </div>
        </div>
      )}
      
      <CardHeader className={cn(!issue.imageUrl && 'pb-3')}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {issue.title}
          </h3>
          {!issue.imageUrl && <StatusBadge status={issue.status} size="sm" />}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {issue.description}
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            <Tag className="h-3 w-3" />
            {categoryLabels[issue.category]}
          </span>
          <PriorityBadge priority={issue.priority} size="sm" />
        </div>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">{issue.location}</span>
        </div>
      </CardContent>

      <CardFooter className="border-t border-border pt-4">
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDistanceToNow(issue.reportedAt, { addSuffix: true })}
          </div>
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="h-4 w-4" />
            {issue.upvotes} upvotes
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default IssueCard;
