import React, { Component } from 'react'

export default class arrowLeft extends Component {
	render() {
		return (
			<svg width={64} height={64} {...props}>
			<path
			  fill="none"
			  stroke="#000"
			  strokeWidth={2}
			  strokeLinejoin="bevel"
			  strokeMiterlimit={10}
			  d="M37 15L20 32l17 17"
			/>
		  </svg>
		)
	}
}
