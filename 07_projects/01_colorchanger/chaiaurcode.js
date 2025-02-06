const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach( (button) => {
    //console.log(button)
    button.addEventListener('click',function(e){
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue'
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            case 'aqua':
                body.style.backgroundColor = 'aqua'
                break;
        }
    })
})