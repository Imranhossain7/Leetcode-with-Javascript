/**
 * @param {string[]} sentences
 * @return {number}
 */


var mostWordsFound = function(sentences) {
    let total = 0;
    for(i=0;i<sentences.length;i++){
        let words = sentences[i].split(" ").length;
        if(words>total){
            total = words;
        }
    }
            return total;

};