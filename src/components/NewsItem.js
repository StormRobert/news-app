import React from 'react'
import news from "../Images/news.png"
import news1 from "../Images/news1.png"
import newsimage from "../Images/news-image.png"
export default function NewsItem({title, description, src, url}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-3 py-4 px-3" style={{maxWidth:"345px"}}>
    <img src={src?src:news} style = {{height:"140px", width:"180px"}}className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description.slice(0, 90)}</p>
      <a href= {url} className="btn btn-primary">Read More...</a>
    </div>
  </div>
  )
}
