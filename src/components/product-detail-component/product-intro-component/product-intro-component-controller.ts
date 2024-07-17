import { useAppDispatch } from "@store/configure-store";
import { apiToCallAddToCart } from "@store/splices/entities/cart";
import { callToSubmitReview } from "@store/splices/entities/products";
import useToGetUserIsAuthenticated from "@utils/user-authenticated-status";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { DYNAMICS_CONSTANTS } from "src/resources/constants";

const useProductIntroComponentController = (stock: number) => {
  const [noOfProduct, setNoOfProduct] = useState<number>(1);
  const [starPosition, setStarPosition] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isReviewModalOpen, setReviewModalState] = useState<boolean>(false);

  const isLoggedIn = useToGetUserIsAuthenticated();

  const dispatch = useAppDispatch();

  const handleOnIncreaseProducts = useCallback(() => {
    if (noOfProduct === stock) {
      return;
    }
    setNoOfProduct((prev: number) => prev + 1);
  }, [noOfProduct, stock]);

  const handleOnDecreaseProducts = useCallback(() => {
    if (noOfProduct === 1) {
      return;
    }

    setNoOfProduct((prev: number) => prev - 1);
  }, [noOfProduct]);

  const handleOnHoverStar = useCallback((starPosition: number) => {
    setStarPosition(starPosition);
  }, []);

  const handleOnChangeComment = useCallback((commentText: string) => {
    setComment(commentText);
  }, []);

  const toggleReviewModal = useCallback(() => {
    setComment("");
    setStarPosition(0);
    setReviewModalState((prev) => !prev);
  }, []);

  const onSubmitReview = useCallback(
    (productId: string) => {
      if (!productId || !comment) {
        console.log("please enter comment."); //TODO: put toast here
        return;
      }
      const reviewPayload = {
        rating: starPosition,
        comment,
      };
      dispatch(callToSubmitReview(reviewPayload, productId));
      setReviewModalState(false);
    },
    [comment, starPosition]
  );

  const handleAddToCart = useCallback(
    (productId: string) => {
      dispatch(
        apiToCallAddToCart({ productId: productId, quantity: noOfProduct })
      );
    },
    [noOfProduct]
  );

  const handleToastNotification = useCallback((type: string) => {
    switch (type) {
      case "review": {
        toast.info(DYNAMICS_CONSTANTS.SUBMIT_REVIEW_TO_LOGIN_TXT);
        break;
      }
      case "cart": {
        toast.info(DYNAMICS_CONSTANTS.ADD_TO_CART_LOGIN_TXT);
        break;
      }
    }
  }, []);

  return {
    noOfProduct,
    isLoggedIn,
    starPosition,
    comment,
    isReviewModalOpen,
    handleOnChangeComment,
    handleOnIncreaseProducts,
    handleOnDecreaseProducts,
    handleOnHoverStar,
    toggleReviewModal,
    onSubmitReview,
    handleAddToCart,
    handleToastNotification,
  };
};

export default useProductIntroComponentController;
