public with sharing class ReadOnlyPositionController {
    @AuraEnabled(cacheable=true)
    public static List<Position__c> getPositions() {
        return [SELECT Id, Name, Status__c, Opening_Date__c, CloseDate__c, Max_Pay__c, Min_Pay__c FROM Position__c];
    }
}
