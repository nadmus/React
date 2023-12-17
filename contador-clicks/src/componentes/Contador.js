import React from "react";
import '../stylesheets/Contador.css'

function Contador({ numCLiks }){
  return(
    <div className="contador">
      {numCLiks}
    </div>
  );
}

export default Contador;