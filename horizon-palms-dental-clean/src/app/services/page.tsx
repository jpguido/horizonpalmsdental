import { businessConfig } from '@/lib/config'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Services | ${businessConfig.name}`,
  description: `Comprehensive dental services in Lake Worth, FL including preventive care, cosmetic dentistry, restorative treatments, and emergency visits. Call ${businessConfig.phone.office}.`,
  keywords: 'dental services Lake Worth, preventive care, cosmetic dentistry, root canals, emergency dentist, family dentistry',
}

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-600 to-green-500 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Dental Services
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive dental care for the whole family, from routine cleanings to complex 
              restorative treatments, all delivered with personalized attention and clinical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List - Clean Content Only */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {businessConfig.services.map((service, index) => (
              <div key={service.id} id={service.id} className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{service.name.charAt(0)}</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-stone-800">
                    {service.name}
                  </h2>
                </div>
                
                <p className="text-lg text-stone-600 mb-8">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-stone-800 mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-stone-600">
                    {service.id === 'preventive-care' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Comprehensive oral examination and health assessment
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Professional cleaning to remove plaque and tartar
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Oral cancer screening and gum health evaluation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Digital X-rays when necessary for comprehensive diagnosis
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Personalized oral hygiene instruction and recommendations
                        </li>
                      </>
                    )}
                    {service.id === 'routine-cleanings' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Thorough removal of plaque and tartar buildup
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Professional polishing for a brighter smile
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Gum health assessment and periodontal screening
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Fluoride treatment for cavity prevention
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Customized home care recommendations
                        </li>
                      </>
                    )}
                    {service.id === 'cosmetic-dentistry' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Professional teeth whitening for a brighter smile
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Porcelain veneers for perfect tooth appearance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Dental bonding to repair chips and gaps
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Smile makeovers combining multiple treatments
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Invisalign clear aligners for straighter teeth
                        </li>
                      </>
                    )}
                    {service.id === 'restorative-dentistry' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Tooth-colored fillings for natural appearance
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Dental crowns to restore damaged teeth
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Bridges to replace missing teeth
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Dentures for complete smile restoration
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Dental implants for permanent tooth replacement
                        </li>
                      </>
                    )}
                    {service.id === 'emergency-visits' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Same-day appointments for urgent needs
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Pain relief and infection management
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Broken tooth repair and restoration
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Lost filling or crown replacement
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          24/7 emergency hotline support
                        </li>
                      </>
                    )}
                    {service.id === 'root-canals' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Comfortable treatment with local anesthesia
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Advanced rotary instrumentation for efficiency
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Digital X-rays for precise diagnosis
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Crown placement to protect restored tooth
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Follow-up care and monitoring
                        </li>
                      </>
                    )}
                    {service.id === 'extractions' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Gentle extraction techniques for comfort
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Local anesthesia for pain-free procedure
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Post-extraction care instructions
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Replacement options consultation
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Follow-up appointments for healing
                        </li>
                      </>
                    )}
                    {service.id === 'periodontal-therapy' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Deep cleaning below gum line
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Scaling and root planing procedures
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Antibiotic therapy when needed
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Maintenance program development
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-600 rounded-full mt-2"></span>
                          Regular monitoring and follow-up
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors text-center"
                  >
                    Schedule Appointment
                  </Link>
                  <a
                    href={`tel:${businessConfig.phone.office}`}
                    className="rounded-md bg-stone-100 px-6 py-3 text-sm font-semibold text-stone-800 shadow-sm hover:bg-stone-200 transition-colors text-center"
                  >
                    Call for Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Comfort Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Advanced Technology & Patient Comfort
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone-600 max-w-3xl mx-auto">
              We invest in the latest dental technology and comfort amenities to ensure your visit is 
              as efficient, comfortable, and effective as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">D</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Digital X-Rays</h3>
              <p className="text-stone-600 text-sm">
                Reduced radiation exposure with instant, high-quality images for accurate diagnosis.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Comfort Amenities</h3>
              <p className="text-stone-600 text-sm">
                Cozy blankets, noise-canceling headphones, and entertainment options for your comfort.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Sedation Options</h3>
              <p className="text-stone-600 text-sm">
                Multiple sedation choices to ensure your complete comfort during treatment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Intraoral Cameras</h3>
              <p className="text-stone-600 text-sm">
                See what we see with detailed images that help you understand your treatment options.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Rotary Instruments</h3>
              <p className="text-stone-600 text-sm">
                Faster, more comfortable procedures with precision-engineered dental instruments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">Paperless Office</h3>
              <p className="text-stone-600 text-sm">
                Digital records and forms for a more efficient and environmentally friendly experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience the Latest in Dental Care
          </h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Discover how modern technology and personalized care can transform your dental experience. 
            Schedule your appointment today and see the difference for yourself.
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
              Call: {businessConfig.phone.office}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
