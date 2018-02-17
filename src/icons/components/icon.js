import React from 'react';

function Icon(props) {
	const{
		color,
		size,
		title,
	} = props
	return(
		//Para que los elementos hijos se render puedo utilizar la composicion de elementos
		<svg 
			fill={color}//"#A0AABF" 
			height={size}
			width={size}
			title={title}
			viewBox="0 0 34 32"
		>
			{props.children}
		</svg>

	)
}

export default Icon;