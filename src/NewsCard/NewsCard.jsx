import { FaBookmark } from "react-icons/fa"
import { FaEye, FaShare, FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"

export default function NewsCard({news}) {
    const {title, image_url, details, total_view, rating, author} = news
    const {number, badge} = rating
    const {name, published_date, img} = author
  return (
    <div className="border-2 mb-2 rounded-lg">
        <div className="bg-gray-200 p-3 flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <figure>
                    <img className="w-[50px] rounded-full" src={img} alt="" />
                </figure>
                <div>
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-xs">{published_date}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center text-2xl">
                <FaBookmark/>
                <FaShare/>
            </div>
        </div>
        <div className="p-4 space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <img src={image_url} alt="" />
            <p>
                {details.slice(0, 150)}......... {' '}
                <Link to={`/news/${news._id}`} className="text-red-400">Read More</Link>
            </p>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
                <h3 className="flex gap-2 items-center">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    {number}</h3>
                <p className="flex gap-2 items-center"><FaEye/> {total_view}</p>
            </div>
        </div>
    </div>
  )
}
