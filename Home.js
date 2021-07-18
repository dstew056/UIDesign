import { useState } from 'react';
import logo from './logo.png';

const Home = () => {

    const [createdBy, setCreatedBy] = useState('Created by David Stewart')
    const [start, setStart] = useState("Start");
    const [language, setLanguage] = useState('Translate to French');


    const translateClick = () => {
        let english = !(createdBy==='Created by David Stewart');
        if (english){
            setCreatedBy('Created by David Stewart');
            setStart('Start');
            setLanguage('Translate to French');
            english=true;
        }else{
            setCreatedBy('Créé par David Stewart');
            setStart('Démarrer');
            setLanguage('Traduire en anglais')
            english=false;
        }
        console.log(english);
    }


    const startClick = () => {
        document.getElementById("homeDiv").style.display = "none";
        document.getElementById("inputDiv").style.display = "block";
    }

    return ( 
        <div className="home" id="homeDiv">
            <img src={logo} alt="" style={{height: "100px", width:"100px"}}></img>
            <br></br><br></br><br></br>
            <div className="row">
                <div className="col-sm">
                    <button className="btn btn-secondary" onClick= { translateClick } style={{textAlign:"right"}}>{ language }</button>
                </div>
                <div className="col-sm">
                    <button className="btn btn-success" onClick= { startClick }>{ start }</button>
                </div>
            </div>
            <br></br><br></br><i>{ createdBy }</i>
        </div>
    );
}
 
export default Home;