import { useLoaderData } from "react-router-dom"
import NewsCard from "../NewsCard/NewsCard";

export default function Newsletter() {
    const {data:news }= useLoaderData();

  return (
    <div>
        <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
        <h3 className="text-xs mb-2">{news.length} Latest news found this category</h3>
        <div>
            {
                news.map((newsItem)=> <NewsCard key={newsItem._id} news={newsItem}/>)
            }
        </div>
    </div>
  )
}
