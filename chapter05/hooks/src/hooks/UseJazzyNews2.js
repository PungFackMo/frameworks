// hooks/UseJazzyNews2.js
/* useJazzyNews 훅을 개선해보자. 새로운 포스트가 들어올 때마다 newPostChimePlay()를 호출할 것이다. 이 훅에서 posts는 배열이다. 따라서 useMemo를 사용해 배열의 값을 메모화해야 한다 */

export const useJazzyNews2=()=>{
    const newsFeedSubscribe=(addPost)=>{
        addPost({
            "id":"0",
            "title":"news title 01",
            "content":"news content 01"
        })
        addPost({
            "id":"1",
            "title":"news title 02",
            "content":"news content 02"
        })
    }
    const welcomeChimePlay=()=>{
        console.log("환영의 벨이 울린다.")
    }
    const newsFeedUnsubscribe=()=>{
        console.log("뉴스 구독을 취소한다.")
    }
    const goodbyeChimePlay=()=>{
        console.log("이별의 벨을 울린다.")
    }
    const newPostChimePlay=()=>{
        console.log("새로운 포스트가 추가 됐음을 알리는 벨이 울린다.")
    }
    export const useJazzyNews2=()=>{
        const [posts,setPosts]=useState([]);
        const addPost=post=>setPosts(allPosts=>[post,...allPosts])
        const _posts=useMemo(()=>posts,[posts])

        useEffect(()=>{
            newPostChimePlay()
        },[_posts])
        /* 이제 새 포스트가 도착할 때마다 useJazzyNews 훅이 벨을 울린다. posts 배열이 바뀔 때마다 차임벨을 울리는 효과를 추가했다. */

        useEffect(()=>{
            newsFeedSubscribe(addPost)
            return ()=>newsFeedUnsubscribe(addPost)
        },[])
        useEffect(()=>{
            welcomeChimePlay()
            return ()=>goodbyeChimePlay()
        })
        return posts
}