import { businessConfig } from '@/lib/config'
import { Metadata } from 'next'
import Link from 'next/link'
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: `Contact Us | ${businessConfig.name}`,
  description: `Contact ${businessConfig.name} in Lake Worth, FL. Call ${businessConfig.phone.office} for appointments or ${businessConfig.phone.afterHours} for emergencies. Online booking available.`,
  keywords: 'contact Lake Worth dentist, dental appointment, emergency dentist, Lake Worth dental office',
}

export default function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Ready to schedule your appointment? We're here to help with flexible 
              scheduling options and emergency care when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="bg-gradient-to-r from-green-100 to-stone-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-800 mb-4">
              Welcome to Horizon Palms Family Dentistry
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We're excited to meet you and help you achieve your best smile. Our warm, welcoming team is dedicated to providing personalized care that makes you feel right at home.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800">Location</h3>
                    <p className="text-stone-600">{businessConfig.address.fullAddress}</p>
                    <p className="text-sm text-stone-500 mt-1">
                      Conveniently located on S Congress Ave in Lake Worth
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800">Phone Numbers</h3>
                    <p className="text-stone-600">Office: {businessConfig.phone.office}</p>
                    <p className="text-stone-600">Fax: {businessConfig.phone.fax}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800">Office Hours</h3>
                    <div className="space-y-2 text-stone-600">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Monday:</span>
                        <span className="text-green-600 font-medium">8:00AM - 12:00PM</span>
                      </div>
                      <p className="text-sm text-stone-500 ml-4">Front desk available for calls only</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Tuesday-Thursday:</span>
                        <span>{businessConfig.hours.tuesday.status}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Friday:</span>
                        <span>{businessConfig.hours.friday.status}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Saturday & Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-800">Email</h3>
                    <a href={`mailto:${businessConfig.email}`} className="text-green-600 hover:text-green-700">
                      {businessConfig.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/services"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/patient-resources"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Patient Resources
                  </Link>
                  <Link
                    href="/about"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Find Us</h3>
              {/* Google Maps embed */}
              <div className="aspect-video bg-stone-100 rounded-xl mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7135.729404647882!2d-80.09822802380909!3d26.58871657684164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d88118be1111%3A0xd3c26a19d8073162!2sHorizon%20Palms%20Family%20Dentistry%20-%20Linda%20Nguyen%20DDS!5e0!3m2!1sen!2sus!4v1769194752201!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Horizon Palms Family Dentistry Location"
                />
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://maps.google.com/?q=5909+S+Congress+Ave+Lake+Worth+FL+33462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Directions
                </a>
                <a
                  href="https://maps.apple.com/?q=5909+S+Congress+Ave+Lake+Worth+FL+33462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-stone-100 text-stone-700 px-4 py-2 rounded-lg text-center font-semibold hover:bg-stone-200 transition-colors"
                >
                  Apple Maps
                </a>
              </div>
              
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Parking Information</h4>
                <p className="text-green-700 text-sm">
                  Free parking is available in our lot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Schedule Your Appointment
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              Ready to take the first step toward a healthier smile? Give us a call to schedule your appointment.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-stone-800 mb-6">Phone Booking</h3>
              <p className="text-stone-600 mb-6">
                Our friendly team is ready to help you find the perfect appointment time.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${businessConfig.phone.office}`}
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call: {businessConfig.phone.office}
                </a>
                <div className="text-center">
                  <p className="text-sm text-stone-600">Office Hours:</p>
                  <p className="text-sm text-stone-600">Monday: 8:00AM - 12:00PM (Front desk calls only)</p>
                  <p className="text-sm text-stone-600">Tuesday-Thursday: 8:00AM - 5:00PM</p>
                  <p className="text-sm text-stone-600">Friday: 8:00AM - 1:00PM</p>
                  <p className="text-sm text-stone-600">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Schedule Your Visit?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Contact us today to take the first step toward optimal oral health. 
            We look forward to welcoming you to the Horizon Palms family!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors"
            >
              Schedule Appointment
            </Link>
            <a
              href={`tel:${businessConfig.phone.office}`}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              Call: {businessConfig.phone.office}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
