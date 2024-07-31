public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getLatestAccounts() {
      try {
        return [SELECT Name,LastModifiedDate FROM Account order by LastModifiedDate desc LIMIT 10 ]; 
        
      } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
      }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, AccountNumber FROM Account WHERE Name LIKE :key  LIMIT 10];
    }
    
  }