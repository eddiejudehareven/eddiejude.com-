import $ from 'jquery'; 
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints.js';

class StickyHeader { /* calls the method right when page loads */
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".header__subtitle");
		this.createHeaderWaypoint();
		this.pageSections = $ (".page-section");
		this.createPageSectionWaypoints();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0], /* 0 points to the native dom element in an array */
			handler: function(direction) {
				if (direction === "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function() {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					$(matchingHeaderLink).addClass("is-current-link")
				}
			});
		});
	}
}

export default StickyHeader;