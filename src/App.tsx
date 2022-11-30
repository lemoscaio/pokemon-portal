import { PokeApiProvider } from "./contexts/PokeApiContext"
import { ResetCss } from "./styles/resetCSS"
import AppRoutes from "./routes"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
	return (
		<>
			<GlobalStyles />
			<ResetCss />
			<PokeApiProvider>
				<AppRoutes />
			</PokeApiProvider>
		</>
	)
}

export default App
