import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostPage(){
    
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchPosts(){
            try {
                setIsLoading(true);
                const response = await axios.get(`https://a98b24e59a33db53.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts()
    }, [id]);
    if(isError){
        return <Error />;
    }
    return(
        <section class="body">
            {isLoading ? (<LoadingDetail />) : (
                <section class="body">
                    <div class="category">
                        <div class="category-text">
                            Новость
                        </div>
                    </div>
                    <div class="title">
                        <div class="title-text">
                            <p class="title-message">{post.title}</p>
                        </div>
                        <div class="title-category">
                            <b>{post.category} </b>
                        </div>
                    </div>
                    <div class="information">
                        <p class="info-text">
                            {post.description}
                        </p>
                    </div>
                </section>
            )}
        </section>
    );
}

export default PostPage;