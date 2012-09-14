var WordsFun = function(){
	
	var word = "",	
		alertText = document.getElementById("alert")
		wordBank = "";
		
	this.words = [];
		
	this.setWord = function(){
		word = document.getElementById("word").value;
		this.words.push(word);
		this.getWords();
	};
	
	this.getWords = function(){
		wordBank = "";
		for(i = 0; i < this.words.length; i++)
			wordBank += this.words[i] + ", ";
		wordBank = wordBank.substring(0, wordBank.lastIndexOf(','));
		alertText.className = document.getElementById("alert").className.replace('none','');
		alertText.appendChild('You added the word ' + word + '.</br></br>Your new word bank is "' + wordBank + '".');
		document.getElementById("word").value = "";
	};
	
	this.checkAnagram = function(words){
	    var firstWord,
	    	secondWord,
	    	firstWordSorted,
	    	secondWordSorted,
	    	anagramText = ""
	    	usedWords = [];
	    for(i = 0; i < words.length; i++){
	    	firstWord = words[i];
	        for(j = 1; j < words.length; j++){
	        	secondWord = words[j];
	        	if( firstWord !== secondWord && firstWord.length === secondWord.length){
	        		firstWordSorted = Array.prototype.slice.call(words[i]).sort().join("");
	        		secondWordSorted = Array.prototype.slice.call(words[j]).sort().join("");
		            if(firstWordSorted === secondWordSorted){
		            	 anagramText += 'The word ' + words[i] + ' and the word ' + words[j] + ' are anagrams of each other.<br/><br/>';
		            	 usedWords.push(firstWordSorted);
		            }
	            }
	        }
	    }
	    if(anagramText === ""){
	    	alertText.className = document.getElementById("alert").className.replace('none','').className.replace('alert-success', 'alert-error');
	    	alertText.appendChild("You do not have any words in your word bank that are anagrams of each other.<br/><br/>" + 'Your word bank is "' + wordBank + '".');
	    }
	    else{
	    	alertText.className = document.getElementById("alert").className.replace('none','');
	    	alertText.appendChild(anagramText + 'Your word bank is "' + wordBank + '".');
	    }
	    return false;
	};
};
	
window.onload = function(){
	$("#alert").alert();
	var wordsfun = new WordsFun();
	
	document.getElementById("submit").onclick = function(){
		 wordsfun.setWord(); return false;
	};
	
	document.getElementById("fun-option").onchange = function(){
		if(document.getElementById("fun-option").value === "anagram")
			wordsfun.checkAnagram(wordsfun.words);
	}
}