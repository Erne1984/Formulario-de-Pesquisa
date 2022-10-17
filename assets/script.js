const form   = document.getElementById('formulario')
const campos = document.querySelectorAll('.required')
const emailRegex = /\S+@\S+\.\S+/


form.addEventListener('submit', (event) => {

    event.preventDefault()
    nameValidate();
    emailValidate();
    console.log("teste")

})


function setError(index) {
    campos[index].style.border = "2px solid red";
} 

function removeError(index){
    campos[index].style.border = 'none';
}

function nameValidate(){

    if(campos[0].value.length < 3) 
    {
        setError(0)
    }
    else {
        removeError(0)
    }

}

function emailValidate(){
    if(emailRegex.test(campos[1].value)) {
        removeError(1)
    }
    else
    {
        setError(1)
    }
}
