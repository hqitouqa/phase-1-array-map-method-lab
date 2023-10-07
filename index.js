const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
    
    let newTitle=""
    let backTitle=""
    let newtutorials=[]
    for (const title of tutorials){
      newTitle=title.split(" ")
      let oneTitle= newTitle.map(word => word.charAt(0).toUpperCase()+word.slice(1));
      backTitle=oneTitle.join(" ");
      newtutorials.push(backTitle)
    }
    
    return newtutorials
  }

  
