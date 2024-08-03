import { useAppSelector } from "@store/configure-store";
import { getUserDetails } from "@store/splices/entities/auth";

const useNavMobileComponentController = () => {
  const userDetails = useAppSelector(getUserDetails);

  return { userDetails };
};

export default useNavMobileComponentController;
