import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    ourTeam: 'Our Team',
    contact: 'Contact',
    hero: {
      title: 'Committed to Justice,\nDedicated to You',
      subtitle: 'With over 25 years of combined experience, our team of expert attorneys is here to protect your rights and fight for your interests.',
      cta: 'Schedule a Consultation'
    },
    team: {
      title: 'Our Legal Team',
      subtitle: 'Meet our experienced attorneys who are dedicated to providing exceptional legal services and protecting your interests.',
      specialties: 'Specialties'
    },
    contact: {
      title: 'Contact Us',
      location: 'Office Location',
      phone: 'Phone',
      email: 'Email',
      hours: 'Office Hours',
      workDays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      saturday: 'Saturday: By Appointment',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      rights: '© 2024 Justice & Associates. All rights reserved.',
      disclaimer: 'Attorney Advertising. Prior results do not guarantee a similar outcome.'
    }
  },
  ar: {
    home: 'الرئيسية',
    ourTeam: 'فريقنا',
    contact: 'اتصل بنا',
    hero: {
      title: 'ملتزمون بالعدالة،\nمخلصون لك',
      subtitle: 'مع أكثر من 25 عاماً من الخبرة المشتركة، فريقنا من المحامين الخبراء هنا لحماية حقوقك والدفاع عن مصالحك.',
      cta: 'احجز استشارة'
    },
    team: {
      title: 'فريقنا القانوني',
      subtitle: 'تعرف على محامينا ذوي الخبرة المتفانين في تقديم خدمات قانونية استثنائية وحماية مصالحك.',
      specialties: 'التخصصات'
    },
    contact: {
      title: 'اتصل بنا',
      location: 'موقع المكتب',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      workDays: 'الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً',
      saturday: 'السبت: بموعد مسبق',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال الرسالة'
      }
    },
    footer: {
      rights: '© 2024 العدل ومشاركوه. جميع الحقوق محفوظة.',
      disclaimer: 'إعلان محاماة. النتائج السابقة لا تضمن نتيجة مماثلة.'
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}