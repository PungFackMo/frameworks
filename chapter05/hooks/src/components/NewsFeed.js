// components/NewsFeed.js

import { useJazzyNews } from "../hooks/CustomHooks"

/* 뉴스 피드 커스텀 훅에는 뉴스 피드를 처리하는 모든 기능이 들어 있다. 이 말은 이 기능을 다른 컴포넌트와 쉽게 공유할 수 있다는 뜻이다. NewsFeed라는 새 컴포넌트에서 이 커스텀 훅을 사용할 것이다. */
export default function NewsFeed({url}){
    const posts=useJazzyNews()

    return (
        <>
            <h1>{posts.length} articles</h1>
            {posts.map(post=>(
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    )

}