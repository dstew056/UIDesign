const Results = () => {

    function nextClick(){
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("feedbackDiv").style.display = "block";
    }

    const backClick = () => {
        document.getElementById("resultDiv").style.display = "none";
        document.getElementById("inputDiv").style.display = "block";
    }

    return ( 
        <div className="Results" id="resultDiv">
            <h1>Results</h1>
            <i>Here's what we came up with:</i><br></br><br></br>
            <p id="resultsP">

            </p>
            <br></br><br></br>
            <div className="row">
                <div className="col-sm">
                    <button className="btn btn-secondary" onClick= { backClick }>Back</button>
                </div>
                <div className="col-sm">
                    <button className="btn btn-success" onClick= { nextClick }>Give Feedback</button>
                </div>
            </div>
            <br></br>
            <i>Page 3 of 4</i>
        </div>
    );
}
 
export default Results;