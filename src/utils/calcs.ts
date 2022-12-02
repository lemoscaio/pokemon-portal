export function toRem(fontSize: number) {
	return `${fontSize / 16}rem`
}

export function calcStatBarWidth(statValue: number, max: number) {
	return `${(statValue / max) * 100}%`
}
