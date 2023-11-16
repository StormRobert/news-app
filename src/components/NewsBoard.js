import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';

function NewsBoard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = `pub_32928ca1fdc2fdf4407a760abf3535c057454`
      let url = ` https://newsdata.io/api/1/news?apikey=${apiKey}&q=kenya%20news&country=ke&language=en&category=business,politics,top,world `
      fetch(url).then(res=> res.json())
      .then((data) => setArticles(data.results))
      .catch((error) => console.error('Error fetching articles:', error));
    }, [])
    
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span>  {/* added color to news */}
        </h2>
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description} 
            src={news.image_url} 
            url={news.link}
          />
         ))}
        
        
    </div>
  )
}

export default NewsBoard