export interface Certification {
  id: number;
  name: string;
  issuer?: string;
  group: 'Cloud & AI' | 'Linux & Cloud Native' | 'Development & Community';
  icon?: string;
  link?: string;
}

const CertData: Certification[] = [
  // Cloud & AI
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner (CLF-C01)',
    issuer: 'Amazon Web Services',
    group: 'Cloud & AI',
    icon: 'https://images.credly.com/size/160x160/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    link: 'https://www.credly.com/earner/earned/badge/42e8fa91-19a0-47aa-89db-3f8170f3e8a6'
  },
  {
    id: 2,
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    group: 'Cloud & AI',
    icon: 'https://images.credly.com/size/160x160/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
    link: 'https://www.credly.com/earner/earned/badge/2ac5c407-ddf7-4e46-936f-c16f2587cdf7'
  },
  {
    id: 3,
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    group: 'Cloud & AI'
    // No verification link on file yet — add when available.
  },
  {
    id: 4,
    name: 'Azure Responsible AI Workshop',
    issuer: 'Microsoft',
    group: 'Cloud & AI',
    icon: 'https://images.credly.com/size/680x680/images/b7b97e42-78ed-4808-af5f-9ba11c8e8dbd/image.png',
    link: 'https://www.credly.com/earner/earned/badge/07d4c603-5418-457f-9e0b-91cc3c01ca4e'
  },

  // Linux & Cloud Native
  {
    id: 5,
    name: 'Introduction to Linux (LFS101)',
    issuer: 'The Linux Foundation',
    group: 'Linux & Cloud Native'
  },
  {
    id: 6,
    name: 'Introduction to Kubernetes (LFS158)',
    issuer: 'The Linux Foundation',
    group: 'Linux & Cloud Native'
  },
  {
    id: 7,
    name: 'Kubernetes and Cloud Native Essentials (LFS250)',
    issuer: 'The Linux Foundation',
    group: 'Linux & Cloud Native'
  },

  // Development & Community
  {
    id: 8,
    name: 'Foundational C# with Microsoft',
    // Issuer/verification link not yet confirmed — add once available.
    group: 'Development & Community'
  },
  {
    id: 9,
    name: 'Certified Software Developer',
    // Issuer/verification link not yet confirmed — add once available.
    group: 'Development & Community'
  },
  {
    id: 10,
    name: 'Microsoft Learn Student Ambassador — Student Trainer',
    issuer: 'Microsoft',
    group: 'Development & Community',
    icon: 'https://images.credly.com/size/680x680/images/8b3bd517-00c2-4830-9b07-690079aae31f/image.png',
    link: 'https://www.credly.com/badges/941b3ffe-45b1-468f-b99e-80499588c7a6'
  },
  {
    id: 11,
    name: 'Microsoft Learn Student Ambassador — Mentor',
    issuer: 'Microsoft',
    group: 'Development & Community',
    icon: 'https://images.credly.com/size/680x680/images/4dc81c61-b399-45ab-97d6-f919f76ce8be/image.png',
    link: 'https://www.credly.com/earner/earned/badge/e1234547-a154-4f7f-9d5a-ceaa5c81182d'
  }
];

export default CertData;
