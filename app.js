const tag1 = document.querySelector("#div")
const plus = document.querySelector("#plus")
const minus = document.querySelector('#minus')
const nol = document.querySelector('#nol')
const p = document.querySelector('#p')

plus.style.color=('blue')
minus.style.color=('red')
plus.style.border = ('1px solid white')
minus.style.border = ('1px solid white')
nol.style.border = ('1px solid white')
nol.style.color=('green')
plus.onclick = function () {
let a = div.textContent=div.textContent
if(a<99){
    let b=div.textContent=div.textContent*1+1
if (b > 33){
    p.textContent=p.textContent="Alhamdulillah"
}
if (b >66){
    p.textContent=p.textContent="Allohu akbar"
}
}else{
    div.textContent = 0
    p.textContent=p.textContent="Subhanalloh"
}
}
minus.onclick = function () {
    let a = div.textContent=div.textContent
    if (a > 0){
        div.textContent=div.textContent*1 -1
    }
   
}
nol.onclick = function() {
    div.textContent = 0
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
   
    if(name =="+"){
     
            let a = div.textContent=div.textContent
            if(a<99){
                let b=div.textContent=div.textContent*1+1
            if (b > 33){
                p.textContent=p.textContent="Alhamdulillah"
            }
            if (b >66){
                p.textContent=p.textContent="Allohu akbar"
            }
            }else{
                div.textContent = 0
                p.textContent=p.textContent="Subhanalloh"
            }
          
        
    }
    if(name=="-"){
        let a = div.textContent=div.textContent
    if (a > 0){
        div.textContent=div.textContent*1 -1
    }
    }
    if(name=="Enter"){
        div.textContent = 0
    }

 
    
  }, false);