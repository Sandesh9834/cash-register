var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-paid");
var btnReturn = document.querySelector("#cash-return");
var displayErrorMessage = document.querySelector("#error");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function cashToReturn(returnAmount)
{
      if(cashGiven.value > billAmount.value)
      {
            for(var i = 0; i<notesAvailable.length; i++)
            {
                  const numberOfNotes = Math.trunc(returnAmount/notesAvailable[i]);
                  returnAmount = returnAmount % notesAvailable[i];
                  noOfNotes[i].innerText = numberOfNotes;
            }
      }
      displayErrorMessage.innerText = "If you do not have enough money wash plates!";
      
}

function clickEventHandler()
{
      if(billAmount.value>0)
      {
            const returnAmount = cashGiven.value - billAmount.value;
            cashToReturn(returnAmount);
      }
      else
      {
            displayErrorMessage.innerText = "Enter valid Bill Amount ";
      }
}

btnReturn.addEventListener("click", clickEventHandler)