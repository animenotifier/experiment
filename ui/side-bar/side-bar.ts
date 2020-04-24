export default class SideBar extends HTMLElement {
	protected connectedCallback() {
		this.textContent = "I'm a sidebar"
	}
}
