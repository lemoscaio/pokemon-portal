import { PokeApiProvider } from "./contexts/pokeApiContext"
import AppRoutes from "./routes"

function App() {
	return (
		<PokeApiProvider>
			<AppRoutes />
		</PokeApiProvider>
	)
}

export default App
