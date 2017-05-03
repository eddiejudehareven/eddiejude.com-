import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll {
	constructor() {
		this.itemsToReveal = $("");
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		this.itemsToReveal.each(function() {
		alert("testing");
		});
	}
}

export default RevealOnScroll;