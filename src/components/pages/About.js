import React from "react";
// import '../styles/about.css';
// import florida from '../assets/images/IMG_Yasin_FL.png'
// import '../styles/about.css';
// import florida from '../assets/images/IMG_Yasin_FL_resizeimage.png'
import florida from "../assets/images/IMG_Yasin_NHS.png";

export default function About() {
  return (
    <div>
      <div>
      <section>
        {/* <img src="./assets/images/IMG_Batanical_copy.jpg" alt="Photo of Yasin"/> */}
        <img src={florida} alt="Photo of Yasin" />
        <h1 className="about-header">About Me</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
          cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
          at.
        </p>

      </section>
      </div>
       
     {/* <!-- Footer --> */}
      
     <footer class="page-footer font-small blue">

{/* <!-- Copyright --> */}
<div class="footer-copyright text-center py-3">© 2020 Copyright:
<a href="/"> MDBootstrap.com</a>
 </div>
{/* <!-- Copyright --> */  }

</footer>
{/* <!-- Footer --> */}
      
    </div>
  );
}


