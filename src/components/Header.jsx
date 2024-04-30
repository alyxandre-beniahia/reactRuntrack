import React from 'react'

function Header({score, attempts}) {
    return (
      <header className="py-4">
        <div className="container mx-auto">
          <p>Score: {score}</p>
          <p>Attempts: {attempts}</p>
        </div>
      </header>
    );
  }

export default Header