import { MainClient } from "pokenode-ts"
;(async () => {
	const api = new MainClient()

	await api.berry
		.getBerryByName("cheri")
		.then((data) => console.log(data.name)) // will output "cheri"
		.catch((error) => console.error(error))
})()

export const api = new MainClient()
