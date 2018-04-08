import $ from 'jquery'; 
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints.js';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".header__subtitle");
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function() {
				that.site-header.addClass("site-header--dark");
			}
		});
	}
}

export default StickyHeader;