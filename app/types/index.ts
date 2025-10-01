// Type definitions for the workout app

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: string;
}

export interface Workout {
  id: number;
  user_id: number;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface WorkoutEntry {
  id: number;
  workout_id: number;
  exercise: string;
  sets: number;
  reps: number;
  weight?: number;
  created_at: string;
}

export interface AuthToken {
  token: string;
  expiry: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}