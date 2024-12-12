import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { List } from 'antd';

const FeedPage = () => {
  const { id } = useParams();
  const [feed, setFeed] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get(`/api/rss/${id}`);
        setFeed(response.data);
      } catch (error) {
        console.error('fail to fetch the RSS source: ', error);
      }
    };

    fetchFeed();
  }, [id]);

  if (!feed) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{feed.title}</h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={feed.items}
        renderItem={(item) => (
          <List.Item key={item.link}>
            <List.Item.Meta
              title={<a href={item.link}>{item.title}</a>}
              description={item.pubDate}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default FeedPage;