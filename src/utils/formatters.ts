export const formatters = {
	pokemonDescription(description: string | undefined) {
		if (!description) return

		const replacedWhitespaces = description.replace(/\s+/g, " ").trim()
		const replacedPokemon = replacedWhitespaces.replace(/POKéMON/, "pokémon")

		return replacedPokemon
	},

	statName(statName: string | undefined) {
		if (!statName) return

		const splittedStat = statName.split("-")

		return splittedStat
			.map((string) => {
				return string[0].toUpperCase() + string.substring(1)
			})
			.join("-")
	},
}
