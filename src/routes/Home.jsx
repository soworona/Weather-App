import { useLoaderData } from "react-router-dom";
import { list } from "../post";
import moment from "moment/moment"; 
import { Link } from "react-router-dom";

export async function fetch(){
    const posts=await list();
    console.log(posts)
    if(!posts){
        return[];

    }
    return posts.map(function(post){
        return {
            ...post,
            created_at:moment(post.created_at).format("MMM Do YY")
        };
    
});
}
export default function Home() {
   const posts=useLoaderData();
   
    return (
        <>
            <h1 className="title">Blog</h1>
            <ul className="posts">
                {
                    posts.map(function(post){
                    return(<li className="post">
                    <Link to={`/post/${post.id}`}>
                        <date>{post.created_at}</date>
                        <span>{post.title}</span>
                    </Link>
                </li>);
                    })
                }
                
                



            </ul>
        </>
    )
}