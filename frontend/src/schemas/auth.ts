import { z } from 'zod';

export const loginSchema = z.object({
  uid: z.string()
    .min(1, 'UID is required')
    .min(3, 'UID must be at least 3 characters'),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
});

export type LoginFormData = z.infer<typeof loginSchema>;