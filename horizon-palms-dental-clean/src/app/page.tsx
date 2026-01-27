import { businessConfig, drNguyenBio } from '@/lib/config'
import { PhoneIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${businessConfig.name} | Family Dentistry in Lake Worth, FL`,
  description: `Experience personalized family dental care in Lake Worth, FL. Dr. Linda Nguyen provides comprehensive dental services including preventive care, cosmetic dentistry, and restorative treatments. Call ${businessConfig.phone.office}.`,
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-100 via-stone-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-6xl">
              Your Family's Smile Destination in{' '}
              <span className="text-green-700">Lake Worth</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Experience personalized dental care with Dr. Linda Nguyen and our warm, welcoming team. 
              We're here to keep your family smiling bright with comprehensive dental care.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${businessConfig.phone.office}`}
                className="text-sm font-semibold leading-6 text-green-700 hover:text-green-800 transition-colors"
              >
                Call {businessConfig.phone.office} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Tropical decorative elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-20 text-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
          </svg>
        </div>
      </section>

      {/* About Dr. Nguyen Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-stone-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
                Meet Dr. Linda Nguyen
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Your West Palm Beach Local Dentist
              </p>
              <div className="mt-6 space-y-4 text-stone-600">
                <p>{drNguyenBio.bio}</p>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-2">Education & Training</h3>
                  <ul className="space-y-1">
                    {drNguyenBio.education.map((edu, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        {edu}
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
                  href="/about"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  Learn More About Dr. Nguyen
                </Link>
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-600 shadow-sm border border-green-600 hover:bg-green-50 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Dr. Nguyen headshot */}
              <div className="bg-gradient-to-br from-green-100 to-stone-100 rounded-2xl p-8 flex flex-col items-center justify-center">
                <ImageWithFallback 
                  src="/images/dr-nguyen-headshot.jpg" 
                  alt="Dr. Linda Nguyen, DDS"
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

      {/* Services Preview Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Complete Family Dental Care
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              From preventive care to complex restorative treatments, we offer a full spectrum of 
              dental services designed to meet the unique needs of every family member.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {businessConfig.services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{service.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{service.name}</h3>
                <p className="text-stone-600 text-sm">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-md bg-green-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Info Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Accepted Insurance Plans</h3>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-stone-600 mb-4">
                  We accept most major dental insurance plans and will help you maximize your benefits. 
                  Our team will verify your coverage and explain your options before treatment.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {businessConfig.insurancePlans.map((plan, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-stone-700">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Insurance Verification</h4>
                <p className="text-green-700 text-sm">
                  We offer complimentary insurance verification. Call us at {businessConfig.phone.office} and 
                  we'll check your benefits before your appointment.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Payment Options</h3>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-stone-600 mb-4">
                  No insurance? No problem! We offer several payment options to fit your budget.
                </p>
                <div className="space-y-3">
                  {businessConfig.paymentOptions.map((option, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                      <span className="text-stone-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Image Test Section */}
      <section className="py-12 bg-stone-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-stone-800 mb-4">
            Having Trouble with Images?
          </h2>
          <p className="text-stone-600 mb-6">
            Test if images are loading correctly on our website
          </p>
          <a
            href="/test-images.html"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Test Image Loading
          </a>
        </div>
      </section>

      {/* CTA Section - Sage Green Background */}
      <section className="py-16 bg-green-600">
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
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors"
            >
              View Our Services
            </Link>
            <a
              href={`tel:${businessConfig.phone.office}`}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
