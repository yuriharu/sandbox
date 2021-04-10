import './Home.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

/******** Components ***************************/
import Const from './Const.js'

/******** Material UI ***************************/
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: '40%',
    },
    formControl: {
      margin: theme.spacing(1),
      width: '40%',
    },
  }));

function Home() {
    const classes = useStyles();
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const next = async () => {
        //Const.ClearDuplicate();

        if (name === "") return;
        let identity = name.replace(" ", ""); //is name the identity?
        const { data, status } = await axios.get(Const.EndPoint + "?q=identity:" + identity);
        if (status === 200 && data.length === 0) {
            const newPerson = { identity: identity };
            const { data, status } = axios.post(Const.EndPoint + "/" + identity, newPerson);
            alert("You are new!");
        } else {
            alert("You already exist!")
        }

        localStorage.setItem("currentId", identity);
    };

    return (
        <div>
            <h1>Welcome to Intro!</h1>
            <TextField
                label="Your Name"
                id="name"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                value={name}
                onChange={handleChangeName}
            />
            <Link to="/coding-check">
                <Button renderAs="button" variant="contained" id="next-button" onClick={next}>
                    Next
                </Button>
            </Link>
        </div>
    );
}

export default Home;