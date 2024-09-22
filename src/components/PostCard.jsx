import { Link } from "react-router-dom";

function PostCard({post}){
    return(
        <Link to={`/post/${post.id}`} class="news-block">
            <div class="news-card-body">
                <h3 class="news-title">{post.title}</h3>
                <span class="news-date">{post.date}</span>
                <p class="news-category">{post.category}</p>
            </div>
        </Link>
    );
}

export default PostCard;