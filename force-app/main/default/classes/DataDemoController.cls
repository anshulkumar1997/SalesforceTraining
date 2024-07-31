public with sharing class DataDemoController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(String type){
        return [SELECT Id, Name, Type from Account where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :key LIMIT 5];
    }
  
  
  
    /* @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name FROM Account WITH SECURITY_ENFORCED LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static Account getSingleAccount() {
        return [
            SELECT Id, Name, Phone, Type
            FROM Account
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }*/

    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountsWithAddress() {
        return [Select id,BillingCity,BillingCountry,BillingPostalCode,BillingState,BillingStreet
        From Account WHERE BillingCity!=NUll limit 2];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account>  getAccountRecords( Integer noOfRecords){

 

        List<Account> accList = new List<Account>();

        try {

           List<account>  records = [Select id , Name , Website , Phone , Industry from account   limit  :noOfRecords];

 

           /* for(Account ac : records){
                if( ac.Name != NULL && ac.Name.contains(name)){
                    accList.add(ac);
                }
            }*/

            accList.addAll(records);

 

            return accList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

 

       
    }
}