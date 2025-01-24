const fs = require('fs');

const filePath = './article.txt';




function processingData(string){
    //to list
    string=string.toLowerCase()
    string = string.replace(/[,!.?™('“”'')12@$’345\[\]67890_;:'"\n\r/\\\']/g, ' ');
    string= string.split(' ')
    string = string.filter(value => value !== '');


    //count
    const wordcount= string.reduce((count,value)=>{
        count[value]= (count[value]||0)+1
        return count
    },{})

    const sortedWordCount = Object.entries(wordcount)
        .sort((a, b) => b[1] - a[1]); // Sort by value in descending order

    return sortedWordCount;

}

fs.readFile(filePath, 'utf8', (err, data) => {
    let processedData=processingData(data)
    console.log(processedData)


});



//zipf law