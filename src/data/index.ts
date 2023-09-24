import { iMenuItem } from '../interfaces/IMenu'

export const services = [
  {
    title: 'CybShield',
    category: 'Smart Contract Security',
    text: 'Enhances smart contract security with cutting-edge AI analysis and comprehensive auditing',
    icon: '/images/Home/Services/1.svg',
  },
  {
    title: 'CybGuard',
    category: 'DApp Security',
    text: 'DApp Security - Protects decentralized applications (DApps) against threats with penetration testing and code review.',
    icon: '/images/Home/Services/2.svg',
  },
  {
    title: 'CybSafe',
    category: 'Token Sale Security',
    text: 'Ensures secure token sale events with escrow services and multi-factor authentication',
    icon: '/images/Home/Services/3.svg',
  },
  {
    title: 'CybWatch',
    category: 'Blockchain Network Security',
    text: 'Safeguards blockchain networks with intrusion detection and robust encryption',
    icon: '/images/Home/Services/4.svg',
  },
  {
    title: 'CybTotal',
    category: 'Smart Contract Security',
    text: 'Provides comprehensive security solutions, audits and assessments to identify vulnerabilities and enhance overall cybersecurity resilience',
    icon: '/images/Home/Services/5.svg',
  },
  {
    title: 'CybTrace',
    category: 'CybTotal',
    text: 'Provides secure wallet solutions with cold storage and hardware wallet integration',
    icon: '/images/Home/Services/6.svg',
  },
]

export const socials = [
  {
    href: '/',
    icon: '/images/socials/discord.svg',
  },
  {
    href: '/',
    icon: '/images/socials/in.svg',
  },
  {
    href: '/',
    icon: '/images/socials/tg.svg',
  },
]

export const blogArticles = [
  {
    title: 'Security of information systems',
    thumbnail: '/images/Home/Blog/1.png',
  },
  {
    title: 'Protection of personal data',
    thumbnail: '/images/Home/Blog/2.png',
  },
  {
    title: 'Identification of potential and real threats',
    thumbnail: '/images/Home/Blog/3.png',
  },
]

export const approaches = [
  {
    title: 'Initiate',
    text: 'The client initiates the smart contract audit process by reaching out to us and expressing their interest.',
    icon: '/images/Home/Approaches/1.svg',
  },
  {
    title: 'Estimate',
    text: 'We provide the client with an estimate, outlining the scope, timeline, and cost of the smart contract audit.',
    icon: '/images/Home/Approaches/2.svg',
  },
  {
    title: 'Acsess',
    text: 'Our team conducts a comprehensive assessment of the smart contract, analysing the code and identifying potential vulnerabilities.',
    icon: '/images/Home/Approaches/3.svg',
  },
  {
    title: 'Generate',
    text: 'We generate a detailed audit report that encompasses our findings, recommendations, and proposed solutions.',
    icon: '/images/Home/Approaches/4.svg',
  },
  {
    title: 'Publish',
    text: 'Working closely with the client, we address and resolve the identified vulnerabilities by implementing necessary fixes and enhancements.',
    icon: '/images/Home/Approaches/5.svg',
  },
]

export const testimonials = [
  {
    author: {
      name: 'Adam Tøraasen',
      position: 'CEO & Co-Founder, Hyfa Ltd',
      companyLogo: '/images/Home/Testimonials/company-logo.svg',
      photo: '/images/Home/Testimonials/photo.png',
    },
    text: 'leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart ntracts.leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart contracts.',
  },
  {
    author: {
      name: 'Adam Tøraasen',
      position: 'CEO & Co-Founder, Hyfa Ltd',
      companyLogo: '/images/Home/Testimonials/company-logo.svg',
      photo: '/images/Home/Testimonials/photo.png',
    },
    text: 'leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart ntracts.leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart contracts.',
  },
  {
    author: {
      name: 'Adam Tøraasen',
      position: 'CEO & Co-Founder, Hyfa Ltd',
      companyLogo: '/images/Home/Testimonials/company-logo.svg',
      photo: '/images/Home/Testimonials/photo.png',
    },
    text: 'leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart ntracts.leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart contracts.',
  },
  {
    author: {
      name: 'Adam Tøraasen',
      position: 'CEO & Co-Founder, Hyfa Ltd',
      companyLogo: '/images/Home/Testimonials/company-logo.svg',
      photo: '/images/Home/Testimonials/photo.png',
    },
    text: 'leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart ntracts.leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart contracts.',
  },
  {
    author: {
      name: 'Adam Tøraasen',
      position: 'CEO & Co-Founder, Hyfa Ltd',
      companyLogo: '/images/Home/Testimonials/company-logo.svg',
      photo: '/images/Home/Testimonials/photo.png',
    },
    text: 'leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart ntracts.leveraging best-in-class AI technology to protect and monitor blockchain protocols and smart contracts.',
  },
]

export const menuItems: iMenuItem[] = [
  {
    title: 'Home page',
    type: 'link',
    href: '/',
  },
  {
    title: 'Our services',
    type: 'dropdown',
    options: [
      {
        title: 'Web3 Audit Suit',
        type: 'dropdown',
        options: [
          {
            title: 'Smart Contract Security: CybShield',
            type: 'link',
            href: '/cybshield',
          },
          {
            title: 'Smart Contract Security: CybShield',
            type: 'link',
            href: '/cybshield',
          },
          {
            title: 'Token Sale Security: CybSafe',
            type: 'link',
            href: '/cybsafe',
          },
        ],
      },
      {
        title: 'Blockchain Insights and Security Suit',
        type: 'dropdown',
        options: [
          {
            title: 'Blockchain Network Security: CybWatch',
            type: 'link',
            href: '/cybwatch',
          },
          {
            title: 'Secure Wallet Solutions: CybTrace',
            type: 'link',
            href: '/cybtrace',
          },
          {
            title: 'Privacy and Identity Protection: CybScan',
            type: 'link',
            href: '/cybscan',
          },
        ],
      },
      {
        title: 'CybNest: Cybirb’s Bug Bounty',
        type: 'dropdown',
        options: [
          {
            title: 'Get your project enlisted',
            type: 'link',
            href: '/get',
          },
        ],
      },
      {
        title: 'Optionals',
        type: 'dropdown',
        options: [
          {
            title: 'Onchain Monitoring',
            type: 'link',
            href: '/onchain-monitoring',
          },
          {
            title: 'Overall Assessment',
            type: 'link',
            href: '/overall-assessment',
          },
        ],
      },
    ],
  },
  {
    title: '24 x 7 Incident Report',
    type: 'link',
    href: '/contact',
  },
  {
    title: 'Company',
    type: 'dropdown',
    options: [
      {
        type: 'link',
        title: 'Company',
        href: '/company',
      },
      {
        type: 'link',
        title: 'about',
        href: '/about',
      },
      {
        type: 'link',
        title: 'testimonials',
        href: '/testimonials',
      },
      {
        type: 'link',
        title: 'join us!',
        href: '/join-us',
      },
      {
        type: 'link',
        title: 'legal/disclaimer',
        href: '/legal-disclaimer',
      },
      {
        type: 'link',
        title: 'media kit',
        href: '/media-kit',
      },
    ],
  },
]
