import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import "slick-carousel/slick/slick.css";
import "react-tabs/style/react-tabs.css";
import "./HomeTab.css";

const HomeTab = () => {
  return (
    <Tabs>
      <TabList className="tabs-menu">
        <Tab className="tabs-item">All</Tab>
        <Tab className="tabs-item">Football</Tab>
        <Tab className="tabs-item">Music</Tab>
        <Tab className="tabs-item">Mixes</Tab>
      </TabList>

      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  );
};

export default HomeTab;
