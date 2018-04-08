import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".nav-bar__menu-icon");
		this.menuContent = $(".nav-bar");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
		console.log(this);
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("nav-bar--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("nav-bar__menu-icon--close-x");
	}
}

export default MobileMenu; 