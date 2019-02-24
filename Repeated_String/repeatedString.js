let s = "gfcaaaecbg";
let n = 547602;

repeatedString(s, n);

function repeatedString(s, n) {
    let sNew = s.split("");
    let nNew = [];
    let contador = 0;
    let quantidade = 0;
 
    if ((n>=1 && (n<= Math.pow(10,6))) && (sNew.length>=1 && sNew.length<=100)){
        for(let i = 0; i < n; i++){
            if (contador < s.length){
                nNew.push(sNew[contador]);
                contador++;
            }else {
                contador = 0;
                i--;
            }
        }

        for(let j = 0; j< nNew.length; j++){
            if(nNew[0]==nNew[j]){
                quantidade++;
            }
        }

        return quantidade;
 } else {
    return n;
 }
    
}