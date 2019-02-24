let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20, 30];

sockMerchant(n, ar);

function sockMerchant(n, arr) {

    let meias = [{
        cor: 0,
        quantidade: 0
    }]
    let contador = 0;
    let quantidade = 0;
    let ar = arr.sort();

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            meias[0] = {
                cor: ar[i],
                quantidade: 1
            };
        } else {

            if (ar[i] == meias[contador].cor) {
                meias[contador].quantidade += 1;
            } else {
                contador++;
                meias[contador] = {
                    cor: ar[i],
                    quantidade: 1
                }
            }
        }
    }
    for(let k = 0; k < meias.length; k++){
        if((meias[k].quantidade % 2)!=0){
            meias[k].quantidade -=1;
        }

        if(meias[k].quantidade > 0){
           quantidade += meias[k].quantidade;
        }
    }
   return quantidade/2;
}