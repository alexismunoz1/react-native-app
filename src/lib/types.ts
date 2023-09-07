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

export interface ApiResponseRepository {
  repositories: {
    edges: {
      node: Repository;
    }[];
  };
}

export interface ApiResponseMe {
  me: {
    id: string;
    username: string;
  };
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
