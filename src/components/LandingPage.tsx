import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Bot, TrendingUp, TrendingDown, Shield, Zap, CheckCircle, Star, Users, DollarSign, Calendar, MessageSquare, Target } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Real-time Cash Flow Forecasting",
      description: "AI-powered predictions that alert you before financial trouble strikes, giving you weeks of advance notice."
    },
    {
      icon: Shield,
      title: "Automated Tax Compliance",
      description: "GST, TDS, and IT filings prepared and submitted automatically without errors or missed deadlines."
    },
    {
      icon: Zap,
      title: "Smart Fund Movement",
      description: "Intelligently delays, accelerates, or reallocates payments to optimize your runway and cash position."
    },
    {
      icon: MessageSquare,
      title: "Conversational Finance Assistant",
      description: "Get daily insights and approvals via WhatsApp/Slack. Ask questions, get instant financial advice."
    },
    {
      icon: Target,
      title: "Strategic Budgeting & Goals",
      description: "Set financial goals and let AI create actionable plans with daily progress tracking."
    },
    {
      icon: Bot,
      title: "Multi-Agent Execution",
      description: "Connects to banks, Razorpay X, and CA portals to act autonomously - not just suggest."
    }
  ];

  const agents = [
    {
      name: "Data Aggregator",
      description: "Fetches data from Plaid, Razorpay, UPI, and GST portals",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Insight Generator",
      description: "Creates cash flow forecasts and vendor recommendations",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Action Agent",
      description: "Executes fund transfers and vendor payments",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Compliance Agent",
      description: "Tracks deadlines and auto-files tax returns",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Advisor Agent",
      description: "Converses with founders via chat interface",
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "TechStart Solutions",
      content: "Zentro saved us from a cash flow crisis. The AI predicted our shortage 3 weeks early and suggested payment delays that kept us afloat.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      company: "Mumbai Logistics",
      content: "No more GST filing stress! Zentro handles everything automatically. We've had zero compliance issues since switching.",
      rating: 5
    },
    {
      name: "Anita Patel",
      company: "Digital Marketing Pro",
      content: "The WhatsApp integration is genius. I get daily financial updates and can approve payments while traveling. It's like having a CFO in my pocket.",
      rating: 5
    }
  ];

  const stats = [
    { number: "₹50Cr+", label: "Cash Flow Managed" },
    { number: "500+", label: "SMBs Served" },
    { number: "99.8%", label: "Compliance Rate" },
    { number: "45%", label: "Avg. Runway Extension" }
  ];

  return (
    <div className="min-h-screen bg-zentro-bg-primary">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-zentro-text-primary">Zentro</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zentro-text-secondary hover:text-zentro-accent-primary transition-colors">Features</a>
            <a href="#agents" className="text-zentro-text-secondary hover:text-zentro-accent-primary transition-colors">AI Agents</a>
            <a href="#testimonials" className="text-zentro-text-secondary hover:text-zentro-accent-primary transition-colors">Testimonials</a>
            <button 
              onClick={handleGetStarted}
              className="px-6 py-2 bg-zentro-accent-primary text-zentro-bg-primary rounded-lg hover:bg-zentro-accent-secondary transition-colors font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zentro-accent-primary/20 rounded-full text-zentro-accent-primary text-sm mb-6 border border-zentro-accent-primary/30">
              <Zap className="w-4 h-4" />
              Autonomous AI Financial Co-Pilot
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-zentro-text-primary mb-6 leading-tight">
              Stop Flying Your Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zentro-accent-primary to-zentro-success">
                Without a Dashboard
              </span>
            </h1>
            <p className="text-xl text-zentro-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Zentro puts an autonomous AI co-pilot in your financial cockpit. Real-time cash flow forecasting, 
              automated compliance, and smart fund movement - all without human intervention.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-zentro-accent-primary text-zentro-bg-primary rounded-xl font-semibold hover:bg-zentro-accent-secondary transition-all transform hover:scale-105 flex items-center gap-2 justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-zentro-border text-zentro-text-primary rounded-xl font-semibold hover:bg-zentro-bg-card transition-colors">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-zentro-text-primary mb-2">{stat.number}</div>
                <div className="text-zentro-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-20 bg-zentro-bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zentro-text-primary mb-6">
              Most SMBs Run Like Planes Without Pilots
            </h2>
            <p className="text-xl text-zentro-text-secondary max-w-3xl mx-auto">
              Small and mid-sized businesses across India suffer from chaotic financial management, 
              making critical decisions blind without real-time insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zentro-alert/20 rounded-lg border border-zentro-alert/30">
                  <TrendingDown className="w-6 h-6 text-zentro-alert" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zentro-text-primary mb-2">Chaotic Cash Flow</h3>
                  <p className="text-zentro-text-secondary">No clarity on incoming vs outgoing money, leading to unexpected shortfalls</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zentro-alert/20 rounded-lg border border-zentro-alert/30">
                  <Calendar className="w-6 h-6 text-zentro-alert" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zentro-text-primary mb-2">Manual Overhead</h3>
                  <p className="text-zentro-text-secondary">Spreadsheets, errors, delays - wasting precious time on accounting</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zentro-alert/20 rounded-lg border border-zentro-alert/30">
                  <Shield className="w-6 h-6 text-zentro-alert" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zentro-text-primary mb-2">Compliance Confusion</h3>
                  <p className="text-zentro-text-secondary">Penalties, missed deadlines, fear of tax notices</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-zentro-alert/20 rounded-lg border border-zentro-alert/30">
                  <Users className="w-6 h-6 text-zentro-alert" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zentro-text-primary mb-2">No Financial Strategy</h3>
                  <p className="text-zentro-text-secondary">Hiring a CFO is too costly, leaving businesses without expert guidance</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-zentro-bg-card rounded-2xl p-8 border border-zentro-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-zentro-alert/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-zentro-alert/30">
                    <TrendingDown className="w-10 h-10 text-zentro-alert" />
                  </div>
                  <h3 className="text-2xl font-bold text-zentro-text-primary mb-4">The Result?</h3>
                  <p className="text-zentro-text-secondary text-lg">
                    Businesses flying blind, making critical financial decisions without data, 
                    often discovering problems too late to fix them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zentro-text-primary mb-6">
              Your Autonomous Financial Co-Pilot
            </h2>
            <p className="text-xl text-zentro-text-secondary max-w-3xl mx-auto">
              Zentro's AI agents work 24/7 to monitor, analyze, and act on your financial data, 
              giving you the insights and automation you need to scale confidently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-zentro-bg-card p-8 rounded-2xl border border-zentro-border hover:border-zentro-accent-primary/50 transition-all group">
                  <div className="p-3 bg-zentro-accent-primary/20 rounded-xl w-fit mb-6 group-hover:bg-zentro-accent-primary/30 transition-colors border border-zentro-accent-primary/30">
                    <Icon className="w-8 h-8 text-zentro-accent-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-zentro-text-primary mb-4">{feature.title}</h3>
                  <p className="text-zentro-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="px-6 py-20 bg-zentro-bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zentro-text-primary mb-6">
              Meet Your AI Financial Team
            </h2>
            <p className="text-xl text-zentro-text-secondary max-w-3xl mx-auto">
              Five specialized AI agents work together to handle every aspect of your financial operations, 
              from data collection to strategic planning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div key={index} className="bg-zentro-bg-card p-6 rounded-xl border border-zentro-border hover:border-zentro-accent-primary/50 transition-all">
                <div className="p-3 bg-zentro-accent-secondary/20 rounded-lg w-fit mb-4 border border-zentro-accent-secondary/30">
                  <Bot className="w-6 h-6 text-zentro-accent-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-zentro-text-primary mb-3">{agent.name}</h3>
                <p className="text-zentro-text-secondary text-sm">{agent.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-zentro-success/20 rounded-full text-zentro-success border border-zentro-success/30">
              <div className="w-2 h-2 bg-zentro-success rounded-full animate-pulse"></div>
              All agents work autonomously 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zentro-text-primary mb-6">
              Trusted by Growing Businesses
            </h2>
            <p className="text-xl text-zentro-text-secondary">
              See how Zentro has transformed financial management for SMBs across India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zentro-bg-card p-8 rounded-2xl border border-zentro-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-zentro-accent-primary fill-current" />
                  ))}
                </div>
                <p className="text-zentro-text-secondary mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-zentro-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-zentro-text-secondary">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-zentro-accent-primary to-zentro-accent-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-zentro-bg-primary mb-6">
            Ready to Put Your Finances on Autopilot?
          </h2>
          <p className="text-xl text-zentro-bg-primary/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of SMBs who've transformed their financial operations with Zentro's AI co-pilot. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-zentro-bg-primary text-zentro-accent-primary rounded-xl font-semibold hover:bg-zentro-bg-card transition-all transform hover:scale-105 flex items-center gap-2 justify-center border border-zentro-bg-primary"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-zentro-bg-primary/30 text-zentro-bg-primary rounded-xl font-semibold hover:bg-zentro-bg-primary/10 transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-zentro-bg-primary/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-zentro-bg-primary border-t border-zentro-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-zentro-text-primary">Zentro</span>
              </div>
              <p className="text-zentro-text-secondary text-sm">
                Autonomous AI Financial Co-Pilot for SMBs. Automate cash flow, compliance, and financial decisions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-zentro-text-primary mb-4">Product</h4>
              <div className="space-y-2 text-sm text-zentro-text-secondary">
                <div>Features</div>
                <div>AI Agents</div>
                <div>Integrations</div>
                <div>Pricing</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-zentro-text-primary mb-4">Company</h4>
              <div className="space-y-2 text-sm text-zentro-text-secondary">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-zentro-text-primary mb-4">Support</h4>
              <div className="space-y-2 text-sm text-zentro-text-secondary">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>API Reference</div>
                <div>Status</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zentro-border mt-12 pt-8 text-center text-zentro-text-secondary text-sm">
            © 2024 Zentro. All rights reserved. Built for the future of SMB finance.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;