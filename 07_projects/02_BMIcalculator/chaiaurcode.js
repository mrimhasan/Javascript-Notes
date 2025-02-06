 const form = document.querySelector('form')

// //this use case give you empty value
// //const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
     const weight = parseInt(document.querySelector('#weight').value);
     const results = document.querySelector('#results')

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight ${weight}`;
    }
   else{
     const bmi = (weight/((height*height)/10000)).toFixed(2);
     if(bmi<18.6){
     var massg = "you are in Under Weight"
     }
     else if(bmi>24.9){
       massg = "you are Over weight"
     }
     else{
        massg = "you are in Normal Range"
     }
     results.innerHTML = `<span>your body mass index is ${bmi}</span>`;
     result.innerHTML = massg;
   }
})







