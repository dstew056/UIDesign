const Thankyou = () => {

    function nextClick(){
        document.getElementById("thankYouDiv").style.display = "none";
        document.getElementById("inputDiv").style.display = "block";
    }

    return ( 
        <div className="ThankYou" id="thankYouDiv">
            <h1>Thank You!</h1>
            <i>Your feedback has been submitted</i><br></br><br></br>
            <button className="btn btn-primary" onClick= { nextClick }>Back To Start</button>
            <br></br>
        </div>
    );
}
 
export default Thankyou;