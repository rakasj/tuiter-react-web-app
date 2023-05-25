import true1 from "./boolean-variables"
import false1 from "./boolean-variables"

console.log('If else');
if(true1) {
   console.log('true1');
}

if(!false1) {
   console.log('!false1');
} else {
   console.log('false1');
}

function IfElse() {
    return(
        <div>
           <h2>If Else</h2>
           { true1 && <p>true1</p> }
           { !false1 ? <p>!false1</p> : <p>false1</p> }
        </div>
     )
     
}

export default IfElse;
