// src/hooks/CustomHooks.js

/* 첫 번째 렌더링시 뉴스 피드를 구독할 수도 있다. 그 후 정리 함수에서 뉴스 피드 구독을 취소할 수 있다. 첫 번째 렌더링시 posts라는 상태 변수를 만들고 이변수의 상태를 변경하는 setPosts라는 함수를 만들 수 있다. 그 후 addPosts라는 함수를 만들어서 최신 뉴스를 얻어서 배열에 추가한다. 그 후 useEffect를 사용해 뉴스 피드를 구독하고, 벨을 울린다. 그리고 정리 함수를 반환한다. 이 함수는 이별의 벨소리를 울리고 뉴스 구독을 취소한다. */
import { useState,useEffect } from "react"
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
export const useJazzyNews=()=>{
    const [posts,setPosts]=useState([]);
    const addPost=post=>setPosts(allPosts=>[post,...allPosts])
    // useEffect(()=>{
    //     newsFeedSubscribe(addPost)
    //     welcomeChimePlay()
    //     return ()=>{
    //         newsFeedUnsubscribe(addPost)
    //         goodbyeChimePlay()
    //     }
    // },[])
    /* 기능을 여러 useEffect로 나눠 담는 것이 보통은 좋은 생각입니다.  */
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