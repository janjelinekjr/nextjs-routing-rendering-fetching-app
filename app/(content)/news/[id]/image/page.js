import {notFound} from "next/navigation";
import {getNewsItem} from "@/lib/news";

const ImagePage = async ({params}) => {
    const newsItemId = params.id;
    const newsItem = await getNewsItem(newsItemId)

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