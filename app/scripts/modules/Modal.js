import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.askMe = $(".modal__AskMe");
		this.closeModalButton = $(".modal__close");
		this.events(); //calls the event method
	}

	events() {
		//clicking the open modal button // //bind binds 'this' // 
		this.openModalButton.click(this.openModal.bind(this)); //when the openModal button is clicked run the opelModal method // 
		// click the x close modal button

		this.closeModalButton.click(this.closeModal.bind(this)); //when the X is clicked run the closeModal method //
		//pushes any escape key
		this.askMe.click(this.openModal.bind(this));
		//click on ask me link
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) { //paramater is e, 27 is the value associated with the escape key : if the escape key is pressed the run closeModal method // 
		if (e.keyCode === 27) {
		this.closeModal();
}
	}

	openModal() {
		this.modal.addClass("modal__is-visible"); //js will add this class when clicked // 
		return false; // prevents scroll up of link href with just a # sign //
		this.askMe.addClass("modal__AskMe__is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal__is-visible"); 
		this.askMe.removeClass("modal__AskMe__is-visible");
	}

}

export default Modal; // exports to main JS file // 