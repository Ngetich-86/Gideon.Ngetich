export interface CommunityPhoto {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const communityPhotos: CommunityPhoto[] = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dwsxs74ow/image/upload/v1748603702/vypmc6g9h4yz3xiakgcp.jpg",
    title: "CSK Info Session",
    description: "Volunteers working together to clean up local parks and streets"
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dwsxs74ow/image/upload/v1748603867/ljiwryvmupdbbnl1njpl.jpg",
    title: "KyU Tech Ladies Mentorship Program",
    description: "Mentors guiding young minds towards a brighter future"
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dwsxs74ow/image/upload/v1748603985/ikqjwzlojeua1h05iho2.jpg",
    title: "Annual CSK Inaugural Event",
    description: "Community members donating food for those in need"
  },
  // {
  //   id: 4,
  //   imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3",
  //   title: "Educational Workshops",
  //   description: "Sharing knowledge and skills with community members"
  // },
  // {
  //   id: 5,
  //   imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3",
  //   title: "Cultural Festival",
  //   description: "Celebrating diversity and cultural heritage"
  // }
];
