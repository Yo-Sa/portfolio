import React from 'react'
import topimg from '../images/b.jpg'
import { Link as Scroll } from 'react-scroll';

export const Header = () => {
    
    return (
        <div>
            <header className="App-header">
                    <div className='contents-nav'>
                        <p>
                            <Scroll to="profile">Profile</Scroll>
                        </p>
                        <p>
                            <Scroll to="skill">Skill</Scroll>
                        </p>
                        <p>
                            <Scroll to="work">Work</Scroll>
                        </p>
                        <p>
                            <Scroll to="info">Information</Scroll>
                        </p>
                    </div>
            </header>
            <div className="title-header">
                        <img src={topimg} alt="トップ"/>
                        <p>Yoichi's Portfolio</p>
            </div>
        </div>
    )
}