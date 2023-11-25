import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './tab.css';
import TabItem from './TabItem';
import TabContent from './TabContent';
import Spinner from '../spinner';

const Tab = () => {
  const url = 'https://course-api.com/react-tabs-project';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
      setActiveTab(response.data[0].company);
    } catch (error) {
      console.log('error in fetching the data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tabItems =
    data && data.length > 0 ? data.map((item) => item.company) : [];
  if (loading && !tabItems.length > 0) {
    return <Spinner />;
  }
  const tabinfo =
    data && data.length > 0
      ? data.find((item) => item.company === activeTab)
      : [];
  return (
    <section className='tab-container'>
      <TabItem
        selectedItem={activeTab}
        handleTabClick={setActiveTab}
        tabs={tabItems}
      />
      <TabContent tabInfo={tabinfo} />
    </section>
  );
};

export default Tab;
