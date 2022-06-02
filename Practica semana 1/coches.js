
let accion = true;
let opcion = 0;
let vtop = 0;
let i=0
let flag = true;




function generaValoresAleatorios() {
    opcion = Math.round(Math.random() * (7  - 1));
    
}

function Empieza() {
   if(flag==true){
      flag=false 
    let acumulador=[100,100,100,100,100,100]
     ganador=[0,0,0,0,0,0]
    interval = setInterval(() => {
    
       
       generaValoresAleatorios(); 
       console.log(opcion)
      switch(opcion){
          case 1:
            acumulador[0]=acumulador[0]+50
            document.getElementById("coche").style.left  = acumulador[0] + "px";
            ganador[0]=ganador[0]+1
            break;
        case 2:
            acumulador[1]=acumulador[1]+50
            document.getElementById("coche2").style.left  = acumulador[1] + "px";
            ganador[1]=ganador[1]+1
        break;
        case 3:
            acumulador[2]=acumulador[2]+50
            document.getElementById("coche3").style.left  = acumulador[2] + "px";
            ganador[2]=ganador[2]+1
            break;
        case 4:
            acumulador[3]=acumulador[3]+50
            document.getElementById("coche4").style.left  = acumulador[3] + "px";
            ganador[3]=ganador[3]+1
            break;
         case 5:
            acumulador[4]=acumulador[4]+50
            document.getElementById("coche5").style.left  = acumulador[4] + "px";
            ganador[4]=ganador[4]+1
            break;
         case 6:
            acumulador[5]=acumulador[5]+50
            document.getElementById("coche6").style.left  = acumulador[5] + "px";
            ganador[5]=ganador[5]+1
                break;
         default:
            break; 
           
      }
     
     if(ganador[0]===22 )
     {
         window.alert("The winner is the purple car")
      clearInterval(interval);
     }
     
     else if(ganador[1]===22)
     {
        window.alert("The winner is the green car.")
        clearInterval(interval);
     }
     else if(ganador[2]===22)
     {
        window.alert("The winner is the grey car.")
        clearInterval(interval);
     }
     else if(ganador[3]===22)
     {
        window.alert("The winner is the blue car.")
        clearInterval(interval);
     }
     else if(ganador[4]===22)
     {
        window.alert("The winner is the yellow car")
        clearInterval(interval);
     }
     else if(ganador[5]===22)
     {
        window.alert("The winner is the brown car")
        clearInterval(interval);
     }

    
    
}, 250); 
   }
   else {
      window.alert("Restart the race to continue")
   }
}


function Reinicio() {
   flag=true
    document.getElementById("coche").style.left  = 150 + "px";
    document.getElementById("coche2").style.left  = 150 + "px";
    document.getElementById("coche3").style.left  = 150 + "px";
    document.getElementById("coche4").style.left  = 150 + "px";
    document.getElementById("coche5").style.left  = 150 + "px";
    document.getElementById("coche6").style.left  = 150 + "px";
    
}