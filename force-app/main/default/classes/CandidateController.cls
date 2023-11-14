/*public with sharing class CandidateController {
    @AuraEnabled(cacheable=true)
    public static List<Candidate__c> getCandidates() {
        // Query Candidate records from your Salesforce org
        List<Candidate__c> candidates = [SELECT Name, Email__c, Phone__c, Position__c FROM Candidate__c];

        return candidates;
    }
}*/
public with sharing class CandidateController {
    @AuraEnabled(cacheable=true)
    public static List<Job_Application__c> getCandidates() {
        // Query Candidate records from your Salesforce org
        List<Job_Application__c> candidates = [SELECT Applicant_Name__c, Name, Status__c FROM Job_Application__c];

        return candidates;
    }
}
