import { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts"
import { useEffect, useRef, useState } from "react"
import { usePokeApi } from "../../contexts/PokeApiContext"
import SmallCard from "../SmallCard"
import { StyledList, StyledListWrapper } from "./styles"

interface PokemonListProps {
	chosenPokemon: string
	setChosenPokemon: React.Dispatch<React.SetStateAction<string>>
}

export default function PokemonList({
	setChosenPokemon,
	chosenPokemon,
}: PokemonListProps) {
	const { api } = usePokeApi()
	const [pokemons, setPokemons] = useState<NamedAPIResource[]>([])
	const [page, setPage] = useState(0)
	const [next, setNext] = useState(true)

	const loadMoreRef = useRef(null)

	useEffect(() => {
		const controller = new AbortController()

		const options = {
			root: null,
			rootMargin: "20px",
			threshold: 1.0,
		}

		const observer = new IntersectionObserver((entries) => {
			const target = entries[0]

			if (target.isIntersecting) {
				// setPage((prev) => prev + 1)
			}
		}, options)

		if (loadMoreRef?.current) {
			observer.observe(loadMoreRef.current)
		}

		return () => {
			if (loadMoreRef?.current) observer.unobserve(loadMoreRef.current)
			controller.abort()
		}
	}, [loadMoreRef])

	useEffect(() => {
		const controller = new AbortController()

		listPokemon()
			.then(updatePokemonAndNext)
			.catch((error) => console.log(error))

		return () => controller.abort()
	}, [page])

	async function listPokemon() {
		const limit = 50
		const offset = page * limit

		return api.pokemon.listPokemons(offset, limit)
	}

	function updatePokemonAndNext(apiResult: NamedAPIResourceList) {
		setPokemons((prev) =>
			prev?.concat(apiResult?.results as NamedAPIResource[])
		)
		setNext(apiResult?.next ? true : false)
		// setPage((prev) => prev + 1)
	}

	return (
		<StyledListWrapper chosenPokemon={chosenPokemon}>
			<StyledList chosenPokemon={chosenPokemon}>
				{pokemons?.map((pokemon, index) => {
					if (index !== pokemons.length - 1) {
						return (
							<div
								key={pokemon.name}
								onClick={() => setChosenPokemon(pokemon.name)}
							>
								<SmallCard key={pokemon.name} pokemonBaseInfo={pokemon} />
							</div>
						)
					} else {
						return (
							<div
								key={pokemon.name}
								onClick={() => setChosenPokemon(pokemon.name)}
							>
								<SmallCard key={pokemon.name} pokemonBaseInfo={pokemon} />
							</div>
						)
					}
				})}
				<div ref={loadMoreRef}>
					Last element? Are there more? {next ? <>Yes</> : <>No</>}
				</div>
			</StyledList>
		</StyledListWrapper>
	)
}
