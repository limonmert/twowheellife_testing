var userChoices=[]
/*first question*/ 
/*button1*/ 


document.querySelector(".b1").addEventListener("mouseover",()=>{
document.querySelector(".b1").style.backgroundColor="#FFC300";
});
document.querySelector(".b1").addEventListener("mouseout",()=>{
    document.querySelector(".b1").style.backgroundColor="#FFD700";
});

document.querySelector(".b1").addEventListener("click",()=>{
    document.querySelector(".testDiv").style.display="none";
    document.querySelector(".testDiv2").style.display="grid";
    userChoices.push("tek silindir");
});
/*button1*/

/*button2*/
document.querySelector(".b2").addEventListener("mouseover",()=>{
    document.querySelector(".b2").style.backgroundColor="#FFC300";
});
document.querySelector(".b2").addEventListener("mouseout",()=>{
    document.querySelector(".b2").style.backgroundColor="#FFD700";
});
document.querySelector(".b2").addEventListener("click",()=>{
    
        
        document.querySelector(".testDiv").style.display="none";
        document.querySelector(".testDiv2").style.display="grid";
        userChoices.push("çift silindir");
});

/*button2*/

/*button3*/
document.querySelector(".b3").addEventListener("mouseover",()=>{
    document.querySelector(".b3").style.backgroundColor="#FFC300";
        });
document.querySelector(".b3").addEventListener("mouseout",()=>{
document.querySelector(".b3").style.backgroundColor="#FFD700";
        });
document.querySelector(".b3").addEventListener("click",()=>{
    
        
        document.querySelector(".testDiv").style.display="none";
        document.querySelector(".testDiv2").style.display="grid";
        userChoices.push("üç silindir");
        });
       
/*button3*/

/*button4*/
document.querySelector(".b4").addEventListener("mouseover",()=>{
    document.querySelector(".b4").style.backgroundColor="#FFC300";
            });
document.querySelector(".b4").addEventListener("mouseout",()=>{
    document.querySelector(".b4").style.backgroundColor="#FFD700";
            });
document.querySelector(".b4").addEventListener("click",()=>{
    
        
        document.querySelector(".testDiv").style.display="none";
        document.querySelector(".testDiv2").style.display="grid";
        userChoices.push("dört silindir");
            });

/*button4*/

/*button5*/
document.querySelector(".b5").addEventListener("mouseover",()=>{
    document.querySelector(".b5").style.backgroundColor="#FFC300";
                });
document.querySelector(".b5").addEventListener("mouseout",()=>{
    document.querySelector(".b5").style.backgroundColor="#FFD700";
                });
document.querySelector(".b5").addEventListener("click",()=>{
    
        
        document.querySelector(".testDiv").style.display="none";
        document.querySelector(".testDiv2").style.display="grid";
        userChoices.push("altı silindir");
                });

/*button5*/
                          
/*first question*/ 

/*second question */
/*button1*/ 
document.querySelector(".b11").addEventListener("mouseover",()=>{
    document.querySelector(".b11").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b11").addEventListener("mouseout",()=>{
        document.querySelector(".b11").style.backgroundColor="#FFD700";
    });
 
        document.querySelector(".b11").addEventListener("click",()=>{
            
            document.querySelector(".testDiv2").style.display="none";
            document.querySelector(".testDiv3").style.display="grid";
            userChoices.push("50cc altı");
        });
        
        

    /*button1*/
/*button2*/
document.querySelector(".b22").addEventListener("mouseover",()=>{
    document.querySelector(".b22").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b22").addEventListener("mouseout",()=>{
        document.querySelector(".b22").style.backgroundColor="#FFD700";
    });
    document.querySelector(".b22").addEventListener("click",()=>{
        
        document.querySelector(".testDiv2").style.display="none";
        document.querySelector(".testDiv3").style.display="grid";
        userChoices.push("50cc-125cc");
    });


/*button2*/
/*button3*/
document.querySelector(".b33").addEventListener("mouseover",()=>{
    document.querySelector(".b33").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b33").addEventListener("mouseout",()=>{
        document.querySelector(".b33").style.backgroundColor="#FFD700";
    });
    document.querySelector(".b33").addEventListener("click",()=>{
        
        document.querySelector(".testDiv2").style.display="none";
        document.querySelector(".testDiv3").style.display="grid";
        userChoices.push("125cc-250cc");
    });


/*button3*/
/*button4*/
document.querySelector(".b44").addEventListener("mouseover",()=>{
    document.querySelector(".b44").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b44").addEventListener("mouseout",()=>{
        document.querySelector(".b44").style.backgroundColor="#FFD700";
    });
    document.querySelector(".b44").addEventListener("click",()=>{
        
        document.querySelector(".testDiv2").style.display="none";
        document.querySelector(".testDiv3").style.display="grid";
        userChoices.push("250cc-500cc");
    });


/*button4*/
/*button5*/
document.querySelector(".b55").addEventListener("mouseover",()=>{
    document.querySelector(".b55").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b55").addEventListener("mouseout",()=>{
        document.querySelector(".b55").style.backgroundColor="#FFD700";
    });
    document.querySelector(".b55").addEventListener("click",()=>{
        
        document.querySelector(".testDiv2").style.display="none";
        document.querySelector(".testDiv3").style.display="grid";
        userChoices.push("500cc-1000cc");
    });


/*button5*/
/*button6*/
document.querySelector(".b66").addEventListener("mouseover",()=>{
    document.querySelector(".b66").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b66").addEventListener("mouseout",()=>{
        document.querySelector(".b66").style.backgroundColor="#FFD700";
    });
    document.querySelector(".b66").addEventListener("click",()=>{
        
        document.querySelector(".testDiv2").style.display="none";
        document.querySelector(".testDiv3").style.display="grid";
        userChoices.push("1000cc üzeri");
    });


/*button6*/
/*second question */

/*third question */
/*button1*/
document.querySelector(".b111").addEventListener("mouseover",()=>{
    document.querySelector(".b111").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b111").addEventListener("mouseout",()=>{
        document.querySelector(".b111").style.backgroundColor="#FFD700";
    });
 
        document.querySelector(".b111").addEventListener("click",()=>{
            
            document.querySelector(".testDiv3").style.display="none";
            document.querySelector(".testDiv4").style.display="block";
            userChoices.push("manuel");
            document.querySelector(".userChoices").textContent="secimleriniz :"+userChoices+" öneriler sıralanıyor..";
            
        });
        



/*button1*/

/*button2*/
document.querySelector(".b222").addEventListener("mouseover",()=>{
    document.querySelector(".b222").style.backgroundColor="#FFC300";
    });
    document.querySelector(".b222").addEventListener("mouseout",()=>{
        document.querySelector(".b222").style.backgroundColor="#FFD700";
    });
 
        document.querySelector(".b222").addEventListener("click",()=>{
            
            document.querySelector(".testDiv3").style.display="none";
            document.querySelector(".testDiv4").style.display="block";
            userChoices.push("otomatik");
            document.querySelector(".userChoices").textContent="secimleriniz :"+userChoices+" öneriler sıralanıyor..";
            
        });
/*button2*/
/*third question */