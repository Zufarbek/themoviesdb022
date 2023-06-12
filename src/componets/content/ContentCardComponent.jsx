import React from 'react'
import {contentUrl} from '../../repositories/repository'
import './ContentCardComponent.css'


export default function ContentCardComponent(props) {
  return (
        props.movieList.map((item, index) => {
            return (
                <div key={index} className="content-card-component">
                    <div className="card">
                        <img src={contentUrl + item.poster_path} alt={item.title} />
                        <p>{item.title}</p>
                        <p>{item.release_date}</p>
                    </div>
                </div>
            )
        })
  )
}





