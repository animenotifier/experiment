import Database from "../../src/Database.js"

export default class AnimeMini extends HTMLElement {
	protected connectedCallback() {
		const animeID = this.getAttribute("id")

		if(!animeID) {
			throw "Missing id on mini-anime element"
		}

		document.addEventListener(`Anime ${animeID}`, () => {
			const anime = Database.Anime.get(animeID)

			if(!anime) {
				this.textContent = "Anime not found"
				return
			}

			const img = document.createElement("img")
			img.src = `https://media.notify.moe/images/anime/large/${animeID}.webp`
			this.appendChild(img)

			const title = document.createElement("p")
			title.textContent = anime.title.canonical
			this.appendChild(title)
		})
	}
}
