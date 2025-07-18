export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export interface Debate {
  id: string;
  title: string;
  description: string;
  authorId: string;
  createdAt: Date;
  status: 'active' | 'ended';
}