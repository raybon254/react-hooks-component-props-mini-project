import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {/* array of article */}
            {posts.map(posts => {
                return <Article  key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} />
            })}
        </main>
    )
}

export default ArticleList;