import React from 'react';
import style from '../style/welcome.module.css';
import {Link} from 'react-router-dom';

export default function Welcome(){
    return (
        <div className={style.WelcomeContainer}>

            <h1> Welcome!</h1>

            <div className={style.WelcomeInfo} >

                <p>It's not only writers who can benefit from this free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your programming and that the tool being created is working well.</p>

                <p>Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.</p>

                <p>If you do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.</p>


            </div>

            <div className={style.actionBtn}>

            <Link exact to="/get_username" style={{ textDecoration: 'none' }} className="primaryBtn d-flex align-items-center mb-3">

                Get your username {""}
            </Link>

            <Link style={{ textDecoration: 'none' }}>Have a invite text? Sign in</Link>
            </div>

        </div>
    )
}