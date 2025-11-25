import React from 'react';
import Image from 'next/image';
import { Play, DollarSign, Users, Zap } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Solutions for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your tech business with confidence
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Card 1 - Interactive Product Demos */}
          <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-80 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="Interactive product demos" 
                width={800} 
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-blue-600 p-4 rounded-xl shadow-lg">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Interactive Product Demos
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Engage prospects with stunning video showcases and live demos. Our platform lets you create interactive walkthroughs that convert viewers into customers with embedded CTAs and real-time analytics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Video hosting & streaming optimization
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Interactive hotspots & annotations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Engagement tracking & heatmaps
                </li>
              </ul>
            </div>
          </div>

          {/* Small Card - Multi-tier Pricing */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Multi-Tier Pricing Plans
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Beautiful pricing tables with feature comparison matrices. Support multiple currencies, annual/monthly toggle, and custom enterprise quotes.
            </p>
          </div>

          {/* Small Card - Customer Testimonials */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Customer Testimonials
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Showcase social proof with verified reviews, success metrics, and company logos. Build trust with real stories from satisfied customers.
            </p>
          </div>

          {/* Large Featured Card 2 - Integration Partners */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" 
                alt="API integration partners" 
                width={800} 
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-blue-600 p-4 rounded-xl shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Integration Partners & API
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                Connect with 100+ tools your team already uses. Our comprehensive API documentation and SDKs make integration seamless for developers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">REST API</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">GraphQL</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Webhooks</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">SDKs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;