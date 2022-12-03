import { Pokemon, PokemonSpecies } from "pokenode-ts"
import { useEffect, useState } from "react"
import { usePokeApi } from "../../contexts/PokeApiContext"
import { formatters } from "../../utils/formatters"
import StatsBox from "../Stats"
import StatBar from "../Stats/StatBar"
import { TypeBadge } from "../TypeBadge"
import {
	StyledInfoBox,
	StyledNav,
	StyledPokemonInfo,
	StyledPokemonInfoWrapper,
} from "./styles"

interface PokemonInfoProps {
	chosenPokemon: string
	setChosenPokemon: React.Dispatch<React.SetStateAction<string>>
}

export default function PokemonInfo({
	chosenPokemon,
	setChosenPokemon,
}: PokemonInfoProps) {
	const { api } = usePokeApi()
	const [pokemon, setPokemon] = useState<Pokemon>()
	const [pokemonSpeciesInfo, setPokemonSpeciesInfo] = useState<PokemonSpecies>()

	useEffect(() => {
		if (chosenPokemon) {
			getPokemonInfo().then((apiResponse: Pokemon) => setPokemon(apiResponse))
			getPokemonSpeciesInfo().then((apiResponse: PokemonSpecies) =>
				setPokemonSpeciesInfo(apiResponse)
			)
		} else {
			setPokemon(undefined)
			setPokemonSpeciesInfo(undefined)
		}
	}, [chosenPokemon])

	function getPokemonInfo() {
		return api.pokemon.getPokemonByName(chosenPokemon)
	}

	function getPokemonSpeciesInfo() {
		return api.pokemon.getPokemonSpeciesByName(chosenPokemon)
	}

	const pokemonImage =
		pokemon && pokemon?.sprites?.other?.["official-artwork"]?.front_default

	return (
		<StyledPokemonInfoWrapper chosenPokemon={chosenPokemon}>
			<StyledPokemonInfo chosenPokemon={chosenPokemon}>
				<StyledNav>
					<button onClick={() => setChosenPokemon("")}>Back</button>
				</StyledNav>
				<header className="pokemon-header">
					{pokemonImage && (
						<img className="pokemon-sprite" src={pokemonImage} />
					)}
					{pokemon?.name && (
						<p className="pokemon-name">
							{pokemon?.name[0]?.toUpperCase() + pokemon?.name?.substring(1)}
						</p>
					)}
					<div className="pokemon-types">
						{pokemon?.types?.map((type) => (
							<TypeBadge key={type.type.name} type={type.type} />
						))}
					</div>
				</header>
				<StyledInfoBox>
					<div className="box-header">Description</div>
					<div className="box-content">
						{formatters.pokemonDescription(
							pokemonSpeciesInfo?.flavor_text_entries[0]?.flavor_text
						)}
					</div>
				</StyledInfoBox>
				<StyledInfoBox>
					<div className="box-header">Stats</div>
					<div className="box-content">
						<StatsBox>
							{pokemon?.stats.map((stat) => (
								<StatBar key={stat.stat.name} stat={stat} max={200} />
							))}
						</StatsBox>
					</div>
				</StyledInfoBox>
			</StyledPokemonInfo>
		</StyledPokemonInfoWrapper>
	)
}
