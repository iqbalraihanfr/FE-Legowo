
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      nameId: 'Sarah Johnson',
      location: 'Jakarta, Indonesia',
      locationId: 'Jakarta, Indonesia',
      rating: 5,
      comment: 'Amazing quality! The wooden toy chest I ordered is absolutely beautiful and my kids love it.',
      commentId: 'Kualitas luar biasa! Peti mainan kayu yang saya pesan sangat indah dan anak-anak saya menyukainya.',
      avatar: 'https://images.unsplash.com/photo-1581961860819-71121c811c99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Michael Chen',
      nameId: 'Michael Chen',
      location: 'Singapore',
      locationId: 'Singapura',
      rating: 5,
      comment: 'Excellent craftsmanship and fast delivery. The home decor pieces transformed our living room completely.',
      commentId: 'Kerajinan yang luar biasa dan pengiriman cepat. Dekorasi rumah mengubah ruang tamu kami sepenuhnya.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      nameId: 'Priya Sharma',
      location: 'Mumbai, India',
      locationId: 'Mumbai, India',
      rating: 5,
      comment: 'Love the eco-friendly approach! Beautiful handcrafted pieces that are perfect for our home.',
      commentId: 'Suka dengan pendekatan ramah lingkungan! Karya buatan tangan yang indah dan sempurna untuk rumah kami.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-8 bg-gray-50 px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-mochiyPopOne text-4xl text-gray-900 mb-4">
            {language === 'en' ? 'What Our Customers Say' : 'Kata Pelanggan Kami'}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={language === 'en' ? testimonial.name : testimonial.nameId}
              location={language === 'en' ? testimonial.location : testimonial.locationId}
              rating={testimonial.rating}
              comment={language === 'en' ? testimonial.comment : testimonial.commentId}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
