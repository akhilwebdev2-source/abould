import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mindbullet",
      location: "United States",
      avatar: "https://placehold.co/100x100/f3f4f6/1a3c35?text=M",
      quote: "Feels like an in-house team, not a freelancer.",
      review: "Akhil Studios was highly communicative, fast, and deeply invested in quality. They went above and beyond to incorporate feedback and ensure the final app design met every expectation. We would happily work with them again."
    },
    {
      name: "Think_Digital",
      location: "India",
      avatar: "https://placehold.co/100x100/e0f2fe/1a3c35?text=T",
      quote: "Excellent attention to detail and professional execution.",
      review: "Akhil Studios demonstrated strong expertise in FlutterFlow. The app design, API integration, and performance were handled very professionally. Delivery was on time, and communication was clear throughout the project."
    },
    {
      name: "Favelakid",
      location: "Switzerland",
      avatar: "https://placehold.co/100x100/f0fdf4/1a3c35?text=F",
      quote: "Clean, smooth, and well-executed product.",
      review: "The platform looks polished and functions smoothly. Feedback was implemented quickly, and communication remained clear throughout the process."
    },
    {
      name: "Palitsaurav",
      location: "United Kingdom",
      avatar: "https://placehold.co/100x100/fff7ed/1a3c35?text=P",
      quote: "Went above and beyond — even beyond the scope.",
      review: "Although this was primarily a backend project, Akhil Studios provided valuable UI suggestions that significantly improved the overall product. The extra effort was truly appreciated."
    },
    {
      name: "Lesleytork",
      location: "Denmark",
      avatar: "https://placehold.co/100x100/fae8ff/1a3c35?text=L",
      quote: "Professional, reliable, and easy to collaborate with.",
      review: "All requested changes were handled quickly and thoughtfully. Akhil Studios communicates clearly, delivers high-quality work, and consistently adds value to the project. Highly recommended."
    },
    {
      name: "Leoncamz",
      location: "United Kingdom",
      avatar: "https://placehold.co/100x100/fef2f2/1a3c35?text=L",
      quote: "Very talented and extremely knowledgeable.",
      review: "Akhil Studios is a pleasure to work with — skilled, responsive, and professional. The quality of work exceeded expectations, and the overall experience was excellent."
    }
  ];

  return (
    <section className="md:py-24 py-12 bg-surface-alt">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark">
            Clients Love Working With Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 flex flex-col h-full"
              style={{
                background: 'radial-gradient(circle at top right, #E6F7F1 0%, #ffffff 30%)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-inner">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                 </div>
                 <div>
                    <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                 </div>
              </div>

              <h3 className="text-lg font-bold text-primary-dark mb-4 leading-tight">
                 {testimonial.quote}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed grow">
                 {testimonial.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
