import React from 'react'

export default function NewsItem({title, description, src, url}) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 px-2" style={{maxWidth:"345px"}}>
    <img src={src} style = {{height:"200px", width:"360px"}}className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description.slice(0, 50)}</p>
      <a href= {url} className="btn btn-primary">Read More...</a>
    </div>
  </div>
  )
}
