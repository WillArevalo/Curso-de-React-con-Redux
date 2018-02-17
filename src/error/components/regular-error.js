import React from 'react';
import './regular-error.css';
function RegularError(props){
	return(
		<div className = "RegularError">
			<h2>
				Oh, oh ...<br/>
				Algo no salió bien.
			</h2>
			<p className = "RegularError-emojis">🙈🙊🙉</p>
			<h3>
				Espera algunos segundos<br/>
				y <a href="./">vuelve a intentarlo.</a>
			</h3>
		</div>
	)
}

export default RegularError;