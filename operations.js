function ludo_decode(x){
    a=100-x
    row=parseInt(a/10)
    if(row%2==0){
        return [row,a%10]
    }else{
        a=(row*10)+(((row+1)*10)-a)-1
        return [row,a%10,]
    }
}

function ludo_pos(x,y){
    cory=4+(x*70)+35
    corx=400+(y*70)+35
    return [corx,cory]
}

function rollpc(){
    if(!p1term){return}
    dice1=parseInt(random(6))+1;
    if(dice1==1){p1start=true}
    if(p1start){moveplayer(1,dice1);}
    p1term=false;p2term=true;
}
function rollyours(){ 
    if(!p2term){return}    
    dice2=parseInt(random(6))+1;
    if(dice2==1){p2start=true}
    if(p2start){moveplayer(2,dice2);}
    p1term=true;p2term=false;
    setTimeout(rollpc, 2000)
}


function moveplayer(p,n){
    if(p==1){
        p1=p1+n;
        if(p1>100) {return;}
        let player_cor=ludo_decode(p1)
        if(ludo[player_cor[0]][player_cor[1]]!=0){
            p1=ludo[player_cor[0]][player_cor[1]]
        }
    }else if(p==2){
        p2=p2+n;
        if(p2>100) {return;}
        let player_cor=ludo_decode(p2)
        if(ludo[player_cor[0]][player_cor[1]]!=0){
            p2=ludo[player_cor[0]][player_cor[1]]
        }
    }
}




