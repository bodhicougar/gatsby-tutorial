import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import { Link } from 'gatsby'

const tourTemplate = props => {
  console.log(props)

  return <div>Hello from your tour template</div>
}

export const query = graphql

export default tourTemplate
