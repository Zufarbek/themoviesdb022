import React from 'react'
import ContentCardComponent from './ContentCardComponent'

export default function ConentListComponent(props) {
  return (
    <div className="row">
      <ContentCardComponent movieList={props.movieList}/>
    </div>
  )
}
