import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, loginSchema } from '../schemas/auth';
import { useAuth } from '../hooks/useAuth';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const { mutate: login, isPending, error } = useAuth();
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema),
    });
  
    const onSubmit = (data: LoginFormData) => {
      login(data, {
        onSuccess: () => {
          // Handle successful login
          console.log('Login successful:');
          navigate('/dashboard');
        },
      });
    };
  
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome back!
            </h2>
          </div>
  
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm">
              {error.message}
            </div>
          )}
  
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="UID"
              type="text"
              placeholder="Enter your UID"
              error={errors.uid?.message}
              {...register('uid')}
            />
  
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              error={errors.password?.message}
              {...register('password')}
            />
  
            <Button type="submit" loading={isPending}>
              Sign in
            </Button>
          </form>
        </div>
      </div>
    );
  }

  export default LoginForm;