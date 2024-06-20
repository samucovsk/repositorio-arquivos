const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.input-group');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-]\w+)*$/;

function setError(caduser){
    campos[caduser].style.border = '1px solid #e63636';
}

function nameValidate(){
    if(campos[0].value.length < 3) 
        {
        console.log('O nome deve ter no mínimo 3 caracteres');
    }
    else
    {
        console.log('Nome coaarreto')
    }

};
   
