import React from "react";

function ArticleList () {
    return (
        <main>
            {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
        </main>
    )
}

export default ArticleList