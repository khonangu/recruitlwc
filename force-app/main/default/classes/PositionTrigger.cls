trigger PositionTrigger on Position__c (before update) {
    for (Position__c position : Trigger.new) {
        Position__c oldPosition = Trigger.oldMap.get(position.Id);
        if (position.Status__c == 'Closed' && oldPosition.Status__c != 'Closed') {
            position.ClosedDate__c = System.now();
        }
    }
}
