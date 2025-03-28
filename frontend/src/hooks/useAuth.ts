import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, LoginResponse, ApiError } from '../types/auth';

const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to login';
    try {
      const error = await response.json();
      errorMessage = error.error || errorMessage;
    } catch {
    }
    throw new Error(errorMessage);
  }

  try {
    return await response.json();
  } catch {
    throw new Error('Invalid JSON response from server');
  }
};

export const useAuth = () => {
  return useMutation<LoginResponse, ApiError, LoginCredentials>({
    mutationFn: login,
  });
};