import {notFound} from "next/navigation";
import Link from "next/link";
import {getNewsItem} from "@/lib/news";

const NewsDetailPage = async ({params}) => {
    const newsId = params.id
    const newsItem = await getNewsItem(newsId)

    if (!newsItem) {
        notFound()
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.id}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </Link>
                <h1>{newsItem.title}</h1>
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
    )
}

export default NewsDetailPage