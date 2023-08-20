import { useState } from "react";
import postsData from "../posts.json";
import { PostsList } from "../components/PostsList";
import Footer from "../components/Footer";

function MainPage() {
    const [posts, setPosts] = useState(postsData);

    return (
        <div>
            <PostsList posts={posts} />
            <Footer />      
        </div>
    )
}

export default MainPage