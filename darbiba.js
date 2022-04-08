function reizinat(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='*';
   }
function notirit(){
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value="";
    document.querySelector('#zime').value="";
    document.querySelector('#rez2').value="";
}
function vienads(){
    let zime=document.querySelector('#zime').value;
    let skaitlis2=parseFloat(document.querySelector('#skaitlis').value);
    document.querySelector('#skaitlis').value="";
    let skaitlis1=parseFloat(document.querySelector('#skaitlis1').value);
        if (zime=='*'){
    let rezultats=skaitlis1*skaitlis2;
    document.querySelector('#rez2').value=rezultats;
    }
        if (zime=='+'){
    let rezultats=skaitlis1+skaitlis2;
    document.querySelector('#rez2').value=rezultats;
    }
        if (zime=='-'){
    let rezultats=skaitlis1-skaitlis2;
    document.querySelector('#rez2').value=rezultats;
    }
        if (zime=='/'){
    let rezultats=skaitlis1/skaitlis2;
    document.querySelector('#rez2').value=rezultats;
    }
        if (zime=='^'){
    let rezultats=skaitlis1**skaitlis2;
    document.querySelector('#rez2').value=rezultats;
    }
        if (zime=='v'){
    let rezultats=Math.sqrt(skaitlis1);
    document.querySelector('#rez2').value=rezultats;
    }
}
function kapinat(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='^';
    document.querySelector('#skaitlis').value="";
   }
function kvsakne(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='v';
    let rezultats=Math.sqrt(skaitlis1);
    document.querySelector('#rez2').value=rezultats;
   }
function sind(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='sind';
    skaitlis1=skaitlis1*(Math.PI/180);
    let rezultats=Math.sin(skaitlis1);
    document.querySelector('#rez2').value=rezultats;
   }
   function sinrad(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='sinrad';
    let rezultats=Math.sin(skaitlis1);
    document.querySelector('#rez2').value=rezultats;
   }
function saskaitit(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='+';
   }
function atnemt(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='-';
   }
function dalit(){
    let skaitlis1=document.querySelector('#skaitlis').value;
    document.querySelector('#skaitlis').value="";
    document.querySelector('#skaitlis1').value=skaitlis1;
    document.querySelector('#zime').value='/';
   }

