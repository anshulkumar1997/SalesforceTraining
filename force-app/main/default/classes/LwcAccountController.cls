public with sharing class LwcAccountController {
    public LwcAccountController() {

    }
    
    @AuraEnabled(cacheable=true)//to use apex in lightning web component 
    public static List<Account> showAllAccounts(Double accrev){
        try{
            return[select Name,Type,AnnualRevenue from Account
            where type='Customer' and
            AnnualRevenue > :accrev
            order by Name
            LIMIT 200];
        } catch (Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}
