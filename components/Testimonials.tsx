'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "TechFlow's AI-powered analytics transformed how we make decisions. Our development cycle is now 40% faster and our product quality has never been better. The ROI was visible within the first month.",
      name: "Sarah Chen",
      role: "CTO, CloudScale Systems",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 2,
      quote: "Implementing TechFlow was seamless. Their support team guided us through every step, and the platform's intuitive design meant our entire team was productive from day one. Game-changing technology.",
      name: "Marcus Rodriguez",
      role: "VP Engineering, DataStream Inc",
      avatar: "https://i.pravatar.cc/150?img=33",
      rating: 5
    },
    {
      id: 3,
      quote: "We evaluated dozens of solutions before choosing TechFlow. The scalability, security features, and real-time collaboration tools are unmatched. It's become the backbone of our entire operation.",
      name: "Emily Thompson",
      role: "Head of Product, InnovateLabs",
      avatar: "https://i.pravatar.cc/150?img=47",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of tech companies scaling faster with TechFlow
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-600"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel - Vertical Flow Design */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center overflow-hidden">
              {/* Decorative Quote Icon */}
              <div className="absolute top-8 left-8 opacity-5">
                <Quote className="w-24 h-24 text-blue-600" />
              </div>
              
              <div className="min-h-[450px] flex flex-col justify-center items-center relative z-10">
                {/* Large Avatar at Top */}
                <div className="mb-8 relative group">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-blue-50">
                    <Image 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name and Role */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 text-2xl mb-1">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg">
                    {testimonials[activeIndex].role}
                  </p>
                </div>

                {/* Star Rating - Extra Large */}
                <div className="flex gap-2 justify-center mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium italic leading-relaxed max-w-3xl">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>

              {/* Decorative Bottom Element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-30"></div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-blue-600 w-12 h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Tech Companies</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Customer Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </button>);
};

export default Testimonials;
