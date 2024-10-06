function addBtnStyle(id){
    document.getElementById('btn-donation').classList.remove('bg-lime-400');
    document.getElementById('btn-history').classList.remove('bg-lime-400');

    document.getElementById(id).classList.add('bg-lime-400');
}
function showContentBy(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
function getInputNumberbyId(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}
function getTextNumberbyId(id){
    const inputValue = document.getElementById(id).innerText;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}