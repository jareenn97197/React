import React from 'react'
// function Greet(){
//     return <h1>Hello Neeraj</h1>
// }
const  Greet = () =>{ 
    return React.createElement("div",{id:'hello',className:'world'},
    React.createElement('h1',null,'hello world'));
}

export default Greet
