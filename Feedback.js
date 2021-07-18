const Feedback = () => {

    function nextClick(){
        document.getElementById("feedbackDiv").style.display = "none";
        document.getElementById("textArea1").value = "";
        document.getElementById("textArea2").value = "";
        document.getElementById("thankYouDiv").style.display = "block";
    }

    const backClick = () => {
        document.getElementById("feedbackDiv").style.display = "none";
        document.getElementById("resultDiv").style.display = "block";
    }

    return ( 
        <div className="Feedback" id="feedbackDiv">
            <h1>Give Feedback</h1>
            <i>Tell us how we did to help us improve</i><br></br><br></br>
            <label>Were you able to use this progression in a song?</label><br></br>
            <select>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
            <label>Did you have to make any changes to the progression?</label>
            <textarea id="textArea1" rows="2" cols="50"></textarea><br></br>
            <label>What changes would you like to see in our app?</label>
            <textarea id="textArea2" rows="3" cols="50"></textarea>

            <div className="row">
                <div className="col-sm">
                    <button className="btn btn-secondary" onClick= { backClick }>Back</button>
                </div>
                <div className="col-sm">
                    <button className="btn btn-success" onClick= { nextClick }>Submit</button>
                </div>
            </div>
            <br></br>
            <i>Page 4 of 4</i>
        </div>
    );
}
 
export default Feedback;