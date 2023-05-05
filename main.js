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

function full(y)
{
    switch(y)
    {
        case 'r':return "Rock";
                 break;
        case 'p':return "Paper";
                 break;
        case 's':return "Scissor";
                 break;
    }
}

function lose(x,y)
{
    comp_score++;
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML=`Computer chose ${full(y)}. You Lose`;
}

function win(x,y)
{
    user_score++;
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML=`Computer chose ${full(y)}. You Win`;
}

function draw(x,y)
{
    compscore_span.innerHTML=comp_score;
    userscore_span.innerHTML=user_score;
    result_div.innerHTML=`Computer chose ${full(y)}. Draw`;
}

function game(userchoice)
{
    const compchoice=getcompchoice();

    switch(userchoice+compchoice)
    {
        case("rp"):
        case("ps"):
        case("sr"):lose(userchoice,compchoice);
        break;

        case("pr"):
        case("sp"):
        case("rs"):win(userchoice,compchoice);
        break;

        case("pp"):
        case("ss"):
        case("rr"):draw(userchoice,compchoice);
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