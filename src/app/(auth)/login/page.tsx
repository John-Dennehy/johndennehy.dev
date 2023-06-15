// import { AuthRequiredError } from "@lib/exceptions"


export default async function LoginPage() {

	const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

	const data = await fetch('http://jsonplaceholder.typicode.com/todos/1')
	await wait(1000)
	const response = await data.json()

	// throw new AuthRequiredError()

	return (
		<div>
			<h1>Login</h1>
			{JSON.stringify(response)}
		</div>
	);
};
