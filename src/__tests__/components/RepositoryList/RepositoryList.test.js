import { render, screen } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../../components/RepositoryList";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders the repository list correctly", () => {
      const repositories = [
        {
          id: "rails.rails",
          fullName: "rails/rails",
          description: "Ruby on Rails",
          language: "Ruby",
          stargazersCount: 53434,
          forksCount: 21291,
          reviewCount: 2,
          ratingAverage: 100,
          ownerAvatarUrl: "https://avatars.githubusercontent.com/u/4223?v=4",
        },
      ];

      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepositoryItem] = repositoryItems;

      expect(firstRepositoryItem).toBeDefined();
      expect(firstRepositoryItem).toHaveTextContent("rails/rails");
      expect(firstRepositoryItem).toHaveTextContent("Ruby on Rails");
      expect(firstRepositoryItem).toHaveTextContent("Ruby");
      expect(firstRepositoryItem).toHaveTextContent("21.3k");
    });
  });
});
