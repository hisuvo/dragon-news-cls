import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const LeftNavLayout = () => {
    const [leftLayoutBtn, setLeftLayoutBtn] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(result => result.json())
        .then(data => setLeftLayoutBtn(data.data.news_category))
    })
  return (
    <div>
        <h2 className="text-xl font-semibold">All Caterogy ({leftLayoutBtn.length})</h2>
        <div className="flex flex-col gap-2 mt-5">
            {
                leftLayoutBtn.map(category => <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>{category.category_name}</NavLink>)
            }
        </div>
    </div>
  )
}

export default LeftNavLayout