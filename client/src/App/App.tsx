import { useState, createContext } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Divider, Tabs } from 'antd';
import { PostsList } from '../pages/PostsList';
import { CreatePost } from '../pages/CreatePost';
import { postsStub } from './stubs';
import { Header } from '../components/structural/Header';


const {TabPane} = Tabs;

export const PostsContext = createContext<any>(null)

export const App = () => {
    const [posts, setPosts] = useState(postsStub);

    return (<div>
            <Header/>
            <main className="App">
                <Tabs centered>
                    <TabPane tab="See all posts" key="posts">
                        <PostsContext.Provider value={{ posts }}>
                            <PostsList/>
                        </PostsContext.Provider>
                    </TabPane>
                    <TabPane tab="Create new post" key="Create post">
                        <PostsContext.Provider value={{ posts, setPosts }}>
                            <CreatePost/>
                        </PostsContext.Provider>
                    </TabPane>
                </Tabs>
            </main>

    </div>)
}

