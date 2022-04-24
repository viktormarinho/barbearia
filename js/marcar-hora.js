
const dataInput = document.querySelector('#data');
const hoje = document.querySelector('#hoje');

hoje.addEventListener('change', () =>{
    let disabled = dataInput.disabled;
    if(disabled){
        dataInput.disabled = false;
    }else{
        dataInput.disabled = true;
    }
});
