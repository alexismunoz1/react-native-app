import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutaciones";

export interface ReviewProps {
  ownerName: string;
  repositoryName: string;
  rating: string;
  text: string;
}

interface ApiResponse {
  createReview: {
    repositoryId: string;
  };
}

export const useCreateReview = () => {
  const [createReviewMutation] = useMutation<ApiResponse>(CREATE_REVIEW);

  const createReview = async (values: ReviewProps) => {
    try {
      const { ownerName, repositoryName, rating, text } = values;
      const ratingToNum = Number(rating);

      const { data } = await createReviewMutation({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: ratingToNum,
            text,
          },
        },
      });

      return { repositoryId: data.createReview.repositoryId };
    } catch (error) {
      console.error(error.message);
    }
  };

  return { createReview };
};
