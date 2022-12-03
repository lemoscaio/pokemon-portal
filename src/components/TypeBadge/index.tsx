import { NamedAPIResource } from "pokenode-ts"
import { StyledPokemonType } from "./styles"

interface TypeBadgeProps {
	type: NamedAPIResource
}

export function TypeBadge({ type }: TypeBadgeProps) {
	return (
		<>
			<StyledPokemonType className="pokemon-type" type={type.name}>
				<span>{type.name}</span>
			</StyledPokemonType>
		</>
	)
}
