
    document.querySelector('.kanyebutton').addEventListener('click', kanye) 

    function kanye(){
    
      const kanye=document.querySelector('.kanyeQuote').value
     
      const url = `https://api.kanye.rest`
    // const url = `https://api.funtranslations.com/translate/yoda.json?text=${userInput}`

       fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      
      console.log(data) 
     
     
      document.querySelector('.kanyeQuote').innerText=data.quote
    //   document.querySelector('.transHere').innerText=data.contents.translated
    //   document.querySelector('.byHere').innerText=data.contents.translation
    
            yodaTranslation() 

    function yodaTranslation(){
    
        // const userInput=document.querySelector('input').value
       
      //   const url = `https://api.kanye.rest`
      const url = `https://api.funtranslations.com/translate/yoda.json?text=${document.querySelector('.kanyeQuote').innerText=data.quote}`
  
         fetch(url) 
      .then(res => res.json()) // parse response as JSON 
      .then(data => { 
        
        console.log(data) 
       
       
        // document.querySelector('.quoteHere').innerText=data.contents.text
        document.querySelector('.transHere').innerText=data.contents.translated
        document.querySelector('.byHere').innerText=data.contents.translation
      
        
  
       }) 
     
      .catch(err => { 
          console.log(`error ${err}`) 
      });
    // .catch(err => { 
    //     console.log(`error ${err}`) 
    // });

    }

     }) 
    
  
      }


 
