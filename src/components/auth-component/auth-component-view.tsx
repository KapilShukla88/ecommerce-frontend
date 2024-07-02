import React from "react";

import UITabs from "src/widgets/ui-tabs";

const AuthComponentView: React.FC<iAuthComponentViewProps> = ({
  authTabsData,
  selectedTabId = 0,
  formData,
  onSubmit = (f: any) => f,
  handleOnSelectTab = (f: number) => f,
  handleOnChangeInputFields = (f: any) => f,
}) => {
  return (
    <div className="h-[calc(100vh-11.3rem)] p-5">
      <div className="max-w-[30%] m-auto p-4 shadow-md">
        <UITabs
          tabsData={authTabsData}
          selectedTabId={selectedTabId}
          onClickTab={handleOnSelectTab}
        />
        <div className="mt-4">
          <form action="#" className="flex flex-col gap-3" onSubmit={onSubmit}>
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
