import React, { useState } from 'react';
import {
  Building2,
  Shield,
  TrendingUp,
  Award,
  Scale,
  LineChart,
  BadgeDollarSign,
  ChevronDown
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  contact: string;
  [key: string]: string;
}

function App() {
  const [activeForm, setActiveForm] = useState<'worker' | 'contractor'>('worker');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact: '',
  });

  const features = [
    {
      icon: Shield,
      title: 'Improved Compliance & Legal Protection',
      description: 'Stay compliant with labor laws and protect your business.',
    },
    {
      icon: TrendingUp,
      title: 'Better Workforce Productivity',
      description: 'Happy workers are productive workers. Ensure fair compensation.',
    },
    {
      icon: Award,
      title: 'Enhanced Reputation & CSR',
      description: 'Build trust and showcase your commitment to fair practices.',
    },
    {
      icon: Scale,
      title: 'Reduction in Wage Disputes',
      description: 'Transparent systems lead to fewer conflicts and disputes.',
    },
    {
      icon: LineChart,
      title: 'Cost Transparency & Accountability',
      description: 'Clear insights into wage distribution and expenses.',
    },
    {
      icon: BadgeDollarSign,
      title: 'Government Support & Incentives',
      description: 'Qualify for benefits through compliance adherence.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Registration submitted successfully!');
    setFormData({ name: '', email: '', contact: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fair Wages, Fair Future
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Empower your business with Fair Fundz - ensuring compliance, transparency,
            and worker satisfaction through our innovative wage distribution platform.
          </p>
          <a
            href="#register"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition duration-150"
          >
            Get Started
            <ChevronDown className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Fair Fundz?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for fair wage management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className="py-24 bg-white" id="register">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Fair Fundz Today
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                className={`px-6 py-2 rounded-md ${
                  activeForm === 'worker'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveForm('worker')}
              >
                Worker Registration
              </button>
              <button
                className={`px-6 py-2 rounded-md ${
                  activeForm === 'contractor'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveForm('contractor')}
              >
                Business Registration
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {activeForm === 'contractor' ? 'Company Name' : 'Full Name'}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                id="contact"
                value={formData.contact}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {activeForm === 'worker' && (
              <>
                <div>
                  <label
                    htmlFor="jobRole"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Role
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    id="jobRole"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="wage"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Daily Wage
                  </label>
                  <input
                    type="number"
                    name="wage"
                    id="wage"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </>
            )}

            {activeForm === 'contractor' && (
              <>
                <div>
                  <label
                    htmlFor="workType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type of Work
                  </label>
                  <input
                    type="text"
                    name="workType"
                    id="workType"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="workers"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Workers
                  </label>
                  <input
                    type="number"
                    name="workers"
                    id="workers"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                {activeForm === 'contractor'
                  ? 'Business License'
                  : 'ID Proof'}
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fair Fundz</h3>
              <p className="text-gray-400">
                Ensuring fair wage distribution and labor law compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@fairfundz.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: Bhagat Singh , Parul university</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fair Fundz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;