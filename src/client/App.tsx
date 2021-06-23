import * as React from 'react';
import { useState, useEffect } from 'react';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	const [greeting, setGreeting] = useState<string>('');

	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Hello {greeting}!</h1>
		</main>
	);
};

interface AppProps {}

export default App;
