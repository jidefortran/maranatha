export const coreServices = [
  {
    slug: 'mental-health', title: 'Mental Health Support', category: 'Wellbeing & Disability Support',
    eyebrow: 'Wellbeing support',
    intro: 'Practical, person-centred support for people navigating mental health and psychosocial challenges, with a focus on confidence, routine, connection and everyday wellbeing.',
    image: '/images/woman.jpg',
    bullets: ['Support with routines, appointments and everyday goals', 'Building confidence, independence and community connection', 'Practical strategies that fit the person, not a one-size-fits-all program', 'Working alongside families, carers and other supports where appropriate'],
    note: 'We can explain what support may be appropriate for your circumstances and connect you with specialist services where a clinical or professional service is required.'
  },
  {
    slug: 'supported-independent-living', title: 'Supported Independent Living', category: 'Living & Independence',
    eyebrow: 'A home that feels like yours',
    intro: 'Support to live as independently as possible in a home environment that respects your choices, routines, relationships and goals.',
    image: '/images/services-details/service-details1.jpg',
    bullets: ['Developing everyday living skills and routines', 'Support with household responsibilities and organisation', 'Building confidence with decisions and independence', 'Encouraging social connection and community participation'],
    note: 'SIL arrangements are individual. We can talk through your goals, support needs and current circumstances to help you understand the options available.'
  },
  {
    slug: 'respite-accommodation', title: 'Respite & Short Stay Accommodation', category: 'Living & Independence',
    eyebrow: 'A supported change of pace',
    intro: 'Short-term accommodation and support can provide a safe, welcoming change of environment while maintaining routines and individual support needs.',
    image: '/images/services-details/service-details5.jpg',
    bullets: ['Short stays and planned respite', 'A supportive environment away from your usual routine', 'Support with everyday activities during your stay', 'A chance for carers and families to take a planned break'],
    note: 'Availability, eligibility and the type of support provided depend on individual circumstances. Contact us to discuss what you need.'
  },
  {
    slug: 'community-participation', title: 'Community Participation', category: 'Community & Connection',
    eyebrow: 'More of what matters to you',
    intro: 'Support to get out, take part and build connections through activities and experiences that are meaningful to you.',
    image: '/images/services-details/service-detail-4.jpg',
    bullets: ['Community access and everyday outings', 'Recreation, hobbies and interest-based activities', 'One-to-one or group participation', 'Building confidence, social skills and community connections'],
    note: 'Your interests and goals shape the support. We focus on meaningful participation rather than simply filling time.'
  },
  {
    slug: 'psycho-social-recovery', title: 'Psychosocial Recovery', category: 'Wellbeing & Disability Support',
    eyebrow: 'Recovery at your pace',
    intro: 'Practical support that helps you identify strengths, work towards goals, build confidence and strengthen your connection with everyday life.',
    image: '/images/services-details/serice-details12.jpg',
    bullets: ['Goal setting and practical recovery planning', 'Building routines, confidence and resilience', 'Developing everyday living and social skills', 'Connecting with community and appropriate supports'],
    note: 'Recovery looks different for everyone. We work with you at a pace that respects your preferences, circumstances and goals.'
  },
  {
    slug: 'support-daily-task', title: 'Support with Daily Tasks', category: 'Living & Independence',
    eyebrow: 'Practical help for everyday life',
    intro: 'Support with everyday tasks and routines so you can manage daily life with greater confidence, choice and independence.',
    image: '/images/mainbanner.jpg',
    bullets: ['Support with household routines and tasks', 'Assistance with everyday activities', 'Building skills for greater independence', 'Support to maintain routines, appointments and commitments'],
    note: 'The level and type of assistance is shaped around your individual needs and goals.'
  },
  {
    slug: 'drug-and-alcohol-support', title: 'Drug & Alcohol Support', category: 'Community & Wellbeing Services',
    eyebrow: 'Support without judgement',
    intro: 'Compassionate, practical support for people affected by alcohol or other drug use, with an emphasis on safety, dignity, choice and achievable goals.',
    image: '/images/services-details/drug-alcohol-support.jpg',
    bullets: ['One-to-one support around recovery goals', 'Practical strategies for managing triggers and routines', 'Support to reconnect with family, community and everyday life', 'Help navigating and connecting with specialist health and treatment services'],
    note: 'Maranatha support does not replace medical, detoxification or emergency treatment. Where specialist care is needed, we can help you identify appropriate services.'
  },
  {
    slug: 'counselling', title: 'Counselling', category: 'Community & Wellbeing Services',
    eyebrow: 'A safe space to talk',
    intro: 'Supportive conversations can help you make sense of difficult experiences, explore goals and develop practical ways to move forward.',
    image: '/images/woman-smile.png',
    bullets: ['A confidential and respectful space to talk', 'Support through life changes and difficult periods', 'Exploring coping strategies and personal goals', 'Referral or connection to specialist clinical services where appropriate'],
    note: 'The type of counselling or therapeutic service available depends on the practitioner and your circumstances. We will clarify this with you before support begins.'
  },
  {
    slug: 'homelessness-support', title: 'Homelessness Support', category: 'Community & Wellbeing Services',
    eyebrow: 'Finding a pathway forward',
    intro: 'Practical support for people experiencing homelessness or housing instability, with a focus on connection, stability and achievable next steps.',
    image: '/images/services-details/homelessness-support.jpg',
    bullets: ['Help identifying appropriate housing and community services', 'Support navigating applications and appointments', 'Connection with welfare, health and housing organisations', 'Practical support aimed at maintaining stability and independence'],
    note: 'Housing availability and emergency accommodation are subject to external services and availability. If you are in immediate danger, contact emergency services.'
  },
  {
    slug: 'domestic-violence-support', title: 'Domestic Violence Support', category: 'Community & Wellbeing Services',
    eyebrow: 'Safety, dignity and choice',
    intro: 'Respectful support for people affected by domestic or family violence, focused on listening, practical next steps and connection with specialist services.',
    image: '/images/services-details/domestic-violence-support.jpg',
    bullets: ['A confidential, non-judgemental first conversation', 'Support identifying practical next steps', 'Connection with specialist domestic and family violence services', 'Support navigating community, housing and wellbeing services'],
    note: 'We do not present ourselves as a replacement for police, emergency services, legal advice or specialist crisis services. If you are in immediate danger, call 000.'
  },
  {
    slug: 'youth-services', title: 'Youth Services', category: 'Community & Wellbeing Services',
    eyebrow: 'Support for the next step',
    intro: 'Practical, strengths-based support for young people as they build confidence, connection, life skills and pathways towards their goals.',
    image: '/images/services-details/service-detail-3.jpg',
    bullets: ['One-to-one mentoring and practical life-skills support', 'Education, training and employment pathway support', 'Social connection and positive activities', 'Support building independence and navigating services'],
    note: 'Youth support is tailored to age, circumstances and goals, with appropriate safeguarding and involvement of parents, carers or other supports where required.'
  }
];

export const serviceBySlug = Object.fromEntries(coreServices.map((service) => [service.slug, service]));
