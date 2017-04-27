import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.mobileNav = $(".mobile-nav");
		this.menuIcon = $(".mobile-nav__menu-icon");
		this.menuContent = $(".mobile-nav__content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this)); 
	}


	toggleTheMenu() {
		this.menuContent.toggleClass("mobile-nav__content--is-visible");
		// this.siteHeader.toggleClass("mobile-nav--is-expanded");
		this.menuIcon.toggleClass("mobile-nav__menu-icon--close-x");
	}

}

export default MobileMenu; 