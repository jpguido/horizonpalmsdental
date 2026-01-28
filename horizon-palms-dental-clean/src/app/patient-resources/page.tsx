import { businessConfig, faqData } from '@/lib/config'
import { Metadata } from 'next'
import Link from 'next/link'
import { DocumentArrowDownIcon, PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: `Patient Resources | ${businessConfig.name}`,
  description: `Patient forms, insurance information, FAQ, and resources for ${businessConfig.name} in Lake Worth, FL. Download forms and learn about payment options.`,
  keywords: 'patient forms, dental insurance, FAQ, payment options, Lake Worth dentist resources',
}

export default function PatientResources() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Patient Resources
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Everything you need for your visit - forms, insurance information, 
              payment options, and answers to frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="#forms" className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <DocumentArrowDownIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Patient Forms</h3>
              <p className="text-stone-600 text-sm">Download and complete forms before your visit</p>
            </Link>
            
            <Link href="#insurance" className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <PhoneIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Insurance Info</h3>
              <p className="text-stone-600 text-sm">Learn about accepted plans and coverage</p>
            </Link>
            
            <Link href="#faq" className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <PhoneIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 mb-2">FAQ</h3>
              <p className="text-stone-600 text-sm">Answers to common questions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Forms Section */}
      <section id="forms" className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Patient Forms
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              Save time at your appointment by completing these forms in advance
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <DocumentArrowDownIcon className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-stone-800">New Patient Form</h3>
                  <p className="text-stone-600 text-sm">For first-time patients</p>
                </div>
              </div>
              <a
                href="/forms/new-patient-form.pdf"
                download
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                Download PDF
              </a>
            </div>
          </div>
          
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-800 mb-2">Form Instructions</h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Please complete all forms before your appointment</li>
              <li>• Bring completed forms and your insurance card</li>
              <li>• Arrive 15 minutes early to check in</li>
              <li>• Call us if you have any questions: {businessConfig.phone.office}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Insurance Information Section */}
      <section id="insurance" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Insurance & Payment Information
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              We accept most major dental insurance plans and offer flexible payment options
            </p>
          </div>
          
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
                <h3 className="font-semibold text-green-800 mb-2">Insurance Verification</h3>
                <p className="text-green-700 text-sm">
                  We offer complimentary insurance verification. Call us at {businessConfig.phone.office} and we'll check your benefits before your appointment.
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

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              Answers to common questions about our practice and services
            </p>
          </div>
          
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-stone-800 mb-6">{category.category}</h3>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-stone-200 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-stone-800 mb-2">{faq.question}</h4>
                      <p className="text-stone-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Download your forms, verify your insurance, and schedule your appointment today. 
            We're here to make your dental experience as smooth as possible.
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
