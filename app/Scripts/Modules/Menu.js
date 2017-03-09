import $ from 'jquery'; 

class Menu {
	constructor() {
		this.openMenuButton = $(".btn__menu");  
		this.menu = $(".nav-bar");
		this.closeMenuButton = $(".btn__menu");
		this.events();
	}

	events() {
 // clicking menu button will make menu visible 
 this.openMenuButton.click(this.openMenu.bind(this));
 // clicking the menu button again will make menu invisible 
 this.closeMenuButton.click(this.closeMenu.bind(this));
 //
	}

	openMenu() {
		this.nav-bar.addClass("nav-bar__menu-is-visible");
	}

	closeMenu() {
		this.nav-bar.removeClass("nav-bar__menu-is-invisible");
	}
}
export default Menu; 


	