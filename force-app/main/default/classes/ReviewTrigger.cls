trigger ReviewTrigger on Review__c (after insert, after update, after delete) {
    if (Trigger.isInsert || Trigger.isUpdate || Trigger.isDelete) {
        ReviewHandler.updateJobApplicationFields(Trigger.newMap.keySet());
    }
}
