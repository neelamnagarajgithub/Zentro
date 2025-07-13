import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Mail, Lock, User, Building, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.name, formData.company);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create account');
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
          <h1 className="text-2xl font-bold text-zentro-text-primary mb-2">Create your account</h1>
          <p className="text-zentro-text-secondary">Start your AI-powered financial journey</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-zentro-bg-card rounded-2xl border border-zentro-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-zentro-alert/20 border border-zentro-alert/30 rounded-lg text-zentro-alert text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Full name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Company name (optional)
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Enter your company name"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Create a password"
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

            <div>
              <label className="block text-sm font-medium text-zentro-text-primary mb-2">
                Confirm password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zentro-text-secondary" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zentro-text-secondary hover:text-zentro-text-primary"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 text-zentro-accent-primary bg-zentro-bg-primary border-zentro-border rounded focus:ring-zentro-accent-primary focus:ring-2 mt-1"
                required
              />
              <span className="ml-2 text-sm text-zentro-text-secondary">
                I agree to the{' '}
                <Link to="/terms" className="text-zentro-accent-primary hover:text-zentro-accent-secondary">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-zentro-accent-primary hover:text-zentro-accent-secondary">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zentro-accent-primary text-zentro-bg-primary rounded-lg font-semibold hover:bg-zentro-accent-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Creating account...' : 'Create account'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-zentro-text-secondary">
              Already have an account?{' '}
              <Link to="/signin" className="text-zentro-accent-primary hover:text-zentro-accent-secondary font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;