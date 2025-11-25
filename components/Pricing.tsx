'use client';

import React from 'react';
import { Check, Zap, Shield, Star, Sparkles, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const features = [
    { icon: Star, text: 'Modern, Professional Design' },
    { icon: Zap, text: 'Lightning-Fast Performance' },
    { icon: Shield, text: 'SEO Optimized & Secure' },
    { icon: Sparkles, text: 'Mobile-Responsive Layout' },
    { icon: Check, text: 'Contact Form Integration' },
    { icon: Check, text: 'Social Media Integration' },
    { icon: Check, text: 'Google Analytics Setup' },
    { icon: Check, text: '30-Day Support Included' }
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Professional Website
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to establish your online presence
          </p>
        </div>

        {/* Main Pricing Card - Split Layout */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Price & CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 flex flex-col justify-center text-white relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                  <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  <span className="text-sm font-semibold">Best Value Package</span>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-7xl md:text-8xl font-bold leading-none">$29</span>
                  </div>
                  <p className="text-blue-100 text-lg">One-time payment</p>
                  <p className="text-white text-sm mt-2 font-semibold">No monthly fees • Full ownership</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 group mb-4"
                >
                  <span className="text-lg">Get Your Website Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-blue-100">
                  🔒 Secure payment via Stripe • Instant access
                </p>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure checkout</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="p-12 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What's Included
              </h3>
              <p className="text-gray-600 mb-8">
                Everything you need for a professional online presence
              </p>

              {/* Features List */}
              <div className="space-y-5">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 pt-1">
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Value Proposition */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-900">Why TechFlow?</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Skip the expensive agencies and DIY headaches. Get a professionally designed, 
                    performance-optimized website that makes you look credible and converts visitors 
                    into customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Join 500+ happy customers</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600 text-sm font-medium">4.9/5 average rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
