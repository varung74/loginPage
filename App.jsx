import './App.css'
import { useState } from 'react'

export default function App() {
	const [defUser, setUserName] = useState('')
	const [defPass, setPassword] = useState('')
	const [allEntry, setAllEntry] = useState([])
	const submitForm = (e) => {
		e.preventDefault()
		const entry = { email: defUser, pass: defPass }

		setAllEntry([entry])

		console.log(allEntry)
	}

	return (
		<>
			<h1>User Login</h1>
			<form action=" " onSubmit={submitForm}>
				<div className="username">
					<input
						type="text"
						placeholder="userName"
						value={defUser}
						onChange={(e) => setUserName(e.target.value)}
					></input>
				</div>
				<div>
					<input
						type="text"
						placeholder="password"
						value={defPass}
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div>
					<button type="submit">log in</button>
				</div>
				<p>
					new here please create<a href=""> new Account</a>
				</p>
			</form>
			{allEntry.map((e) => {
				return (
					<div className="display">
						userName:{e.email} and password: {e.pass}
					</div>
				)
			})}
		</>
	)
}
