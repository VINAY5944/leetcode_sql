/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

const l=sentences.length;
let count=0;

for(let i=0;  i<l;i++){
  let sub_arr=sentences[i].split(" ").length
  

  if(count<sub_arr){
      count=sub_arr
  }

}
return count

}
;