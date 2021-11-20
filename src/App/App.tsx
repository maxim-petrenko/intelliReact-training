import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Tabs } from 'antd';
import { Posts } from '../pages/Posts';
import { CreatePost } from '../pages/CreatePost';

const { TabPane } = Tabs;

export function App() {
  return (
    <div className="App">
      <Tabs>
        <TabPane tab="See all posts" key="posts">
          <Posts />
        </TabPane>
        <TabPane tab="Create new post" key="Create post">
          <CreatePost />
        </TabPane>
      </Tabs>
    </div>
  );
}
