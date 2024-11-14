import { FaBookmark } from "react-icons/fa"
import { FaEye, FaShare, FaStar } from "react-icons/fa6"

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
            <p>{details}</p>
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
//  {
//     "_id": "acb9b6785b62698fc6130db7615965e1",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "03",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 879,
//     "title": "US Pledges $3 Bln In Additional Security Assistance For Ukraine",
//     "author": {
//         "name": "RTTNews",
//         "published_date": "2022-08-25 11:53:13",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/1vcgPzg/unsplash-Eh-Tc-C9s-YXsw-12.png",
//     "image_url": "https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png",
//     "details": "The United States has pledged nearly $3 billion in additional security assistance for Ukraine to help fight Russia's invasion as well as enable the country to defend itself over the long term. The latest aid package, under the Ukraine Security Assistance Initiative (USAI), was announced by President Joe Biden on Ukraine's Independence Day. This will allow Ukraine to acquire air defense systems,"
// }