export interface Repository {
  edges: Edge[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface Edge {
  cursor: string;
  node: Node;
}

export interface Node {
  createdAt: Date;
  description: string;
  forksCount: number;
  fullName: string;
  id: string;
  language: string;
  name: string;
  ownerAvatarUrl: string;
  ownerName: string;
  ratingAverage: number;
  reviewCount: number;
  stargazersCount: number;
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}
