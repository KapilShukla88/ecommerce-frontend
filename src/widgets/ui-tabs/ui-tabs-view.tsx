"use client";
import React from "react";

type tTabsDataType = {
  id: number | string;
  name: string;
};

interface iUITabsViewProps {
  tabsData: tTabsDataType[];
  selectedTabId: number | string;
  onClickTab(_id: number | string): void;
}

const UITabsView: React.FC<iUITabsViewProps> = ({
  tabsData = [],
  selectedTabId = 0,
  onClickTab = (f: string | number) => f,
}) => {
  return (
    <div className="flex gap-3 items-center">
      {tabsData?.map((item: any) => {
        return (
          <div
            key={item?.id}
            className={`w-full rounded-full px-5 py-2 cursor-pointer ${
              selectedTabId === item?.id ? "bg-[#FF914D]" : "transparent"
            }`}
            onClick={() => onClickTab(item?.id)}
          >
            <p
              className={`text-xl font-semibold text-center ${
                selectedTabId === item?.id ? "text-white" : "text-black"
              }`}
            >
              {item?.name || ""}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UITabsView;
