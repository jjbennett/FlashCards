({
    setCard : function(component) {
        var index = component.get("v.index");
        var flashcards = component.get("v.flashCards");
        var flashcard = flashcards[index];
        
        component.set("v.flashCard", flashcard);
    },
    
    resetCard : function(component) {
        var side = component.get("v.side");
        console.log('reset');
        component.set("v.index", 0);
        if (side == 'Front') {
            this.flipCard(component);
        }
        this.setCard();
    },
    
    nextCard : function(component) {
        var side = component.get("v.side");
        var size = component.get("v.flashCards").length;
        var index = component.get("v.index");
        index++;
        if (index >= size) {
            component.set("v.index", 0);
        } else {
            component.set("v.index", index);
        }
        this.setCard(component);
        if (side == 'Front') {
            this.flipCard(component);
        }
    },
    
    prevCard : function(component) {
        var side = component.get("v.side");
        var size = component.get("v.flashCards").length;
        var index = component.get("v.index");
        index--;
        if (index < 0) {
            component.set("v.index", size - 1);
        } else {
            component.set("v.index", index);
        }
        this.setCard(component);
        if (side == 'Front') {
            this.flipCard(component);
        }
    },
    
    flipCard : function(component, event, helper) {
        var side = component.get("v.side");
        var flashcard = component.find("flashcard");
        
        $A.util.toggleClass(flashcard, "flipped");
        if (side == 'Front') {
            component.set("v.side", 'Back');
        } else {
            component.set("v.side", 'Front');
        }
    },
    
    clearCard : function(component) {
        var clearEvt = component.getEvent("clearFlashCard");
        
		component.set("v.flashCards", "");
        component.set("v.flashCard", "");
        
        clearEvt.fire();
    }
})