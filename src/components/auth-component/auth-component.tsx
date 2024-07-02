"use client";
import React from "react";

import AuthComponentView from "./auth-component-view";
import useAuthComponentController from "./auth-component-controller";

const AuthComponent: React.FC<{}> = () => {
  const {
    authConstant,
    selectedTabId,
    formData,
    handleOnSelectTab,
    onSubmit,
    handleOnChangeInputFields,
  } = useAuthComponentController();
  return (
    <AuthComponentView
      authTabsData={authConstant}
      formData={formData}
      selectedTabId={selectedTabId}
      onSubmit={onSubmit}
      handleOnSelectTab={handleOnSelectTab}
      handleOnChangeInputFields={handleOnChangeInputFields}
    />
  );
};

export default AuthComponent;
