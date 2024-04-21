import { Metadata } from "next";

export const RootPage: Metadata = {
  title: {
    default: 'IGIT MCA',
    template: '%s | MCA',
  },
  description: "This website is created, manage and maintained by MCA students of Indira Gandhi Institute of Technology, Sarang, Odisha",
  verification: { google: '-5w6Xsulau8TKL2mK0aHd6jtE6N4gBDAVwwOqwY3KYs' },
  openGraph: {
    title: {
      default: 'IGIT MCA',
      template: '%s | IGIT MCA',
    },
    description: 'This page is developed by MCA 40th in view of helping the juniors.This page will help to connect their seniors and juniors.It includes all the semester notes, questions and assignments. It lets you to contact your senior throught their instagram and linkedin profile.',
    url: 'https://igit-mca.web.app/',
    siteName: 'IGIT MCA',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.svg',
        width: 1500,
        height: 300,
        alt: 'IGIT MCA',
      },
    ],
  }
};

export const AboutPage: Metadata = {
  title: 'About Us',
  description: 'This website is created, manage and maintained by MCA students of Indira Gandhi Institute of Technology, Sarang, Odisha',
  openGraph: {
    title: {
      default: 'About Us',
      template: '%s | About Us',
    },
  }
};

export const ContactPage: Metadata = {
  title: 'Contact Us',
  description: 'Students can contact their seniors through this page. They can also connect with them through their social media profiles.',
  openGraph: {
    title: {
      default: 'Contact Us',
      template: '%s | Contact Us',
    },
  }
};

export const SignInPage: Metadata = {
  title: 'Sign In',
  description: 'Sign in to IGIT MCA',
  openGraph: {
    title: {
      default: 'Sign In',
      template: '%s | Sign'
    },
  }
};

export const SignUpPage: Metadata = {
  title: 'Sign Up',
  description: 'Sign up to IGIT MCA',
  openGraph: {
    title: {
      default: 'Sign Up',
      template: '%s | Sign'
    },
  }
};

export const MemoriesPage: Metadata = {
  title: 'Memories',
  description: 'Memories of MCA 40th batch',
  openGraph: {
    title: {
      default: 'Memories',
      template: '%s | Memories',
    },
  }
};

export const NotesPage: Metadata = {
  title: 'Notes',
  description: 'Notes of MCA 40th batch',
  openGraph: {
    title: {
      default: 'Notes',
      template: '%s | Notes',
    },
  }
};
export const BatchPage: Metadata = {
  title: 'Batch',
  description: 'Batch of MCA 40th',
  openGraph: {
    title: {
      default: 'Batch',
      template: '%s | Batch',
    },
  }
};
export const ProfilePage: Metadata = {
  title: 'Profile',
  description: 'Profile of MCA 40th batch',
  openGraph: {
    title: {
      default: 'Profile',
      template: '%s | Profile',
    },
  }
};