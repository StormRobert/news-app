import React, { useState } from 'react'

function NewsBoard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
  return (
    <div>
        <h2 className='text-center'> Latest 
        <span className='badge bg-danger'>News</span>  {/* added color to news */}
        </h2>
    </div>
  )
}

export default NewsBoard