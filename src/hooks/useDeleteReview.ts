import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutaciones";

export const useDeleteReview = () => {
  const [deleteReviewMutation] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id: string) => {
    await deleteReviewMutation({ variables: { deleteReviewId: id } });
  };

  return { deleteReview };
};
