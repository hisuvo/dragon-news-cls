import { Link, useLoaderData } from "react-router-dom";
import RightNavLayout from "../Layout/RightNavLayout";
import Header from "./Header";

export default function NewsDetails() {
  const data = useLoaderData();
  const news = data.data[0]


  return <div className="w-11/12 mx-auto">
    <header>
      <Header/>
    </header>
    <main className="grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <h2 className="text-xl font-semibold mb-4">Dragon News</h2>
        {/* news card here */}
      <div className="card bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={news?.image_url}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <div className="card-actions">
            <Link to={`/category/${news?.category_id}`} className="btn btn-error text-white rounded-none">All news in this category</Link>
          </div>
        </div>
      </div>

      </div>

      <div className="col-span-3">
        <RightNavLayout/>
      </div>
    </main>
  </div>;
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

