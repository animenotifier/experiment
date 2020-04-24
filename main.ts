import Database from "./src/Database.js"
import AnimeMini from "./ui/anime-mini/anime-mini.js"
import AnimeNotifier from "./ui/anime-notifier/anime-notifier.js"
import SideBar from "./ui/side-bar/side-bar.js"

customElements.define("anime-notifier", AnimeNotifier)
customElements.define("side-bar", SideBar)
customElements.define("anime-mini", AnimeMini)

document.addEventListener("database ready", () => {
	document.body.style.filter = "none"
})

Database.init()
