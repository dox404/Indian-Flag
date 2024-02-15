import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './flag.css'

function Flag() {

    
  return (
   <>
    <div className="conatiner-fluid ">
        <h1 class="text-center text-muted">Indian Flag with Bootstrap</h1>
        <div className="container" id="red">


            <div className="row" id="top">
                <div className="col-md-6 text-white"></div>
                
            </div>
            <div className="row text-center" id="middle">
                <div className="col-md-12 bg-white">
                    <img id="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/800px-Ashoka_Chakra.svg.png"
                        alt="Ashok Chakra"/>
                </div>
            </div>
            <div className="row" id="down">
                <div className="col-md-6 text-white"></div>
                {/* <div className="col-6 text-white"></div> */}
            </div>

        </div>
    </div>
   </>
  )
}

export default Flag
