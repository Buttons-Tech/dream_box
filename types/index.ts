export enum UserRole {
  STUDENT = 'student',
  TUTOR = 'tutor',
  SCHOOL_ADMIN = 'school_admin',
  DREAMBOX_ADMIN = 'dreambox_admin',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isPaid: boolean;
  schoolName?: string;
}

export interface Subject {
  id: string;
  name: string;
  price: number;
  category: 'tech' | 'academic' | 'creative';
}