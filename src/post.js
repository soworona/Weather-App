import localforage from "localforage"

function set(posts){
    console.log(posts)
    localforage.setItem("posts",posts);
}

async function create(post){
    const newpost={
        id:Math.random().toString(36).substring(2),
        title:post.title,
        content:post.content,
        created_at:Date.now(),
    };
    let posts=await list();
    if(!posts) {
        posts = [];
    }
    await set([...posts,newpost]);
}

async function list()
{
    const posts=await localforage.getItem("posts");
    return posts;
}
async function find(postId){
    const posts=await list();
    return posts.filter(function(post){
        return post.id==postId;
    })[0];
}
export{
    create,
    list,find
  
}