// All page copy + image paths live here. Edit this file to change content.
const img = (n) => `/images/${n}`

export const nav = {
  links: ['Work', 'Expertise', 'About', 'Insights', 'Careers', 'Contact'],
  cta: "Let's talk",
}

export const hero = {
  image: img('hero-production.jpg'),
  eyebrow: 'CREATIVE × TECHNOLOGY × DATA',
  lines: ['We create', 'what people'],
  italic: 'Remember.',
  copy: 'Digital experiences, campaigns and technology that turn brands into conversations.',
  primary: 'View our work',
  secondary: 'Showreel',
  tags: ['CAMPAIGNS', 'CONTENT', 'TECHNOLOGY', 'DATA'],
}

export const who = {
  eyebrow: 'WHO WE ARE',
  copy: 'Everymedia is a creative and technology company that helps brands grow through powerful ideas, compelling content and meaningful digital experiences.',
  cta: 'More about us',
}

export const stats = [
  { value: '2010', label: 'Founded' },
  { value: '40+', label: 'Industry Awards' },
  { value: '6+', label: 'Core Capability Areas' },
  { value: 'Global', label: 'Brands & Partners' },
]

const expImg = img('expertise-creative.jpg')
export const expertise = {
  eyebrow: 'OUR EXPERTISE',
  link: 'Explore all services',
  services: [
    { name: 'Creative & Design', blurb: 'Ideas, identity and visual storytelling that connect.', title: ['Visual stories', 'for a louder world.'], copy: 'From brand identity to campaign design, we create visual experiences that make people feel, share and remember.', image: expImg },
    { name: 'Digital & Social', blurb: 'Campaigns and communities that drive real engagement.', title: ['Communities that', 'move with you.'], copy: 'Campaigns and communities that drive real engagement, from first scroll to lasting loyalty.', image: expImg },
    { name: 'UI / UX', blurb: 'Digital products and experiences people love to use.', title: ['Interfaces people', 'love to use.'], copy: 'Digital products and experiences designed around real behaviour and built to feel effortless.', image: expImg },
    { name: 'Technology', blurb: 'Scalable solutions for a digital-first world.', title: ['Built to scale', 'from day one.'], copy: 'Scalable solutions for a digital-first world, engineered with care and delivered with speed.', image: expImg },
    { name: 'Video & Content', blurb: 'Films, branded content and high-impact storytelling.', title: ['Stories worth', 'pressing play on.'], copy: 'Films, branded content and high-impact storytelling crafted for every screen.', image: expImg },
    { name: 'Data Science', blurb: 'Insights that turn data into opportunities.', title: ['Insight that', 'becomes action.'], copy: 'Insights that turn data into opportunities, so every decision is sharper.', image: expImg },
  ],
}

export const featured = {
  eyebrow: 'FEATURED WORK',
  link: 'View all case studies',
  main: { tag: 'ENTERTAINMENT', title: 'Sidharth Malhotra × Yodha', copy: 'A high-impact digital campaign for the film Yodha, creating massive online buzz and audience engagement.', image: img('case-yodha.jpg') },
  sports: { tag: 'SPORTS', title: 'Indian Street Premier League', copy: 'From identity to community — building a new-age cricket league for the streets.', image: img('case-sports.jpg') },
  small: [
    { tag: 'PUBLIC INITIATIVE', title: 'Indian Police Force', image: img('case-public.jpg') },
    { tag: 'FOUNDATION', title: 'Ek Saath Foundation', image: img('case-foundation.jpg') },
  ],
}

export const process = {
  eyebrow: 'OUR PROCESS',
  title: ['FROM IDEA', 'TO IMPACT.'],
  copy: 'A simple, powerful process to turn ideas into meaningful results.',
  cta: 'See how we work',
  image: img('process-studio.jpg'),
  steps: [
    { name: 'DEFINE', blurb: 'Research · Strategy · Discovery' },
    { name: 'DESIGN', blurb: 'Creative · Experience · Campaign' },
    { name: 'DEPLOY', blurb: 'Technology · Launch · Optimization' },
  ],
}

export const people = {
  image: img('team-culture.jpg'),
  eyebrow: 'OUR PEOPLE',
  title: 'A team of data scientists, tech architects and creative minds.',
  copy: 'We are strategists, designers, filmmakers, engineers and data experts — united by a shared belief in the power of ideas to create change.',
  cta: 'Join our team',
  note: ['A culture of curiosity,', 'collaboration and creativity.'],
  // avatar crops taken from the team photo (background-position)
  avatars: ['8% 40%', '40% 30%', '58% 35%', '78% 45%'],
}

export const cta = {
  image: img('cta-prism.jpg'),
  eyebrow: "LET'S TALK",
  title: ['Have something', 'worth talking about?'],
  copy: "Let's create, build and grow something extraordinary together.",
  button: 'Start a conversation',
}

export const social = [
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/everymedia' },
  { label: 'YouTube', href: 'https://www.youtube.com/@everymediatechnologiesoffi2545' },
]

export const footer = {
  descriptor: 'Creative. Technology. Data.',
  links: ['Work', 'Expertise', 'About', 'Insights', 'Careers', 'Contact'],
  copyright: '© 2024 Everymedia Technologies. All rights reserved.',
  legal: ['Privacy Policy', 'Terms', 'Sitemap'],
}
