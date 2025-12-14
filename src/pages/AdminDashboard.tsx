import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mockIssues } from '@/data/mockIssues';
import StatusBadge from '@/components/issues/StatusBadge';
import PriorityBadge from '@/components/issues/PriorityBadge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  Eye,
  UserPlus,
} from 'lucide-react';
import { categoryLabels, IssueStatus, statusLabels } from '@/types/issue';
import { format } from 'date-fns';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<IssueStatus | 'all'>('all');

  const stats = [
    {
      title: 'Total Issues',
      value: mockIssues.length,
      icon: BarChart3,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Reported',
      value: mockIssues.filter((i) => i.status === 'reported').length,
      icon: AlertCircle,
      color: 'text-status-reported',
      bgColor: 'bg-status-reported/10',
    },
    {
      title: 'In Progress',
      value: mockIssues.filter((i) => i.status === 'in-progress').length,
      icon: Clock,
      color: 'text-status-in-progress',
      bgColor: 'bg-status-in-progress/10',
    },
    {
      title: 'Resolved',
      value: mockIssues.filter((i) => i.status === 'resolved').length,
      icon: CheckCircle2,
      color: 'text-status-resolved',
      bgColor: 'bg-status-resolved/10',
    },
  ];

  const filteredIssues = mockIssues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || issue.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Manage and resolve civic issues reported by citizens
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="mt-1 text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`rounded-full p-3 ${stat.bgColor}`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Issues Table */}
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>All Issues</CardTitle>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search issues..."
                      className="pl-10 w-full sm:w-[200px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select
                    value={statusFilter}
                    onValueChange={(value) => setStatusFilter(value as IssueStatus | 'all')}
                  >
                    <SelectTrigger className="w-full sm:w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      {Object.entries(statusLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Issue</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Reported</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredIssues.map((issue) => (
                      <TableRow key={issue.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground line-clamp-1">
                              {issue.title}
                            </p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {issue.location}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {categoryLabels[issue.category]}
                          </span>
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={issue.status} size="sm" />
                        </TableCell>
                        <TableCell>
                          <PriorityBadge priority={issue.priority} size="sm" />
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {format(issue.reportedAt, 'MMM d, yyyy')}
                        </TableCell>
                        <TableCell>
                          {issue.assignedTo ? (
                            <span className="text-sm">{issue.assignedTo}</span>
                          ) : (
                            <span className="text-sm text-muted-foreground">Unassigned</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <UserPlus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredIssues.length === 0 && (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">No issues found.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
