import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-zentro-accent-primary/20 rounded-xl border border-zentro-accent-primary/30">
              <Bot className="w-8 h-8 text-zentro-accent-primary" />
            </div>
            <span className="text-3xl font-bold text-zentro-text-primary">Zentro</span>
          </div>
          <h1 className="text-2xl font-bold text-zentro-text-primary mb-2">Welcome back</h1>
          <p className="text-zentro-text-secondary">Sign in to your AI Financial Co-Pilot</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-zentro-bg-card rounded-2xl border border-zentro-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-zentro-alert/20 border border-zentro-alert/30 rounded-lg text-zentro-alert text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zentro-text-secondary hover:text-zentro-text-primary"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-zentro-accent-primary bg-zentro-bg-primary border-zentro-border rounded focus:ring-zentro-accent-primary focus:ring-2"
                />
                <span className="ml-2 text-sm text-zentro-text-secondary">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-zentro-accent-primary hover:text-zentro-accent-secondary">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zentro-accent-primary text-zentro-bg-primary rounded-lg font-semibold hover:bg-zentro-accent-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Signing in...' : 'Sign in'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zentro-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-zentro-accent-primary hover:text-zentro-accent-secondary font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-zentro-accent-primary/10 border border-zentro-accent-primary/30 rounded-lg">
          <p className="text-sm text-zentro-text-secondary text-center">
            <strong className="text-zentro-accent-primary">Demo:</strong> Use any email and password to sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;