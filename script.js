

var count = document.getElementById('count');
var input = document.getElementById('input');
var vowels = document.getElementById('vowNB');

function wordCounter(text) {
    
    var text = input.value.split(' ');
    var wordCount = 0;
    var vCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        wordCount++;
      }
      var texte =  text[i].split("");
      for (var j = 0; j < text.length; j++)  {
      if(texte[j] == 'a' || texte[j] == 'e' || texte[j] == 'i' || texte[j] == 'o' || texte[j] == 'u')  {  
        
        vCount++;  }
    }
     
        }
    vowels.innerText = vCount;
    count.innerText = wordCount;
    }

 

    input.addEventListener('keyup', function(e){
        wordCounter(e.target.value);
      });
      