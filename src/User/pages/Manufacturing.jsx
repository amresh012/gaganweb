import React from 'react';
import { Building2, CheckCircle2, Factory, Microscope, ShieldCheck, Boxes, ClipboardCheck, BarChart3 } from 'lucide-react';

const ThirdPartyManufacturing = () => {
  const capabilities = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Manufacturing Capabilities",
      description: "State-of-the-art manufacturing facilities with annual capacity of 10 billion units"
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "R&D Support",
      description: "Full formulation development and analytical method development support"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "WHO-GMP certified facilities with stringent quality control measures"
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Regulatory Support",
      description: "Complete documentation and regulatory filing assistance"
    }
  ];

  const services = [
    {
      title: "Tablets & Capsules",
      items: ["Immediate Release", "Modified Release", "Multi-Layer Tablets", "Soft Gelatin Capsules"]
    },
    {
      title: "Liquid Formulations",
      items: ["Oral Solutions", "Suspensions", "Syrups", "Drops"]
    },
    {
      title: "Semi-Solid Forms",
      items: ["Creams", "Ointments", "Gels", "Lotions"]
    },
    {
      title: "Specialized Forms",
      items: ["Effervescent Tablets", "Powder Sachets", "Pellets", "Drug-Device Combinations"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Third Party Manufacturing Excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Partner with us for world-class pharmaceutical manufacturing with complete regulatory compliance and quality assurance.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Request Manufacturing Quote
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Building2 className="h-64 w-64 text-blue-600 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Manufacturing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Standards */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quality Standards & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg text-center">
              <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WHO-GMP Certified</h3>
              <p className="text-gray-600">Manufacturing facilities certified by World Health Organization</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <ClipboardCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality management system certification</p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Process Analytics</h3>
              <p className="text-gray-600">Advanced quality metrics and process monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Manufacturing?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact our team to discuss your manufacturing requirements
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Download Capabilities Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Products Manufactured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10B+</div>
              <div className="text-gray-600">Annual Unit Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyManufacturing;