import React from "react";
import pickachu from "../../Images/pickachu-gif.gif";
function ErrorPage() {
  return (
    <>
      <div className="error">
        <div className="content">
          <h1>PAGE NOT FOUND!</h1>
          <img src={pickachu} alt="" />
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
