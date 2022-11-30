import { Types } from "pokenode-ts"

type defaultType = { default: string }

type TypesColors = Record<keyof typeof Types, string> & defaultType

type FontColorsBasedOnType = Pick<TypesColors, "NORMAL" | "ELECTRIC"> &
	defaultType

const colors: TypesColors = {
	NORMAL: "white",
	BUG: "green",
	ELECTRIC: "yellow",
	GHOST: "purple",
	POISON: "purple",
	DARK: "black",
	DRAGON: "purple",
	FAIRY: "pink",
	FIGHTING: "brown",
	FIRE: "red",
	WATER: "blue",
	FLYING: "lightblue",
	GRASS: "green",
	GROUND: "brown",
	ICE: "lightblue",
	PSYCHIC: "pink",
	ROCK: "gray",
	SHADOW: "black",
	STEEL: "gray",
	UNKNOWN: "black",
	default: "white",
}

const fontColors: FontColorsBasedOnType = {
	NORMAL: "black",
	ELECTRIC: "black",
	default: "white",
}

export const typeHelpers = {
	getBackgroundColor(type: string): string {
		const resolvedType = type.toUpperCase()

		return colors[resolvedType as keyof typeof Types] || colors["default"]
	},

	getFontColor(type: string): string {
		const resolvedType = type.toUpperCase()

		return (
			fontColors[resolvedType as keyof FontColorsBasedOnType] ||
			fontColors["default"]
		)
	},
}
