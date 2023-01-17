import ReactStars from 'react-rating-stars-component'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

function StarRating({value}) {
  return (
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor='#ffd700'
    value={value}
    isHalf={true}

    emptyIcon={<FontAwesomeIcon icon={faStar} />}
    halfIcon={<FontAwesomeIcon icon={faStarHalf} />}
    fullIcon={<FontAwesomeIcon icon={faStar} />}
/>
  )
}

export default StarRating
