const my_card = [
    {name: 'card/yellow1.jpg' , id : 1 , use1: false},
    {name: 'card/yellow2.jpg' , id : 2 , use1: false} ,
    {name: 'card/yellow3.jpg' , id : 3 , use1: false},
    {name: 'card/purpil1.jpg' , id : 4 , use1: false},
    {name: 'card/purpil2.jpg' , id : 5 , use1: false},
    {name: 'card/purpil3.jpg' , id : 6 , use1: false},
    {name: 'card/orange1.jpg' , id : 7 , use1: false},
    {name: 'card/orange2.jpg' , id : 8 , use1: false},
    {name: 'card/orange3.jpg' , id : 9 , use1: false},
    {name: 'card/red1.jpg' , id : 10 , use1: false},
    {name: 'card/red2.jpg' , id : 11 , use1: false},
    {name: 'card/red3.jpg' , id : 12 , use1: false},
    {name: 'card/bloo1.jpg' , id : 13 , use1: false},
    {name: 'card/bloo2.jpg' , id : 14 , use1: false},
    {name: 'card/bloo3.jpg' , id : 15 , use1: false},

    {name: 'card/yellow1.jpg' , id : 1 , use1: false},
    {name: 'card/yellow2.jpg' , id : 2 , use1: false} ,
    {name: 'card/yellow3.jpg' , id : 3 , use1: false},
    {name: 'card/purpil1.jpg' , id : 4 , use1: false},
    {name: 'card/purpil2.jpg' , id : 5 , use1: false},
    {name: 'card/purpil3.jpg' , id : 6 , use1: false},
    {name: 'card/orange1.jpg' , id : 7 , use1: false},
    {name: 'card/orange2.jpg' , id : 8 , use1: false},
    {name: 'card/orange3.jpg' , id : 9 , use1: false},
    {name: 'card/red1.jpg' , id : 10 , use1: false},
    {name: 'card/red2.jpg' , id : 11 , use1: false},
    {name: 'card/red3.jpg' , id : 12 , use1: false},
    {name: 'card/bloo1.jpg' , id : 13 , use1: false},
    {name: 'card/bloo2.jpg' , id : 14 , use1: false},
    {name: 'card/bloo3.jpg' , id : 15 , use1: false},
    ];

let tor = 0
let tor_ago = ""

init_game()

function init_game(){
    for (let i in my_card) {
        my_card[i].use1 = false   
        }
    shake()
    shake()
    shake()
    for (let i = 0 ; i <= 29 ; i++){
        document.getElementById(`img${i}`).style.visibility = "visible"; 
    }
    for (let i = 0 ; i <= 29 ; i++){
    document.getElementById(`img${i}`).src = "card/back.png"
    }
}

function shake(){
    let shake_card = my_card.sort(function () {
        return Math.random() - 0.5;
    });
}

function opp(x){
    if (x == tor_ago){
        return
    }
    else{
        document.getElementById(`img${x}`).src =  my_card[x].name
        tor++
        
        if (tor % 2 == 0){
            if( Similar(x , tor_ago) == false){
                setTimeout(
                    ()=> {
                        document.getElementById(`img${x}`).src = `card/back.png`
                        document.getElementById(`img${tor_ago}`).src = `card/back.png`
                        tor_ago = ""
                        end_game()
                    },
                    900
                );
            }
        } 
        else{
            tor_ago = x
        }
    }
}

function Similar(x , y){
    if (my_card[x].id == my_card[y].id){
        setTimeout(
            ()=> {
                document.getElementById(`img${x}`).style.visibility = "hidden"
                document.getElementById(`img${y}`).style.visibility = "hidden"
                my_card[x].use1 = true
                my_card[y].use1 = true
                return true
            },
            900
        );
    }
    return false
}


function end_game(){
    for (let i in my_card) {
        if (my_card[i].use1 == false) {
        return;                
        }  
    }
    my_error()
    init_game()
}


function my_error(){
    try {
        const err = new Error();
        throw err;
    }
    catch (error){
        Swal.fire({
            title: '<img src="card/winner.gif"  style="width: 400px;">' ,
            text: `You succeeded in ${tor/2} moves! ,` ,
            confirmButtonText: 'PLAY AGAIN',
            })
    }
}

