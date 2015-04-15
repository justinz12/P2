var isArmstrong = function(num) {
	num= String (num);
    var sum = 0;
	for (var i=0; i<num.length; ++i)
	     sum = sum + Math.pow(num[i],num.length);
    if (num == sum)
         return true;
     else return false;
}


var allArmstrongs= function (){
	var result="";
for (var i=1; i<100000; i++) {
	if(isArmstrong(i)) 
		result = result + String(i) + "," ;
}
	return result;


	}


var allSubstrings1 = function(s){
	//abcdef
	var result="";
	for(var i=0; i<=s.length; i++) {
		for(var j=i+1; j<=s.length;j++){
			//alert(s.substring(i,j));
			result = result + s.substring(i,j) + ",";
			//result=result+s.substring(j,i)+ ",";
		}
           
	}
return result;

}












var maxWord = function (wstring) {
	'use strict';
	var mylist = wstring.split(" "); 
	var longest= "";
	for (var i = 0; i < mylist.length; ++i ){
		var word = mylist[i];
		if(longest.length<=word.length){ 
			longest= word; }
	}

return longest;

}