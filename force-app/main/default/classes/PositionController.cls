public with sharing class PositionController {
    //ModifiedBy Anshul
    public static List<Position__c> getAllPositions(){
        return [SELECT Id, Name, Department__c  
                FROM Position__c];
    }

    //Requirement 1
    public static List<Position__c> getPositionByName(String NameOfPosition)
        
    {
        
        return [select Name,Department__c,Education__c,Job_Description__c,Location__c,
                
                Pay_Grade__c,Programming_Languages__c,Salary_Range__c,
                
                Skills_Required__c,Status__c from position__c where Position__c.Name=:NameOfPosition];
        
        
        
    }
    //Requirement 3
    public static List<Position__c> getPositionsByStatus(String PositionStatus)
        
    {
        
        return [select Name,Department__c,Education__c,Job_Description__c,Location__c,
                
                Pay_Grade__c,Programming_Languages__c,Salary_Range__c,
                
                Skills_Required__c,Status__c from position__c where Position__c.Status__c=:PositionStatus];
        
        
        
    }
    
}