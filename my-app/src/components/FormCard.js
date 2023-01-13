import React from 'react'
import './FormCard.css'

export default function FormCard(props) {
const {formDetails} = props
  const {result} = formDetails
  const formStyles = result === 'Won' ? 'win-style' : 'lose-style'
  return (
    <div>
      <li className="form-details-container">
      <p className={`form ${formStyles}`}>{result.slice(0, 1)}</p>
    </li>
    </div>
  )
}
