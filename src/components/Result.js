import './Result.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

function Result() {
    const [myScore, setMyScore] = useState();
    let scoreComp1 = 0;
    let scoreComp2 = 0;
    let scoreComp3 = 0;
    let scoreComp4 = 0;

    const fetchData = async () => {
        let identity = localStorage.getItem("currentId");
        const { data, status } = await axios.get(Const.EndPoint); // + "/" + identity + "-score"
        if (status === 200) {
            setMyScore(data[0]);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        if (myScore !== undefined) {
            scoreComp1 = (myScore.Excel * Const.Employer[1].Excel) +
                        (myScore.JavaScript * Const.Employer[1].JavaScript) +
                        (myScore.PowerBI * Const.Employer[1].PowerBI) +
                        (myScore.SEO * Const.Employer[1].SEO);
            scoreComp2 = (myScore.Excel * Const.Employer[2].Excel) +
                        (myScore.JavaScript * Const.Employer[2].JavaScript) +
                        (myScore.PowerBI * Const.Employer[2].PowerBI) +
                        (myScore.SEO * Const.Employer[2].SEO);
            scoreComp3 = (myScore.Excel * Const.Employer[3].Excel) +
                        (myScore.JavaScript * Const.Employer[3].JavaScript) +
                        (myScore.PowerBI * Const.Employer[3].PowerBI) +
                        (myScore.SEO * Const.Employer[3].SEO);
            scoreComp4 = (myScore.Excel * Const.Employer[4].Excel) +
                        (myScore.JavaScript * Const.Employer[4].JavaScript) +
                        (myScore.PowerBI * Const.Employer[4].PowerBI) +
                        (myScore.SEO * Const.Employer[4].SEO);
            console.log(scoreComp1)
            console.log(scoreComp2)
            console.log(scoreComp3)
            console.log(scoreComp4)
        }
    }, [myScore])

    return (
        <div>
            {myScore ?
            <div id="companies">
                <h2>We've found 4 avairable positions!</h2>
                <div className="comp">
                    <p>{Const.Employer[1].role}</p>
                    <p>{Const.Employer[1].company}</p>
                    <p>{Const.Employer[1].location}</p>
                    <p>Score: 55</p>
                </div>
                <div className="comp">
                    <p>{Const.Employer[2].role}</p>
                    <p>{Const.Employer[2].company}</p>
                    <p>{Const.Employer[2].location}</p>
                    <p>Score: 43</p>
                </div>
                <div className="comp">
                    <p>{Const.Employer[3].role}</p>
                    <p>{Const.Employer[3].company}</p>
                    <p>{Const.Employer[3].location}</p>
                    <p>Score: 35</p>
                </div>
                <div className="comp">
                    <p>{Const.Employer[4].role}</p>
                    <p>{Const.Employer[4].company}</p>
                    <p>{Const.Employer[4].location}</p>
                    <p>Score: 65</p>
                </div>
            </div>
            : "No!"}
        </div>
    );
}

export default Result;