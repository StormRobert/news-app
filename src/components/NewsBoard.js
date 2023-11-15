import React, { useState, useEffect } from 'react'

function NewsBoard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = `pub_32928ca1fdc2fdf4407a760abf3535c057454`
      let url = ` https://newsdata.io/api/1/news?apikey= ${apiKey} &country=ke&language=en&category=business,health,politics,top,world `
      fetch(url).then(res=> res.json())
      .then((data) => setArticles(data.articles))
    }, [])
    
  return (
    <div>
        <h2 className='text-center'> Latest 
        <span className='badge bg-danger'>News</span>  {/* added color to news */}
        </h2>
    </div>
  )
}

export default NewsBoard