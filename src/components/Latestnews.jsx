import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

export const Latestnews = () => {
  return (
    <div className="flex items-center gap-2 p-4 bg-gray-100">
        <p className="bg-red-700 text-xl font-medium px-4 py-2 text-white">Latest</p>
        <div>
            <Marquee 
             pauseOnHover = {true}
              >
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    </div>
  )
}
