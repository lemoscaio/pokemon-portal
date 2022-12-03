import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pokemons from "../pages/Pokemons"

export default function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/pokemons" element={<Pokemons />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
