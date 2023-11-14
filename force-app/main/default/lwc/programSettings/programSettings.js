import { LightningElement, wire } from 'lwc';
import getCandidateFieldSetOptions from '@salesforce/apex/ProgramSettingsController.getCandidateFieldSetOptions';
import getModalFieldSetOptions from '@salesforce/apex/ProgramSettingsController.getModalFieldSetOptions';
import getJobAppFieldSetOptions from '@salesforce/apex/ProgramSettingsController.getJobAppFieldSetOptions';
import saveProgramSettings from '@salesforce/apex/ProgramSettingsController.saveProgramSettings';



export default class ProgramSettings extends LightningElement {
   
    selectedCandidateFieldSet = 'FieldSet1';
    selectedModalFieldSet = 'FieldSetA';
    selectedJobAppFieldSet = 'FieldSetX';
    showInaccessibleFields = false;
    candidateFieldSetOptions = [];
    modalFieldSetOptions = [];
    jobAppFieldSetOptions = [];


     
    // Fetch the options for comboboxes when the component initializes
    @wire(getCandidateFieldSetOptions)
    wireCandidateFieldSetOptions(result) {
        const { data, error } = result;
        if (data) {
            this.candidateFieldSetOptions = data;
        } else if (error) {
            console.error(error);
        }
    }
    
    @wire(getModalFieldSetOptions)
    wireModalFieldSetOptions(result) {
        const { data, error } = result;
        if (data) {
            this.modalFieldSetOptions = data;
        } else if (error) {
            console.error(error);
        }
    }
    
    @wire(getJobAppFieldSetOptions)
    wireJobAppFieldSetOptions(result) {
        const { data, error } = result;
        if (data) {
            this.jobAppFieldSetOptions = data;
        } else if (error) {
            console.error(error);
        }
    }
    

    // handle save settings
    handleSaveSettings() {
        // Prepare data to save
        const settingsToSave = {
            candidateFieldSet: this.selectedCandidateFieldSet,
            modalFieldSet: this.selectedModalFieldSet,
            jobAppFieldSet: this.selectedJobAppFieldSet,
            showInaccessibleFields: this.showInaccessibleFields
        };

        // Call the server to save settings
        saveProgramSettings({ settings: settingsToSave })
            .then(result => {
                // Handle the result as needed
            })
            .catch(error => {
                // Handle errors
            });
    }
}


