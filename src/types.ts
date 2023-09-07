export interface Repository {
  id: string;
  fullName: string;
  description: string;
  language: string;
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
  ownerAvatarUrl: string;
  url: string;
}

export interface Review {
  id: string;
  text: string;
  rating: number;
  createdAt: string;
  user: {
    id: string;
    username: string;
  };
}
