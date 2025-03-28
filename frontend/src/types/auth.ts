export interface LoginCredentials {
  uid: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    uid: string;
    name: string;
  };
}

export interface ApiError {
  message: string;
  code: string;
}