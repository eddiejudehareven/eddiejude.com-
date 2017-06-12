import $ from 'jquery';

class Modal {
	constructor() {
		// these are all jquery selectors [except this.events()]
		// we use these to 'select' the elements on the page that we want to operate on
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.body = $("body");
		this.events(); //calls the event method
	}

	events() {
		//clicking the open modal button // //bind binds 'this' // 
		this.openModalButton.click(this.openModal.bind(this)); //when the openModal button is clicked run the opelModal method // 
		// click the x close modal button

		this.closeModalButton.click(this.closeModal.bind(this)); //when the X is clicked run the closeModal method //
		//pushes any escape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) { //paramater is e, 27 is the value associated with the escape key : if the escape key is pressed the run closeModal method // 
		if (e.keyCode === 27) {
		this.closeModal();
}
	}

	openModal() {
		console.log('opening modal')
		this.modal.addClass("modal__is-visible"); //js will add this class when clicked // 
		this.body.addClass("body__modal__is-visible");
		return false; // prevents scroll up of link href with just a # sign //
	}

	closeModal() {
		this.modal.removeClass("modal__is-visible"); 
		this.body.removeClass("body__modal__is-visible");
	}

}

export default Modal; // exports to main JS file // 