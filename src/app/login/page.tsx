'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

const LoginPage = () => {
  const { setUser } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (email === 'john.doe@example.com' && password === 'password123') {
        setUser({ name: 'John Doe' });
        router.push('/');
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-red-200 via-white to-red-100 flex justify-center items-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 tracking-tight">Welcome Back</h2>

        {error && <ErrorMessage message={error} />}

        <form onSubmit={handleLogin} className="space-y-4">
          <InputField 
            id="email" 
            type="email" 
            label="Email Address" 
            value={email} 
            onChange={setEmail} 
            placeholder="you@example.com"
          />
          <InputField 
            id="password" 
            type="password" 
            label="Password" 
            value={password} 
            onChange={setPassword} 
            placeholder="••••••••"
          />

          <LoginButton loading={loading} />
        </form>

        <SignUpLink />
      </div>
    </div>
  );
};

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4 text-center border border-red-300">
    {message}
  </p>
);

const InputField = ({
  id,
  type,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
    />
  </div>
);

const LoginButton = ({ loading }: { loading: boolean }) => (
  <button
    type="submit"
    disabled={loading}
    className="w-full bg-red-800 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-300"
  >
    {loading ? 'Logging in...' : 'Login'}
  </button>
);

const SignUpLink = () => (
  <div className="text-center mt-6 text-sm text-gray-600">
    Don't have an account?{' '}
    <a href="/register" className="text-red-700 font-semibold hover:underline">
      Sign up
    </a>
  </div>
);

export default LoginPage;
