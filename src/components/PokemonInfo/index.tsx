import { StyledPokemonInfo } from "./styles"

interface PokemonInfoProps {
	chosenPokemon: string
	setChosenPokemon: React.Dispatch<React.SetStateAction<string>>
}

export default function PokemonInfo({
	chosenPokemon,
	setChosenPokemon,
}: PokemonInfoProps) {
	// if (!chosenPokemon) return <></>

	return (
		<>
			<StyledPokemonInfo chosenPokemon={chosenPokemon}>
				PokemonInfo
			</StyledPokemonInfo>
		</>
	)
}
