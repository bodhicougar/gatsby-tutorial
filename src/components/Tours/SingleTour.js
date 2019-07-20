import React from 'react'
import { FaMap } from 'react-icons/fa'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { Link } from 'gatsby'

const SingleTour = ({ tour }) => {
  return (
    <div>
      This is a single tour.<p> </p>
      <FaMap />
    </div>
  )
}

export default SingleTour
