trigger JobApplicationTrigger on Job_Application__c (before update) {
    for (Job_Application__c jobApp : Trigger.new) {
        Job_Application__c oldJobApp = Trigger.oldMap.get(jobApp.Id);
        if (jobApp.Status__c == 'Hired' && oldJobApp.Status__c != 'Hired') {
            // Update the related Position record to Closed
            Position__c relatedPosition = [SELECT Id, Status__c FROM Position__c WHERE Id = :jobApp.Position__c LIMIT 1];
            relatedPosition.Status__c = 'Closed';
            update relatedPosition;
        }
    }
}
