import PostList from "../components/PostList";
function News(){
    return(
        <div>
            <section class="body">
                <div class="category">
                    <div class="category-text">
                        Новости Городской больницы №35
                    </div>
                </div>
            </section>
            <PostList />
        </div>
    );
}

export default News;