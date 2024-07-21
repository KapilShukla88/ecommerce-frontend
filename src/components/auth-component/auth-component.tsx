"use client";
import React from "react";

import AuthComponentView from "./auth-component-view";
import useAuthComponentController from "./auth-component-controller";

const AuthComponent: React.FC<{}> = () => {
  const {
    authConstant,
    selectedTabId,
    formData,
    avatarPreview,
    handleOnSelectTab,
    onSubmit,
    handleOnChangeInputFields,
  } = useAuthComponentController();
  return (
    <AuthComponentView
      authTabsData={authConstant}
      formData={formData}
      selectedTabId={selectedTabId}
      avatarPreview={avatarPreview}
      onSubmit={onSubmit}
      handleOnSelectTab={handleOnSelectTab}
      handleOnChangeInputFields={handleOnChangeInputFields}
    />
  );
};

export default AuthComponent;
