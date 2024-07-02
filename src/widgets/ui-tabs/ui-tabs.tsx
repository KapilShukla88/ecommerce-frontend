import React from "react";
import UITabsView from "./ui-tabs-view";

type tTabsDataType = {
  id: number | string;
  name: string;
};

interface iUITabsProps {
  tabsData: tTabsDataType[];
  selectedTabId: number | string;
  onClickTab(_id: string | number): void;
}

const UITabs: React.FC<iUITabsProps> = ({
  tabsData = [],
  selectedTabId = 0,
  onClickTab = (f: string | number) => f,
}) => {
  return (
    <UITabsView
      tabsData={tabsData}
      selectedTabId={selectedTabId}
      onClickTab={onClickTab}
    />
  );
};

export default UITabs;
