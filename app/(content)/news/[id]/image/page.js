import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";

const ImagePage = ({params}) => {
    const newsItemId = params.id;
    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.id === newsItemId)

    if(!newsItem) {
        notFound()
    }

    return (
        <div className='fullscreen-image'>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
    )
}

export default ImagePage