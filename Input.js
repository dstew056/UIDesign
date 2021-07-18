const Input = () => {

    function getKey(k){
        if (k==="A Minor"){
            return ["Amin", "Bdim", "C", "Dmin", "Emin", "Fmaj", "Gmaj"];
        }else{
            return ["C", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim"];
        }
    }

    function getNumSequence(len){
        if (len==="4"){
            return [[1,4,5,1],[2,5,1,7],[2,5,1,1],[4,6,2,1],[4,5,1,1],[1,3,4,6]][Math.floor(Math.random() * 6)]
        }else{
            return [[2,5,1,4,2,5,1,1],[1,3,5,7,2,5,1,1],[5,2,4,1,5,2,1,1]][Math.floor(Math.random() * 3)]
        }
    }

    const generateResults = () => {
        let len = document.getElementById("lenSelect").value;
        let k = document.getElementById("keySelect").value;
        let resultsP = document.getElementById("resultsP");
        resultsP.innerHTML="";
        let key=getKey(k);
        let numSequence=getNumSequence(len);

        
        console.log(numSequence[0]);

        for (let chord in numSequence){
            console.log("chord: "+numSequence[chord]);
            resultsP.append(key[numSequence[chord]-1]);
            resultsP.append('\n\n');
        }
    }

    const nextClick = () => {
        document.getElementById("inputDiv").style.display = "none";
        generateResults();
        document.getElementById("resultDiv").style.display = "block";
    }

    const backClick = () => {
        document.getElementById("inputDiv").style.display = "none";
        document.getElementById("homeDiv").style.display = "block";
    }

    return ( 
        <div className="Input" id="inputDiv">
            <h1>Enter Info</h1>
            <i>Tell us about your music</i><br></br><br></br>
            <p>
            <strong>Key: </strong>
            <select id="keySelect">
                <option>C Major</option>
                <option>A Minor</option>
            </select>
            </p>
            <p>
            <strong>Number of chords </strong>
            <select id="lenSelect">
                <option>4</option>
                <option>8</option>
            </select>
            </p>
            <br></br><br></br>
            <div className="row">
                <div className="col-sm">
                    <button className="btn btn-secondary" onClick= { backClick }>Back</button>
                </div>
                <div className="col-sm">
                    <button className="btn btn-success" onClick= { nextClick }>Go To Results</button>
                </div>
            </div>
            <br></br>
            <i>Page 2 of 4</i>
        </div>
     );
}
 
export default Input;