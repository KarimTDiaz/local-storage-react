import { useEffect, useState } from 'react';

const App = () => {
	const [counter, setCounter] = useState(getInitialValue);
	const [username, setUsername] = useState(getUserName);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify({ counter, username }));
	}, [counter, username]);

	return (
		<>
			<h1>{counter}</h1>
			<h2>{username}</h2>
			<input type='text' onChange={e => handleChange(e, setUsername)} />
			<button onClick={() => handleIncrement(counter, setCounter)}>+1</button>
		</>
	);
};

const handleIncrement = (counter, setCounter) => {
	setCounter(counter + 1);
};
const handleChange = (e, setUsername) => {
	setUsername(e.target.value);
};
const getInitialValue = () => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	if (!initialValue) localStorage.setItem('data', JSON.stringify({}));
	return Number(initialValue.counter) || 0;
};

const getUserName = () => {
	const initialValue = JSON.parse(localStorage.getItem('data'));
	if (!initialValue) localStorage.setItem('data', JSON.stringify({}));
	return initialValue.username || 'username';
};
export default App;
