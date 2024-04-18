import React from 'react';

function Header(){
    const handleClick = () => {
        alert('You clicked the button!');
    };

    return (
        <header>
         <h1>Test Your Knowledge #1</h1>
         <button onClick={handleClick}>Undo Edits</button>
      </header>
    );
}

export default Header;