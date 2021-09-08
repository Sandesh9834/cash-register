var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-paid");
var btnReturn = document.querySelector("#cash-return");
var displayErrorMessage = document.querySelector("#error");
// var displayErrorGif = document.querySelector("#gif");
var img = document.getElementById('gif')
var noOfNotes = document.querySelectorAll(".no-of-notes");

var notesAvailable = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function displayErrorGif()
{
      var sourceOfPicture = "/images/laver-dishes.gif";
      img.src = sourceOfPicture.replace('90x90', '225x225');
      img.display.innerHTML = sourceOfPicture
}

function clickEventHandler()
{
      if(billAmount.value>0)
      {
            if(cashGiven.value < billAmount.value)
            {
                  displayErrorMessage.innerText = "If you do not have enough money wash plates!";
                  displayErrorGif()
            }
            else
            {
                  returnAmount = cashGiven.value - billAmount.value;
                  returnCash(returnAmount);
            } 
      }    
      else
      {
            displayErrorMessage.innerText = "Enter valid Bill Amount ";
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