import { cn } from '@/lib/utils';
import { IssueStatus, statusLabels } from '@/types/issue';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: IssueStatus;
  size?: 'sm' | 'default';
}

const StatusBadge = ({ status, size = 'default' }: StatusBadgeProps) => {
  const statusConfig = {
    reported: {
      icon: AlertCircle,
      className: 'bg-status-reported/10 text-status-reported border-status-reported/20',
    },
    'in-progress': {
      icon: Clock,
      className: 'bg-status-in-progress/10 text-status-in-progress border-status-in-progress/20',
    },
    resolved: {
      icon: CheckCircle2,
      className: 'bg-status-resolved/10 text-status-resolved border-status-resolved/20',
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border font-medium',
        config.className,
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      )}
    >
      <Icon className={cn(size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')} />
      {statusLabels[status]}
    </span>
  );
};

export default StatusBadge;
