import { businessConfig, drNguyenBio, teamMembers } from '@/lib/config'
import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'

export const metadata: Metadata = {
  title: `About Us | ${businessConfig.name}`,
  description: `Learn about Dr. Linda Nguyen and our dedicated team at ${businessConfig.name} in Lake Worth, FL. Discover our commitment to personalized family dental care.`,
  keywords: 'Dr. Linda Nguyen, Lake Worth dentist, West Palm Beach dental team, family dentistry team',
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Horizon Palms Family Dentistry
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted family dental practice in Lake Worth, FL, where personalized care meets 
              clinical excellence in a warm, welcoming environment.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Story Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-stone-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-6 text-stone-600">
                <p>
                  Founded by Dr. Linda Nguyen, Horizon Palms Family Dentistry was created with a simple 
                  vision: to provide exceptional dental care that feels like visiting family. As a West 
                  Palm Beach local, Dr. Nguyen understands the unique needs of our community and is 
                  passionate about creating healthy, confident smiles for patients of all ages.
                </p>
                <p>
                  Our practice combines the latest dental technology with a personalized approach that 
                  puts patient comfort first. From the moment you walk through our doors, you'll 
                  experience the difference that genuine care and attention to detail can make in 
                  your dental visit.
                </p>
                <p>
                  We believe that everyone deserves access to quality dental care in a welcoming 
                  environment. That's why we've built a team of dedicated professionals who share 
                  our commitment to excellence and patient-centered care.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  Schedule Your Visit
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Practice photo - Portrait orientation optimized */}
              <div className="bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl flex items-center justify-center overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '500px' }}>
                <ImageWithFallback 
                  src="/images/practice-photo.jpg" 
                  alt="Horizon Palms Family Dentistry Office"
                  width={450}
                  height={600}
                  className="w-full h-full object-cover rounded-2xl"
                  priority={false}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-stone-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Nguyen Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
                Meet Dr. Linda Nguyen
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                General Dentist & Practice Owner
              </p>
              <div className="mt-6 space-y-4 text-stone-600">
                <p>{drNguyenBio.bio}</p>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Education & Credentials</h3>
                  <ul className="space-y-2">
                    {drNguyenBio.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {drNguyenBio.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              {/* Dr. Nguyen portrait photo */}
              <div className="bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center">
                <ImageWithFallback 
                  src="/images/dr-nguyen-headshot.jpg" 
                  alt="Dr. Linda Nguyen, DDS - Portrait"
                  width={384}
                  height={384}
                  className="w-full max-w-sm h-96 rounded-xl mb-6 object-cover object-top"
                  priority={true}
                />
                <div className="text-center">
                  <p className="text-stone-600 font-semibold text-xl">Dr. Linda Nguyen, DDS</p>
                  <p className="text-lg text-stone-500">General Dentist</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-stone-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Meet Our Dedicated Team
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              Our experienced team shares Dr. Nguyen's commitment to providing exceptional care 
              in a warm, welcoming environment where every patient feels like family.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-stone-800">{member.name}</h3>
                <p className="text-green-600 font-medium mb-4">{member.title}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl mb-6">
                Visit Our Office
              </h2>
              <div className="space-y-6">
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
                    <h3 className="font-semibold text-stone-800">Contact</h3>
                    <p className="text-stone-600">Office: {businessConfig.phone.office}</p>
                    <p className="text-stone-600">Emergency: {businessConfig.phone.afterHours}</p>
                    <p className="text-stone-600">Fax: {businessConfig.phone.fax}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-stone-800 mb-3">Office Hours</h3>
                  <div className="space-y-1 text-stone-600">
                    <div className="flex justify-between">
                      <span>Monday:</span>
                      <span>8AM - 12PM for calls only</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday-Thursday:</span>
                      <span>{businessConfig.hours.tuesday.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span>{businessConfig.hours.friday.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Find Us</h3>
              {/* Google Maps embed */}
              <div className="aspect-video bg-stone-100 rounded-xl mb-4 overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Join the Horizon Palms family and discover personalized dental care that puts your smile first. 
            Your journey to optimal oral health starts here.
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
