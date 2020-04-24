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

			this.textContent = anime.title.canonical
			this.style.backgroundImage = `url(https://media.notify.moe/images/anime/large/${animeID}.webp)`
		})
	}
}
