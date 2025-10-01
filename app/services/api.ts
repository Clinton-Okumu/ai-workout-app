// API service for backend communication

const API_BASE_URL = 'http://localhost:8081'; // Update for production

class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  // Auth endpoints
  async registerUser(email: string, password: string, name: string) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  async loginUser(email: string, password: string) {
    return this.request('/tokens/authentication', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Workout endpoints (require auth)
  async getWorkouts(token: string) {
    return this.request('/workouts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getWorkout(id: number, token: string) {
    return this.request(`/workout/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async createWorkout(workout: any, token: string) {
    return this.request('/workout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(workout),
    });
  }

  async updateWorkout(id: number, workout: any, token: string) {
    return this.request(`/workout/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(workout),
    });
  }

  async deleteWorkout(id: number, token: string) {
    return this.request(`/workout/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const apiService = new ApiService(API_BASE_URL);