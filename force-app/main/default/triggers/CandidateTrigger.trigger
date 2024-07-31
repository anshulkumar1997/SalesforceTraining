trigger CandidateTrigger on Candidate__c (before insert) {

    for(Candidate__c can : trigger.new)
    {
        if(can.First_Name__c == null || can.Last_Name__c == null)
        {
            can.addError('First or Last Name cannot be Empty');
        }
    }
    
}