interface Repository {
  node: {
    id: string;
    fullName: string;
    description: string;
    language: string;
    stargazersCount: number;
    forksCount: number;
    reviewCount: number;
    ratingAverage: number;
    ownerAvatarUrl: string;
  };
}

export interface ApiRepositoryResponse {
  repositories: {
    edges: Repository[];
  };
}

export interface ApiResponseMe {
  me: {
    id: string;
    username: string;
  };
}
