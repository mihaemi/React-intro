import React from "react";

const Hello = () => {
    // JSX
    // return(
    //     <div className = 'someClass'>
    //         <h1>Hello</h1>
    //     </div>
    // )


    // HTML
    return React.createElement(
        'div', 
        {id: 'Hello', className: 'someClass'}, 
        React.createElement('h1', null, 'Hello'))
}

export default Hello