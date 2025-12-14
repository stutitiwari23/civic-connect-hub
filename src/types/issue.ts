export type IssueStatus = 'reported' | 'in-progress' | 'resolved';

export type IssueCategory = 
  | 'road-damage'
  | 'streetlight'
  | 'garbage'
  | 'water-supply'
  | 'drainage'
  | 'public-safety'
  | 'parks'
  | 'other';

export interface Issue {
  id: string;
  title: string;
  description: string;
  category: IssueCategory;
  status: IssueStatus;
  location: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  imageUrl?: string;
  reportedBy: string;
  reportedAt: Date;
  updatedAt: Date;
  assignedTo?: string;
  priority: 'low' | 'medium' | 'high';
  upvotes: number;
}

export const categoryLabels: Record<IssueCategory, string> = {
  'road-damage': 'Road Damage',
  'streetlight': 'Streetlight Issue',
  'garbage': 'Garbage Collection',
  'water-supply': 'Water Supply',
  'drainage': 'Drainage Problem',
  'public-safety': 'Public Safety',
  'parks': 'Parks & Recreation',
  'other': 'Other',
};

export const statusLabels: Record<IssueStatus, string> = {
  'reported': 'Reported',
  'in-progress': 'In Progress',
  'resolved': 'Resolved',
};
