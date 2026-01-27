'use client'

import Link from 'next/link'
import ImageWithFallback from '@/components/ImageWithFallback'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { businessConfig } from '@/lib/config'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Patient Resources', href: '/patient-resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{businessConfig.name}</span>
            {/* Logo - rectangular format to avoid cropping */}
            <ImageWithFallback 
              src="/images/logo.jpg" 
              alt="Horizon Palms Family Dentistry Logo"
              width={128}
              height={64}
              className="w-auto max-w-32 object-contain"
              priority={true}
            />
          </Link>
          <div className="ml-4 flex flex-col justify-center">
            <Link href="/" className="text-xl font-bold text-stone-800">
              {businessConfig.name}
            </Link>
            <p className="text-sm text-stone-600">{businessConfig.tagline}</p>
          </div>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-stone-800 hover:text-green-600 transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href={`tel:${businessConfig.phone.office}`}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            {businessConfig.phone.office}
          </a>
        </div>
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{businessConfig.name}</span>
              <ImageWithFallback 
                src="/images/logo.jpg" 
                alt="Horizon Palms Family Dentistry Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
                priority={true}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-stone-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-stone-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-800 hover:bg-stone-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href={`tel:${businessConfig.phone.office}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Office: {businessConfig.phone.office}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
