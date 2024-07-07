var rating = 5 // your average rating
var comment = "Best Teacher ever. ❤" //your average comment
var opt = document.getElementsByClassName("question-answer")
var textarea = document.getElementsByTagName("textarea")
for(var i = 0;i<opt.length;i++){
  var isTextArea = false;
  for(var j=0;j<textarea.length;j++){
    if(opt[i].children[0]==textarea[j]) isTextArea = true;
  }
  if(!isTextArea){
    opt[i].getElementsByTagName("input")[rating-1].click()
  }
  else{
    opt[i].children[0].textContent = comment
  }
}
