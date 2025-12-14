import { cn } from '@/lib/utils';

interface PriorityBadgeProps {
  priority: 'low' | 'medium' | 'high';
  size?: 'sm' | 'default';
}

const PriorityBadge = ({ priority, size = 'default' }: PriorityBadgeProps) => {
  const priorityConfig = {
    low: {
      label: 'Low',
      className: 'bg-secondary text-secondary-foreground',
    },
    medium: {
      label: 'Medium',
      className: 'bg-warning/10 text-warning border border-warning/20',
    },
    high: {
      label: 'High',
      className: 'bg-destructive/10 text-destructive border border-destructive/20',
    },
  };

  const config = priorityConfig[priority];

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        config.className,
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      {config.label}
    </span>
  );
};

export default PriorityBadge;
