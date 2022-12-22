import { ResetCss } from "./styles/resetCSS"
import AppRoutes from "./routes"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyles"
import { darkTheme } from "./styles/theme"
import { PokeApiProvider } from "./contexts/PokeApiContext"

function App() {
	return (
		<>
			<ResetCss />
			<GlobalStyles />
			<ThemeProvider theme={darkTheme}>
				<PokeApiProvider>
					<AppRoutes />
				</PokeApiProvider>
			</ThemeProvider>
		</>
	)
}

export default App
