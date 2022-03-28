function rekinat(){
    let skaitlis1=parseInt(document.querySelector('#pirmais').value);
    let skaitlis2=parseInt(document.querySelector('#otrais').value);
    let summa=skaitlis1+skaitlis2;
    //alert(summa);
    document.querySelector('#rez').value=summa;
    location.reload();
}