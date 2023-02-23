import React from "react";
import { stack as Burger } from "react-burger-menu";
import { Link as Scroll } from 'react-scroll';
import { useState } from 'react';


export const Menu = () => {

    const [active, setActive] = useState(false);

        if (active) {
        document.body.classList.add('active');
        } else {
        document.body.classList.remove('active');
    }

    return (
        <div className={`hum ${active ? "active" : ""}`} onClick={() => setActive(!active)} >
        
            <Burger >
                <Scroll to="profile">Profile</Scroll>

                <Scroll to="skill">Skill</Scroll>

                <Scroll to="work">Work</Scroll>

                <Scroll to="info">Information</Scroll>

            </Burger>
        </div>
    );
};