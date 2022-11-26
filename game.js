const my_card = [
    {name: 'aa' , id : 1},
    {name: 'bb' , id : 2},
    {name: 'cc' , id : 3},
    {name: 'aa' , id : 1},
    {name: 'bb' , id : 2},
    {name: 'cc' , id : 3},
    ];

let tor = 0
let tor1 = ""

init_game()

function init_game(){
    shake()
    shake()
    shake()

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
        document.getElementById(`img${x}`).src = `card/${my_card[x].name}.jpg`
        tor++
        if (tor == 2){
            if( Similar(x , tor1) == true){
                hidden()
                tor = 0
                tor1 = x
            }
            else{
                back()
            }
        } 
    }
}

function Similar(x , y){
    if (my_card[x].id == my_card[y].id){
        setTimeout(
            ()=> {
                document.getElementById
            },
            1000
        );
    }
}

