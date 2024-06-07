import React from 'react'
import './recipefooter.css'
function RecipeFooter() {
  return (
    <div className='footer'>
      <div>
        <div className="brand">Teaching Kitchen Recipes</div>
        <aside>
            <span className="bi bi-facebook"></span>
            <span className="bi bi-twitter"></span>
            <span className="bi bi-instagram"></span>
            <span className="bi bi-linkedin"></span>
            <span className="bi bi-youtube"></span>
        </aside>
    </div>
    <div>
        <div className="footer-title">SUPPORT</div>
            <span>contact us</span>
            <span>FAQS</span>
            <span>guide</span>
            <span>suggest</span>
            </div>
            <div>
                <div className="footer-title">Our Recipes</div>
                <span>Halwa</span>   
                <span>Chicken</span>     
                <span>Burger</span>    
                <span>cakes</span>    
          </div>
          <div>
            <div className="footer-title">COMPANY</div>
                <span>Our recipes</span>   
                <span>careers</span>     
                <span>term & conditions</span>    
                <span>privacy & cookie policy</span> 
          </div>
          <div>
            <div className="footer-title">CONTACT</div>
            <span>1-202-555-0105</span>
            <span>1-202-555-0106</span>
            <span>help@recipes.com</span>
         </div>
    </div>
  )
}

export default RecipeFooter;
