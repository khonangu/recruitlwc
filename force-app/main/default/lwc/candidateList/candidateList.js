import { LightningElement, wire } from 'lwc';
import getCandidates from '@salesforce/apex/CandidateController.getCandidates';

export default class PositionCandidates extends LightningElement {
    candidates;
    modalClass = 'slds-modal'; // CSS class to control modal visibility
    modalCandidateDetails = ''; // Candidate details to display in the modal

    @wire(getCandidates)
    wiredCandidates({ error, data }) {
        if (data) {
            this.candidates = data;
        } else if (error) {
            console.error(error);
        }
    }

    showCandidateModal(event) {
        const candidateId = event.target.dataset.id;
        // Find the selected candidate
        const selectedCandidate = this.candidates.find(candidate => candidate.Id === candidateId);
        if (selectedCandidate) {
            // Display the modal
            this.modalCandidateDetails = selectedCandidate; // Set candidate details
            this.modalClass = 'slds-modal slds-fade-in-open'; // Show modal
        }
    }
    

    closeCandidateModal() {
        // Close the modal
        this.modalClass = 'slds-modal'; // Hide modal
        this.modalCandidateDetails = ''; // Clear candidate details
    }
}


/*import { LightningElement, wire } from 'lwc';
import getCandidates from '@salesforce/apex/CandidateController.getCandidates';

export default class PositionCandidates extends LightningElement {
    candidates;

    @wire(getCandidates)
    wiredCandidates({ error, data }) {
        if (data) {
            this.candidates = data;
        } else if (error) {
            console.error(error);
        }
    }
    
}*/




/*import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Candidate__c.First_Name__c', 'Candidate__c.Email__c', 'Candidate__c.Phone__c'];

export default class CandidateList extends LightningElement {
    @api recordId; // This is the record ID you want to fetch data for

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    candidateRecord;

    get candidate() {
        return this.candidateRecord.data;
    }
}*/