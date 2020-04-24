import Anime from "./Anime.js"

export default class Database {
	public static Anime = new Map<string, Anime>()

	public static async init() {
		const response = await fetch("/db/Anime.dat")
		const sizeHeader = response.headers.get("Content-Length")

		if(!sizeHeader) {
			throw "Content-Length not set"
		}

		if(!response.body) {
			throw `Error loading Anime.dat`
		}

		const size = parseInt(sizeHeader, 10)
		const received = new Uint8Array(size)
		const reader = response.body.getReader()
		let position = 0

		while(true) {
			const {done, value} = await reader.read()

			if(done || !value) {
				break
			}

			received.set(value, position)
			position += value.length
		}

		const text = new TextDecoder("utf-8").decode(received)
		let lastID = ""

		for(const line of text.split("\n")) {
			if(lastID === "") {
				lastID = line
				continue
			}

			this.Anime.set(lastID, JSON.parse(line) as Anime)
			document.dispatchEvent(new Event(`Anime ${lastID}`))
			lastID = ""
		}

		console.log(`${Database.Anime.size} anime loaded`)
		document.dispatchEvent(new Event("database ready"))
	}
}
