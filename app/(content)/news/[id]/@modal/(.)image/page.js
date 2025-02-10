import {notFound} from "next/navigation";
import ModalBackdrop from "@/components/modalBackdrop";
import {getNewsItem} from "@/lib/news";

const InterceptedImagePage = async ({params}) => {
    const newsItemId = params.id;
    const newsItem = await getNewsItem(newsItemId)

    if (!newsItem) {
        notFound()
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className='modal' open>
                <div className='fullscreen-image'>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}

export default InterceptedImagePage