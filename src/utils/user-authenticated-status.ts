import { useAppSelector } from "@store/configure-store";
import { getUserIsLoggedInStatus } from "@store/splices/entities/auth";

const useToGetUserIsAuthenticated = () => {
  const isUserLoggedIn = useAppSelector(getUserIsLoggedInStatus);

  return isUserLoggedIn;
};

export default useToGetUserIsAuthenticated;
