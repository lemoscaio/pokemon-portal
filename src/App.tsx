import { PokeApiProvider } from "./contexts/PokeApiContext"
import { ResetCss } from "./styles/resetCSS"
import AppRoutes from "./routes"
import { GlobalStyles } from "./styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { darkTheme } from "./styles/theme"

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
