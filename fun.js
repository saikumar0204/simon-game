var ref={
  0:"r",
  1:"b",
  2:"y",
  3:"g"
}

var game={
  in:[],
  out:[],
  level:0
}

var start=document.getElementById('s')
var r=document.getElementById('r')
var b=document.getElementById('b')
var y=document.getElementById('y')
var g=document.getElementById('g')

var te= document.getElementById('first')
var endte =document.getElementById('end-text')


function opp(){
  start.classList.remove('hidden')
  endte.innerHTML=''
}

start.addEventListener('click',newgame)
//Start New game
function newgame(){
  start.classList.add('hidden')
  cleargame()
}

//Delete old game
function cleargame(){
  game.level=0
  game.in=[]
  game.out=[];
  te.innerHTML='<h3>LEVEL '+(game.level+1)+'</h3>'
  te.style.marginLeft='43%'
  te.classList.add('active')
//Add Levels
  addLevel()

}
// console.log(input)
// console.log(output)
// console.log(level)
function addLevel(){
  endte.innerHTML='<h3>Wait for Computer</h3>'
  game.level++;
  var t=Math.floor(Math.random()*4)
  // console.log("t is:"+t)
  game.out.push(t)
  
  
  let i=0;
  var interval=400;
  var moves=setInterval(() => {
      interval+=100
      var z;
      switch(game.out[i]){
        case 0:
          r.classList.add('animate')
          z=r
          break;
        case 1:
          b.classList.add('animate')
          z=b
          break;
        case 2:
          y.classList.add('animate')
          z=y
          break;
        case 3:
          g.classList.add('animate')
          z=g
          break;  
        default:
          console.log("Something is wrong at this point")
          start.classList.remove('hidden')
      }
    setTimeout(function(){
      z.classList.remove('animate')
    },400)
    // console.log("i is: "+i)
    i++;
    if(i>=game.level){
      clearInterval(moves)
      checkInput()
    }
  }, interval);
  
}

function checkInput(){
  game.in=[]
  endte.innerHTML='<h3>Give your Input</h3>'
  
  r.addEventListener('click',rf)
  b.addEventListener('click',bf)
  y.addEventListener('click',yf)
  g.addEventListener('click',gf);

  // addvalues(value)
  let i=0;
  var w= setInterval(() => {
    i++;
    
    addvalues()
    if(i>0){clearInterval(w)}
    
  }, 4000);
  
}

function rf(e){
  
    game.in.push(0)
    console.log('r')
    // addvalues()
  
}

function bf(e){
  game.in.push(1)
  console.log('b')
    // addvalues()
}

function yf(e){
  game.in.push(2)
    console.log('y')
    // addvalues()
}

function gf(e){
  game.in.push(3)
    console.log('g')
    // addvalues()
}


function addvalues(){
  console.log('Function reached here')
  let flag=1;
  if(game.length!=0){
    console.log('Function reached point 2')
    for(let i=0;i<game.out.length;i++){
        if(game.in[i]!=game.out[i]){
          flag=0
        }
    }
    if(flag==0){
      te.innerHTML='<h3>Oops... Try New Game</h3>'
      te.style.marginLeft='40%'
      // te.innerHTML=''
      opp()
    }
    else {
      if(game.level==20){
        te.innerHTML='<h3>Wow.. You won the Game</h3>'
        // tp.innerHTML='<h4> Start a fresh Game</h4>'
        opp()
      }
      else{
        var i=-1;
        var p=setInterval(() => {
          te.innerHTML='<h3>Proceeding to Next level ..</h3>';
          te.style.marginLeft='35%'
          i++;
          if(i>0){
            te.innerHTML='<h3>LEVEL '+(game.level+1)+'</h3>';
            te.style.marginLeft='43%'
            addLevel()
            clearInterval(p)
          }
            
        }, 900);

        
      }
      
    }
  }else{
    te.innerHTML='<h3>Oops... Try New Game</h3>'
    opp()
  }
  
}

