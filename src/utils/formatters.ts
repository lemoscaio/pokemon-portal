export const formatters = {
	pokemonDescription(description: string | undefined) {
		if (!description) return

		const replacedWhitespaces = description.replace(/\s+/g, " ").trim()
		const replacedPokemon = replacedWhitespaces.replace(/POKéMON/, "pokémon")

		return replacedPokemon
	},
}
