import { useSelector } from "react-redux";

const Posts = () => {
    
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const post = useSelector((state)=>state.post.posts)
    return ( 
    <section className="post-container">
{post.slice(1).map((post, index)=>{
    return (
<div className="posts" key={index}>
        <div className="posts-title">{post.title}</div>
        <div className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</div>
        <div className="posts-desc">{post.description}</div>


</div>

    )
})}
    </section> 
    );
}
 
export default Posts;