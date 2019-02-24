let c = [0, 0, 0, 0, 1, 0];

jumpingOnClouds(c);

function jumpingOnClouds(c) {

    let passos = 0;

    for(let i = 0; i<=c.length; i++){
       if(c[i+2] == 0){
            i+=1;
            passos++;
       }else if(c[i+1]==0){
            passos++;
       }
    }
    return passos;
}