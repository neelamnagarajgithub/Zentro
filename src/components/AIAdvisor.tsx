import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, TrendingUp } from 'lucide-react';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm your AI Financial Advisor. I can help you with cash flow insights, compliance questions, and strategic financial planning. What would you like to know?",
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      type: 'user',
      content: "What's my current burn rate and how can I optimize it?",
      timestamp: '10:32 AM'
    },
    {
      id: 3,
      type: 'ai',
      content: "Based on your latest data, your monthly burn rate is ₹7.6L, which is 3% lower than last month. Here are my recommendations to optimize further:\n\n1. **Vendor Payment Terms**: Negotiate 45-day payment terms with your top 3 vendors (currently 30 days) - this could free up ₹2.3L in working capital\n\n2. **Subscription Audit**: I noticed 3 unused software subscriptions totaling ₹12,000/month\n\n3. **Seasonal Adjustments**: Reduce marketing spend by 15% in Q3 (historically low conversion period)\n\nWould you like me to draft vendor negotiation emails or provide more details on any of these recommendations?",
      timestamp: '10:33 AM'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const quickActions = [
    "Show me cash flow forecast",
    "What are my upcoming tax deadlines?",
    "Analyze my top expenses",
    "How's my compliance score?"
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai' as const,
          content: "I'm analyzing your request and will provide detailed insights based on your financial data. This is a simulated response for demonstration purposes.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleQuickAction = (action: string) => {
    setNewMessage(action);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-zentro-text-primary">AI Financial Advisor</h2>
        <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
          <Bot className="w-4 h-4" />
          Powered by GPT-4 & FinBERT
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-zentro-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <Bot className="w-5 h-5 text-zentro-accent-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-zentro-text-primary">Zentro AI Assistant</h3>
              <div className="flex items-center gap-2 text-sm text-zentro-text-secondary">
                <div className="w-2 h-2 bg-zentro-success rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`flex items-start gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-2 rounded-lg ${
                    message.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-4 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-zentro-accent-primary text-zentro-bg-primary' 
                        : 'bg-zentro-bg-primary text-zentro-text-primary border border-zentro-border'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <p className="text-xs text-zentro-text-secondary mt-1">{message.timestamp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-zentro-border">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="px-3 py-1 bg-zentro-bg-primary text-zentro-text-secondary rounded-full text-sm hover:bg-zentro-border transition-colors border border-zentro-border"
              >
                {action}
              </button>
            ))}
          </div>
          
          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me about your finances..."
              className="flex-1 px-4 py-2 bg-zentro-bg-primary border border-zentro-border rounded-lg text-zentro-text-primary placeholder-zentro-text-secondary focus:outline-none focus:ring-2 focus:ring-zentro-accent-primary focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-zentro-accent-primary text-zentro-bg-primary rounded-lg hover:bg-zentro-accent-secondary transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-zentro-bg-card rounded-xl border border-zentro-border">
        <div className="p-6 border-b border-zentro-border">
          <h3 className="text-lg font-semibold text-zentro-text-primary">Today's AI Insights</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-zentro-success/20 rounded-lg border border-zentro-success/30">
              <TrendingUp className="w-5 h-5 text-zentro-success" />
            </div>
            <div>
              <h4 className="font-semibold text-zentro-text-primary">Cash Flow Optimization</h4>
              <p className="text-zentro-text-secondary">I've identified 3 opportunities to improve your cash flow by ₹85,000 this month</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-zentro-accent-primary/20 rounded-lg border border-zentro-accent-primary/30">
              <MessageSquare className="w-5 h-5 text-zentro-accent-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-zentro-text-primary">Vendor Negotiation</h4>
              <p className="text-zentro-text-secondary">Based on payment history, I can draft negotiation emails for better terms with 5 vendors</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-2 bg-zentro-accent-secondary/20 rounded-lg border border-zentro-accent-secondary/30">
              <Bot className="w-5 h-5 text-zentro-accent-secondary" />
            </div>
            <div>
              <h4 className="font-semibold text-zentro-text-primary">Compliance Automation</h4>
              <p className="text-zentro-text-secondary">All your tax filings are on track. I've prepared drafts for upcoming deadlines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;