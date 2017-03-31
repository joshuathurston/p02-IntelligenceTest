//Author: Joshua Thurston

function answerOne()
{
  var answer = document.getElementById("problemOneAnswer");
  if(isNaN(answer.value))
  {
    alert("Must be a number");
  }
  else
  {
    if(answer.value == 987)
    {
      setCookie("answer", 1, 1);
    }
    else
    {
      setCookie("answer", 0, 1);
    }
    window.location.href="problemTwo.html";
  }
}

function answerTwo()
{
  var answer = document.getElementById("problemTwoAnswer");
  var previousAnswer = Number(getCookie("answer"));
  if(answer.value == "yarffej")
  {
    setCookie("answer", previousAnswer+1, 1);
    window.location.href="problemThree.html";
  }
  else
  {
    setCookie("answer", previousAnswer, 1);
    window.location.href="problemThree.html";
  }
}

function answerThree()
{
  var answer = document.getElementById("problemThreeAnswer");
  var previousAnswer = Number(getCookie("answer"));
  if(isNaN(answer.value))
  {
    alert("Must be a number!");
  }
  else
  {
    if(answer.value == 36)
    {
      setCookie("answer", previousAnswer+1, 1);
    }
    else
    {
      setCookie("answer", previousAnswer, 1);
    }
    window.location.href="result.html";
  }
}

function calculateResults()
{
  var previousAnswer = Number(getCookie("answer"));
  previousAnswer /= 3;
  previousAnswer *= 100;
  document.getElementById("result").innerHTML = previousAnswer + "%";
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

