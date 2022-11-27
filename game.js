const my_card = [
    {name: 'card/yellow1.jpg' , id : 1},
    {name: 'card/yellow2.jpg' , id : 2},
    {name: 'card/yellow3.jpg' , id : 3},
    {name: 'card/purpil1.jpg' , id : 4},
    {name: 'card/purpil2.jpg' , id : 5},
    {name: 'card/purpil3.jpg' , id : 6},
    {name: 'card/orange1.jpg' , id : 7},
    {name: 'card/orange2.jpg' , id : 8},
    {name: 'card/orange3.jpg' , id : 9},
    {name: 'card/red1.jpg' , id : 10},
    {name: 'card/red2.jpg' , id : 11},
    {name: 'card/red3.jpg' , id : 12},
    {name: 'card/bloo1.jpg' , id : 13},
    {name: 'card/bloo2.jpg' , id : 14},
    {name: 'card/bloo3.jpg' , id : 15},

    
    {name: 'card/yellow1.jpg' , id : 1},
    {name: 'card/yellow2.jpg' , id : 2},
    {name: 'card/yellow3.jpg' , id : 3},
    {name: 'card/purpil1.jpg' , id : 4},
    {name: 'card/purpil2.jpg' , id : 5},
    {name: 'card/purpil3.jpg' , id : 6},
    {name: 'card/orange1.jpg' , id : 7},
    {name: 'card/orange2.jpg' , id : 8},
    {name: 'card/orange3.jpg' , id : 9},
    {name: 'card/red1.jpg' , id : 10},
    {name: 'card/red2.jpg' , id : 11},
    {name: 'card/red3.jpg' , id : 12},
    {name: 'card/bloo1.jpg' , id : 13},
    {name: 'card/bloo2.jpg' , id : 14},
    {name: 'card/bloo3.jpg' , id : 15},
    ];

let tor = 0
let tor1 = ""

init_game()

function init_game(){
    shake()
    shake()
    shake()

    for (let i = 0 ; i <= 29 ; i++){
        document.getElementById(`img${i}`).disabled = false;
    }
    document.getElementById(`play_again`).disabled = true;
    document.getElementById('my_p').innerHTML = ""
}

function shake(){
    let shake_card = my_card.sort(function () {
        return Math.random() - 0.5;
    });
}

function opp(x){
    if (x == tor1){
        return
    }
    else{
        document.getElementById(`img${x}`).src =  my_card[x].name
        tor++
        
        if (tor % 2 == 0){
            if( Similar(x , tor1) == false){
                setTimeout(
                    ()=> {
                        document.getElementById(`img${x}`).src = `card/back.png`
                        document.getElementById(`img${tor1}`).src = `card/back.png`
                        tor1 = ""
                      //  end_game()
                    },
                    900
                );
            }
        } 
        else{
            tor1 = x
        }
    }
}

function Similar(x , y){
    if (my_card[x].id == my_card[y].id){
        setTimeout(
            ()=> {
                document.getElementById(`img${x}`).style.visibility = "hidden"
                document.getElementById(`img${x}`).disabled = true;
                document.getElementById(`img${y}`).style.visibility = "hidden"
                document.getElementById(`img${y}`).disabled = true;
                my_card[x].id = undefined
                my_card[y].id = undefined
                return true
            },
            900
        );
    }
    return false
}

function end_game(){
    led cardsort = my_card
    cardsort.sort();
    cardsort.sort(function(a,b){return a-b;});
    
    if (cardsort[cardsort.length - 1] == undefined){
        document.getElementById('my_p').innerHTML += "TADAMMM!"
        document.getElementById(`play_again`).disabled = false;
        return true
    }
    else {return false}
}
