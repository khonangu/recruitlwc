import { LightningElement, wire } from 'lwc';
import getPositions from '@salesforce/apex/ReadOnlyPositionController.getPositions';

export default class ReadOnlyPositionTable extends LightningElement {
    selectedStatus = '';
    positions = [];
    filteredPositions = [];
    columns = [
        { label: 'Job Name', fieldName: 'Name', type: 'text' },
        { label: 'Status', fieldName: 'Status__c', type: 'text' },
        { label: 'Open Date', fieldName: 'Opening_Date__c', type: 'date' },
        { label: 'Close Date', fieldName: 'CloseDate__c', type: 'date' },
        { label: 'Max Pay', fieldName: 'Max_Pay__c', type: 'currency' },
        { label: 'Min Pay', fieldName: 'Min_Pay__c', type: 'currency' },
        
    ];

    @wire(getPositions)
    wiredPositions({ error, data }) {
        if (data) {
            this.positions = data;
            this.filterPositions();
        } else if (error) {
            console.error('Error loading positions:', error);
        }
    }

    handleFilterChange(event) {
        this.selectedStatus = event.detail.value;
        this.filterPositions();
    }

    filterPositions() {
        this.filteredPositions = this.positions.filter(
            (position) =>
                !this.selectedStatus || position.Status__c === this.selectedStatus
        );
    }

    handleSaveClick() {
       
    }
}
