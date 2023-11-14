public with sharing class ProgramSettingsController {

    public class FieldSetOption {
        @AuraEnabled
        public String value { get; set; }
        @AuraEnabled
        public String label { get; set; }
    }

    @AuraEnabled
    public static List<FieldSetOption> getCandidateFieldSetOptions() {
        List<FieldSetOption> options = new List<FieldSetOption>();
        
        // Replace 'YourObject__c' and 'YourFieldSetName' with the appropriate object and field set name
        String objectName = 'Candidate__c';
        String fieldSetName = 'Candidate_FieldSet_Tiles';
        
        // Get the field set
        Schema.DescribeSObjectResult describeResult = Candidate__c.SObjectType.getDescribe();
        Schema.FieldSet fieldSet = describeResult.fieldSets.getMap().get(fieldSetName);
        
        if (fieldSet != null) {
            for (Schema.FieldSetMember field : fieldSet.getFields()) {
                FieldSetOption option = new FieldSetOption();
                option.value = field.getFieldPath();
                option.label = field.getLabel();
                options.add(option);
            }
        }
        
        return options;
    }
    @AuraEnabled
    public static List<FieldSetOption> getModalFieldSetOptions() {
        List<FieldSetOption> options = new List<FieldSetOption>();
        
        // Replace 'YourObject__c' and 'YourFieldSetName' with the appropriate object and field set name
        String objectName = 'Candidate__c';
        String fieldSetName = 'Candidate_FieldSet_Modal';
        
        // Get the field set
        Schema.DescribeSObjectResult describeResult = Candidate__c.SObjectType.getDescribe();
        Schema.FieldSet fieldSet = describeResult.fieldSets.getMap().get(fieldSetName);
        
        if (fieldSet != null) {
            for (Schema.FieldSetMember field : fieldSet.getFields()) {
                FieldSetOption option = new FieldSetOption();
                option.value = field.getFieldPath();
                option.label = field.getLabel();
                options.add(option);
            }
        }
        
        return options;
    }
    @AuraEnabled
    public static List<FieldSetOption> getJobAppFieldSetOptions() {
        List<FieldSetOption> options = new List<FieldSetOption>();
        
        // Replace 'YourObject__c' and 'YourFieldSetName' with the appropriate object and field set name
        String objectName = 'Job_Application__c';
        String fieldSetName = 'JobApplication_FieldSet_Tiles';
        
        // Get the field set
        Schema.DescribeSObjectResult describeResult = Job_Application__c.SObjectType.getDescribe();
        Schema.FieldSet fieldSet = describeResult.fieldSets.getMap().get(fieldSetName);
        
        if (fieldSet != null) {
            for (Schema.FieldSetMember field : fieldSet.getFields()) {
                FieldSetOption option = new FieldSetOption();
                option.value = field.getFieldPath();
                option.label = field.getLabel();
                options.add(option);
            }
        }
        
        return options;
    }
   
    @AuraEnabled
    public static void saveProgramSettings(Map<String, Object> settings) {
        // Implement logic to save settings to a custom object or any other data store
    }
}
    
    // Repeat the above method for 'getModalFieldSetOptions' and 'getJobAppFieldSetOptions'

