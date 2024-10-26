import React from 'react';
import { Award, Users, Globe2, Leaf, Target, Heart, BookOpen, Scale } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Patient First",
      description: "Every decision we make is guided by patient well-being and safety"
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Quality Excellence",
      description: "Unwavering commitment to the highest pharmaceutical standards"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "Continuous investment in research and development"
    },
    {
      icon: <Leaf className="h-8 w-8 text-blue-600" />,
      title: "Sustainability",
      description: "Environmentally conscious practices in all operations"
    }
  ];

  const milestones = [
    {
      year: "1990",
      title: "Company Founded",
      description: "Started with a single manufacturing unit"
    },
    {
      year: "2000",
      title: "International Expansion",
      description: "Entered global markets with WHO-GMP certification"
    },
    {
      year: "2010",
      title: "R&D Center Launch",
      description: "Established state-of-the-art research facility"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented AI-driven quality control systems"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Advancing Healthcare Through Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over three decades, GaganPharma has been at the forefront of pharmaceutical excellence, 
              combining cutting-edge technology with unwavering commitment to quality and patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Products</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Founded in 1990, PharmaCorp began with a vision to make quality healthcare accessible to all. 
                What started as a small manufacturing unit has grown into a global pharmaceutical leader, 
                thanks to our unwavering commitment to quality and innovation.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we operate state-of-the-art manufacturing facilities across multiple locations, 
                serving healthcare needs worldwide through both our own products and third-party manufacturing services.
              </p>
              <p className="text-gray-600">
                Our dedication to research and development continues to drive breakthrough innovations in pharmaceutical 
                manufacturing and drug delivery systems, making us a trusted partner in global healthcare.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                  <div className="text-xl font-bold text-blue-600">{milestone.year}</div>
                  <div>
                    <h3 className="font-semibold">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((leader) => (
              <div key={leader} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-1">John Doe {leader}</h3>
                <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                <p className="text-sm text-gray-500">
                  20+ years of pharmaceutical industry experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WHO-GMP</h3>
              <p className="text-gray-600">World Health Organization Good Manufacturing Practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Globe2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management System Certification</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">EU-GMP</h3>
              <p className="text-gray-600">European Union Good Manufacturing Practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover career opportunities or partner with us in advancing healthcare
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
              View Careers
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;