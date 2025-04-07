import React from 'react';
import pro from '../media/photo_2025-04-05_14-54-00.jpg';

const Nav = () => {

    const email = 'esraelzerihun3@gmail.com';

    const links = [
        {name: 'Home'},
        {name: 'About'},
        {name: 'Skills'},
        {name: 'Services'},
        {name: 'Contact'},
        {name: 'Faq'}
    ]

  return (
    <>
      <div className="nav">
            <div className="header">
                <div className="profileImage">
                    <img src={pro} alt="" />
                </div>
                <div className="discription">
                    <p>{email}</p>
                </div>
            </div>
            <div className="navLinks">         
                <ul>
                    {links.map((link)=>(
                        <li>{link.name}</li>
                    ))}
                </ul>
            </div>
      </div>
    </>
  )
}

export default Nav
