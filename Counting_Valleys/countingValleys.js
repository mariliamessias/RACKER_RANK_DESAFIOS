n = 10;
s = ["D","D","U","U","U","U","D","D", "D", "D"];

countingValleys(n, s)
function countingValleys(n, s) {

    let nivel = 0;
    let contador = 0;
    for(let i = 0; i < n; i++){
        s[i] == "D" ? nivel-- : nivel++; 
        
        if((nivel == -1)&&(s[i]=="D")){
            contador++;
        }
    }
   return contador;

}