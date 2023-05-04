let user_score=0;
let comp_score=0;
const userscore_span=document.getElementById("user-score");
const compscore_span=document.getElementById("comp-score");
const board_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

function getcompchoice()
{
    const choice=['r','p','s'];
    const randnum=Math.floor(Math.random()*3);
    return choice[randnum];
}

function lose()
{
    comp_score++;
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML="You Lose";
}

function win()
{
    user_score++;
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML="You Win";
}

function draw()
{
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML="Draw";
}

function game(userchoice)
{
    const compchoice=getcompchoice();

    switch(userchoice+compchoice)
    {
        case("rp"):
        case("ps"):
        case("sr"):lose();
        break;

        case("pr"):
        case("sp"):
        case("rs"):win();
        break;

        case("pp"):
        case("ss"):
        case("rr"):draw();
        break;
    }
}

function main()
{
    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissor_div.addEventListener('click',function(){
        game("s");
    })

}

main();