import React from 'react'
import { Link as Scroll } from 'react-scroll';

export const Fotter = () => {
    return (
        <div className='fotter'>
            <div className='inner'>
                <nav className='fotter-link'>
                    <ul>
                        <li>
                            <Scroll to="profile">Profile</Scroll>
                        </li>
                        <li>
                            <Scroll to="skill">Skill</Scroll>
                        </li>
                        <li>
                            <Scroll to="work">Work</Scroll>
                        </li>
                        <li>
                            <Scroll to="information">Information</Scroll>
                        </li>
                    </ul>
                </nav>
                <p className='copyright'>Copyright &copy; 2022 Yoichi's Portfolio All Rights Reserved.  </p>

            </div>
            
        </div>
    )
}