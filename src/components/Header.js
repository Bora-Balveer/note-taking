import React, { useState } from 'react';
import {BsFillMoonFill}  from 'react-icons/bs'
import {BsFillSunFill } from 'react-icons/bs'
const Header = ({ handleToggleDarkMode }) => {
	const [dark,setDark]=useState(true)
	const ClickHandle=()=>{
			handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode	
					)
					if(dark===true)
					setDark(false)
					else
					setDark(true)
	}
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				// onClick={() =>
				// 	handleToggleDarkMode(
				// 		(previousDarkMode) => !previousDarkMode	
				// 	)
				// }
				onClick={ClickHandle}
				className='save'
			>
				{dark?<BsFillMoonFill/>:<BsFillSunFill/>}
			</button>
		</div>
	);
};

export default Header;
