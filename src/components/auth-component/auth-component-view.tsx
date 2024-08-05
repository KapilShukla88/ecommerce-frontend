import Image from "next/image";
import React from "react";

import UITabs from "src/widgets/ui-tabs";

const AuthComponentView: React.FC<iAuthComponentViewProps> = ({
  authTabsData,
  selectedTabId = 0,
  formData,
  avatarPreview,
  onSubmit = (f: any) => f,
  handleOnSelectTab = (f: number) => f,
  handleOnChangeInputFields = (f: any) => f,
}) => {
  return (
    <div className="h-[calc(100vh-11.3rem)] p-5">
      <div className="md:max-w-[30%] m-auto p-4 shadow-md">
        <UITabs
          tabsData={authTabsData}
          selectedTabId={selectedTabId}
          onClickTab={handleOnSelectTab}
        />
        <div className="mt-4">
          <form
            action="#"
            className="flex flex-col gap-3"
            encType="multipart/form-data"
            onSubmit={onSubmit}
          >
            {selectedTabId === 2 && (
              <>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleOnChangeInputFields}
                  placeholder="First Name"
                  className="border-1 border-gray-300 rounded-md focus:outline-none active:outline-none"
                />
                <input
                  type="text"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleOnChangeInputFields}
                  placeholder="Last Name"
                  className="border-1 border-gray-300 rounded-md focus:outline-none active:outline-none"
                />
              </>
            )}
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleOnChangeInputFields}
              placeholder="Email"
              className="border-1 border-gray-300 rounded-md focus:outline-none active:outline-none"
            />
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleOnChangeInputFields}
              placeholder="Password"
              className="border-1 border-gray-300 rounded-md focus:outline-none active:outline-none"
            />
            {selectedTabId === 2 && (
              <div className="flex items-center gap-2">
                <Image
                  src={
                    (avatarPreview as string)
                      ? avatarPreview
                      : require("@assets/images/avatar.png")
                  }
                  width={200}
                  height={100}
                  alt="image preview"
                  className="rounded-full w-[3rem] h-[3rem]"
                />

                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  className="flex p-0"
                  placeholder="Avatar"
                  onChange={handleOnChangeInputFields}
                />
              </div>
            )}
            <input
              type="submit"
              className="bg-blue-500 p-2 cursor-pointer text-white rounded-md font-semibold tracking-wider"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthComponentView;
