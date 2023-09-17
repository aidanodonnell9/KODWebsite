import React from 'react';
import '../../App.css';
import Abtus from '../abtus';
import './about-us.css'
import Aboutustext from '../aboutus-text';

export default function Aboutus() {
    return <>
        <div className='allth'>
            <div className='abhead'>
                <Abtus />
            </div>
            <div className='abustext'>
                <Aboutustext />
            </div>
        </div>
    </>;
}