var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-paid");
var btnReturn = document.querySelector("#cash-return");
var displayErrorMessage = document.querySelector("#error");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function clickEventHandler()
{
      if(billAmount.value>0)
      {
            if(cashGiven.value < billAmount.value)
            {
                  displayErrorMessage.innerText = "Do you want to wash plates?";
            }
            else if(cashGiven.value === billAmount.value)
            {
                  displayErrorMessage.innerText = "You are good to go";
            }
            else
            {
                  returnAmount = cashGiven.value - billAmount.value;
                  returnCash(returnAmount);
            } 
      }    
      else
      {
            displayErrorMessage.innerText = "Enter valid Bill Amount";
      }
}

function returnCash(returnAmount)
{
      
      for(var i = 0; i<notesAvailable.length; i++)
      {
            const numberOfNotes = Math.trunc(returnAmount/notesAvailable[i]);
            returnAmount = returnAmount % notesAvailable[i];
            noOfNotes[i].innerText = numberOfNotes;
      }
}

btnReturn.addEventListener("click", clickEventHandler)