import { LightningElement, track } from 'lwc';

export default class CandidateCreateForm extends LightningElement {
    @track firstName = '';
    @track lastName = '';

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleCancelClick() {
        // Handle cancel button click, e.g., close the modal
        this.dispatchEvent(new CustomEvent('closemodal'));
    }

    handleSaveClick() {
        // Handle save button click, e.g., save data and close the modal
        // You can send the entered data to a server or perform other actions here
        this.dispatchEvent(new CustomEvent('closemodal'));
    }
}
