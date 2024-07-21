"use client";

import HttpService, { HttpMethod } from "@service/http-service";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useNewsLetterController = () => {
  const [email, setEmail] = useState<string>("");

  const onSendEmail = useCallback(
    async (e: any) => {
      e?.preventDefault();
      try {
        await HttpService(
          "",
          HttpMethod.POST,
          { email },
          false,
          {},
          "/newsletter"
        );
        toast.success("Email sent successfully.");
      } catch (error) {
        console.log("error =>>", error);
      }
    },
    [email]
  );

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email);
  }, []);

  return { email, onSendEmail, onChangeEmail };
};

export default useNewsLetterController;
