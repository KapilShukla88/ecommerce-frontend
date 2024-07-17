"use client";
import { useRouter } from "next/navigation";
import HttpService, { HttpMethod } from "@service/http-service";
import { useAppDispatch } from "@store/configure-store";
import { updateLoginResponse } from "@store/splices/entities/auth";
import { useCallback, useState } from "react";
import { localStorageServiceGet } from "@service/localStorageService";
import { toast } from "react-toastify";

const authConstant = [
  {
    id: 1,
    name: "Login",
  },
  {
    id: 2,
    name: "Sign Up",
  },
];

const useAuthComponentController = () => {
  const [selectedTabId, setSelectedTabId] = useState<number>(
    authConstant?.[0]?.id
  );
  const router = useRouter();

  const [formData, setFormData] = useState<formDataStateType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);
  const [isSigning, setIsSigning] = useState<false>(false);

  const dispatch = useAppDispatch();

  const handleOnSelectTab = useCallback((id: number) => {
    setSelectedTabId(id);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }, []);

  const handleRedirection = useCallback(() => {
    const isUserLoggedIn = localStorageServiceGet("user");
    if (isUserLoggedIn) {
      router.push("/");
    }
  }, [router]);

  const onLogin = useCallback(async () => {
    try {
      if (!isSigning) {
        const loginPayload = {
          email: formData.email,
          password: formData.password,
        };

        const response: any = await HttpService(
          "",
          HttpMethod.POST,
          loginPayload,
          false,
          { success: "Hi {first_name}! Welcome back!", default: true },
          "/auth/login"
        );
        if (response.success) {
          const options = {
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            avatar: response.data.avatar,
            refreshToken: response.data.refreshToken,
            accessToken: response.data.accessToken,
            isLoggedIn: true,
          };
          dispatch(updateLoginResponse(options));
          setTimeout(() => {
            handleRedirection();
          }, 500);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [
    dispatch,
    formData.email,
    formData.password,
    handleRedirection,
    isSigning,
  ]);

  const onSignUp = useCallback(async () => {
    try {
      if (!isSigningUp) {
        const body = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        };

        const response = await HttpService(
          "",
          HttpMethod.POST,
          body,
          false,
          { success: "Hi {user.name}! Welcome back!", default: true },
          "/auth/signup"
        );
        console.log("sign up response =>>", response);
      }
    } catch (error) {
      console.log(error);
    }
  }, [
    formData.email,
    formData.firstName,
    formData.lastName,
    formData.password,
    isSigningUp,
  ]);

  const onSubmit = useCallback(
    (e: any) => {
      e?.preventDefault();
      switch (selectedTabId) {
        case 1: {
          onLogin();
          break;
        }
        case 2: {
          onSignUp();
          break;
        }
        default: {
        }
      }
    },
    [onLogin, onSignUp, selectedTabId]
  );

  const handleOnChangeInputFields = useCallback(
    (e: any) => {
      const inputFieldName = e.target?.name;
      const inputFieldValue = e.target?.value;

      setFormData((prev: formDataStateType) => ({
        ...prev,
        [inputFieldName]: inputFieldValue,
      }));
    },
    [setFormData]
  );

  return {
    authConstant,
    selectedTabId,
    formData,
    handleOnSelectTab,
    onSubmit,
    handleOnChangeInputFields,
  };
};

export default useAuthComponentController;
