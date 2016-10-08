public class FlashCardController {
    @AuraEnabled
    public static List<FlashCard__c> getFlashCards(String category) {
        return [SELECT Id, Name, Definition__c, Category__c FROM FlashCard__c WHERE Category__c = :category ORDER BY Order__c];
    }
    
    @AuraEnabled
    public static List<SelectOption> getCategories() {
        List<Schema.PicklistEntry> picklistCategories = FlashCard__c.Category__c.getDescribe().getPicklistValues();
        List<SelectOption> listCategories = new List<SelectOption>();
        
        listCategories.add(new SelectOption('--None--', null));
        for (Schema.PickListEntry entry : picklistCategories) {
            listCategories.add(new SelectOption(entry.getLabel(), entry.getValue()));
        }
        return listCategories;
    }
    
    public class SelectOption {
        public SelectOption(string strLabel, string strValue) {
            label = strLabel;
            value = strValue;
        }
        @AuraEnabled
        public string label { get; set; }
        @AuraEnabled
        public string value { get; set; }
    }
}