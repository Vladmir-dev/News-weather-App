import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import {newsClient, weatherClient} from '../../app/apiClients';

const Carou = () => {
   const [localNews, SetLocalNews] = useState(null)

   useEffect(() => {
    newsClient.get('/latest_headlines', {
      countries: 'ug',

    }).then((response) => {
      console.log(response.data.articles);
      SetLocalNews(response.data.articles);
    })

   }, [])
   if(!localNews) return null

  return (
    <div style={{ display: 'block', width: 1500, padding: 30, position: 'realtive', marginLeft: 150 }}>
    {localNews?.map(
      (news) => <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
src={news.media}
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Two</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )}
    
  </div>
  )
}

export default Carou