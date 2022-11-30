import { useState } from "react"
import PokemonInfo from "../components/PokemonInfo"
import PokemonList from "../components/PokemonList"
import { StyledPageWrapper } from "./styles"

export default function Pokemons() {
	const [chosenPokemon, setChosenPokemon] = useState("")

	return (
		<StyledPageWrapper>
			<PokemonList
				setChosenPokemon={setChosenPokemon}
				chosenPokemon={chosenPokemon}
			/>
			<PokemonInfo
				setChosenPokemon={setChosenPokemon}
				chosenPokemon={chosenPokemon}
			/>
		</StyledPageWrapper>
	)
}
