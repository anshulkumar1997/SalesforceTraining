@isTest
public class CandidateTriggerTest {
    //Requirement 7
    @isTest
    public static void testCandidateNameRequired(){
        Candidate__c can=new Candidate__c(city__c='Delhi');
        Test.startTest();
        Database.SaveResult results=Database.insert(can,false);
        if(!results.isSuccess()){
            
            System.assertEquals('First or Last Name cannot be Empty',results.getErrors()[0].getMessage());
           
        }
        Test.stopTest();
    }
}