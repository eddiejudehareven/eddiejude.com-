import $ from 'jquery';

class navBar {
	constructor() {
		this.displayMenuButton = $(".site-header--arrow"); // 
		this.navBar = $(".nav-bar--menu-bar");
		this.navLinks = $(".nav-bar ul");
		this.events(); //calls the event method
	}

	events() {
		this.displayMenuButton.click(this.toggleTheNavBar.bind(this)); 
		console.log(this);
	}

	toggleTheNavBar() {
		this.navBar.toggleClass("nav-bar--menu-bar--displayed");
		this.displayMenuButton.toggleClass("site-header--arrow--displayed");
		// this.navLinks.toggleClass("nav-bar--displayed");
		// console.log("hello");
		
	}

}
export default navBar;