import NewsList from "@/components/newsList";
import {getAllNews} from "@/lib/news";

const NewsPage = async () => {
    const news = getAllNews();

    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news}/>
        </>
    )
}

export default NewsPage