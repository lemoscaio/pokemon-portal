import { NamedAPIResource, Pokemon } from "pokenode-ts"
import { useEffect, useState } from "react"
import { usePokeApi } from "../../contexts/PokeApiContext"
import { TypeBadge } from "../TypeBadge"
import { StyledSmallCard } from "./styles"

interface SmallCardProps {
	pokemonBaseInfo: NamedAPIResource
}

export default function SmallCard({ pokemonBaseInfo }: SmallCardProps) {
	const { api } = usePokeApi()
	const [pokemon, setPokemon] = useState<Pokemon | undefined>()

	useEffect(() => {
		getPokemonInfo().then(setPokemon)
	}, [])

	async function getPokemonInfo() {
		return api.pokemon.getPokemonByName(pokemonBaseInfo.name)
	}

	if (!pokemon) return <></>

	return (
		<>
			<StyledSmallCard key={pokemon.name}>
				<img src={pokemon.sprites.front_default as string} className="icon" />
				<div className="second-column">
					<p className="pokemon-name">
						{pokemon.name[0].toLocaleUpperCase() + pokemon.name.substring(1)}
					</p>
					<div className="types-list">
						{pokemon.types.map(({ type }) => (
							<TypeBadge key={type.name} type={type} />
						))}
					</div>
				</div>
			</StyledSmallCard>
		</>
	)
}
