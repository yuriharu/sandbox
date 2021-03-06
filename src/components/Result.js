import './Result.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

/******** Components ***************************/
import Const from './Const.js'

function Result() {
    const [myScore, setMyScore] = useState();
    const [scoreComp1, setScoreComp1] = useState(0);
    const [scoreComp2, setScoreComp2] = useState(0);
    const [scoreComp3, setScoreComp3] = useState(0);
    const [scoreComp4, setScoreComp4] = useState(0);

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
            setScoreComp1(
                (myScore.Excel * Const.Employer[1].Excel) +
                (myScore.JavaScript * Const.Employer[1].JavaScript) +
                (myScore.PowerBI * Const.Employer[1].PowerBI) +
                (myScore.SEO * Const.Employer[1].SEO)
            );
            setScoreComp2(
                (myScore.Excel * Const.Employer[2].Excel) +
                (myScore.JavaScript * Const.Employer[2].JavaScript) +
                (myScore.PowerBI * Const.Employer[2].PowerBI) +
                (myScore.SEO * Const.Employer[2].SEO)
            );
            setScoreComp3(
                (myScore.Excel * Const.Employer[3].Excel) +
                (myScore.JavaScript * Const.Employer[3].JavaScript) +
                (myScore.PowerBI * Const.Employer[3].PowerBI) +
                (myScore.SEO * Const.Employer[3].SEO)
            );
            setScoreComp4(
                (myScore.Excel * Const.Employer[4].Excel) +
                (myScore.JavaScript * Const.Employer[4].JavaScript) +
                (myScore.PowerBI * Const.Employer[4].PowerBI) +
                (myScore.SEO * Const.Employer[4].SEO)
            );
        }
    }, [myScore])

    return (
        <div>
            {myScore ?
            <div id="companies">
                <h2>We've found 4 available positions!</h2>
                <div className="comp">
                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                    <div className="info">
                        <p className="role">{Const.Employer[1].role}</p>
                        <p>Score: {scoreComp1}</p>
                        <p className="comp-name">{Const.Employer[1].company}</p>
                    </div>
                </div>
                <div className="comp">
                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                    <div className="info">
                        <p className="role">{Const.Employer[2].role}</p>
                        <p>Score: {scoreComp2}</p>
                        <p className="comp-name">{Const.Employer[2].company}</p>
                    </div>
                </div>
                <div className="comp">
                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                    <div className="info">
                        <p className="role">{Const.Employer[3].role}</p>
                        <p>Score: {scoreComp3}</p>
                        <p className="comp-name">{Const.Employer[3].company}</p>
                    </div>
                </div>
                <div className="comp">
                    <FontAwesomeIcon icon={faAngleDown} className="icon" />
                    <div className="info">
                        <p className="role">{Const.Employer[4].role}</p>
                        <p>Score: {scoreComp4}</p>
                        <p className="comp-name">{Const.Employer[4].company}</p>
                    </div>
                </div>
            </div>
            : "No!"}
        </div>
    );
}

export default Result;