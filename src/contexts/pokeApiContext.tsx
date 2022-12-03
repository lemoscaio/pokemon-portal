import { MainClient } from "pokenode-ts"
import { createContext, useContext } from "react"

interface PokeApiProviderProps {
	children?: React.ReactNode
}

interface PokeApiContextInterface {
	api: MainClient
}

const PokeApiContext = createContext<PokeApiContextInterface>({
	api: new MainClient(),
})

export function PokeApiProvider({ children }: PokeApiProviderProps) {
	const { api } = useContext(PokeApiContext)

	return (
		<PokeApiContext.Provider value={{ api }}>
			{children}
		</PokeApiContext.Provider>
	)
}

export function usePokeApi() {
	return useContext(PokeApiContext)
}
