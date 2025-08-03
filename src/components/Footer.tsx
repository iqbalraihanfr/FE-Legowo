
'use client';
import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white/80 text-[#292f36]/200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Image
                  src="/images/logonavBaru.png"
                  alt="Logo Legowo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Legowo</span>
            </div>
            <p className="text-[#292f36]/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {t.footer.description}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-[#ff5b35]/80 hover:text-[#ff5b35] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#ff5b35]/80 hover:text-[#ff5b35] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#ff5b35]/80 hover:text-[#ff5b35] transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#292f36]/60 hover:text-[#ff5b35] transition-colors duration-200">{t.nav.home}</Link></li>
              <li><Link href="/products" className="text-[#292f36]/60 hover:text-[#ff5b35] transition-colors duration-200">{t.nav.products}</Link></li>
              <li><Link href="/about" className="text-[#292f36]/60 hover:text-[#ff5b35] transition-colors duration-200">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="text-[#292f36]/60 hover:text-[#ff5b35] transition-colors duration-200">{t.nav.contact}</Link></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin size={16} className="text-[#ff5b35]/80" />
                <span className="text-[#292f36]/60 text-sm">Sidoarjo, Indonesia</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-[#ff5b35]/80" />
                <span className="text-[#292f36]/60 text-sm">+62 812-1767-4477</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={16} className="text-[#ff5b35]/80" />
                <span className="text-[#292f36]/60 text-sm">rusianaa965@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#292f36]/20 mt-12 pt-8 text-center">
          <p className="text-[#292f36]/60 text-sm">
            © 2025 Zyfini Edukasi. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
