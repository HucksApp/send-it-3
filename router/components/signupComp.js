
module.exports= function ( func ){              
    const signup   =      `
    
       
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="../styles/signin.css">
        <title>signIn</title>
    </head>
    <body>
            <nav class="navigation top">
                    <div class="nav-container">
                            <div class="nav"> <a href="/"> HOME</a></div>
                            <div class="nav"> <a href="/login">LOGIN</a></div>
                    </div>
                    <img src="../images/sendlogo.gif" alt="SEND IT" >
            </nav>
            <div style="color:#f00;text-align:center;font-weight:bolder"> ${func}</div>
            <form action="/new_user" method="post">
                <label for="Username">Username<span style="color:#f00">*</span></label>
                <input type="text" name="username" id="Username" placeholder="Enter User Name" required minlength="5" maxlength="8"> 
    
                <label for="phone_number">Phone Number <span style="color:#f00">*</span> </label>
                <input type="number" name="phone_number" id="phone_number" placeholder="Enter Your Phone Number" required minlength="8" maxlength="8"> 
    
                <label for="house-address">House Address</label>
                <input type="text" name="house_address" id="house-address" placeholder="Enter Your House Address">
    
                <label for="email">Email<span style="color:#f00">*</span></label>
                <input type="email" name="email" id="email" placeholder="Enter A Valid Email" required>
    
                <label for="password">Password<span style="color:#f00">*</span></label>
                <input type="password" name="password" id="password" placeholder="Enter A Password " required minlength="6" maxlength="15">
    
                <button type="submit">SUBMIT</button>  
            </form>
            <div class="sign-option">
                    <p class="alt-message">Already have an account?</p>
                    <button class="alt-redirect">
                            <a href="/login">Sign In</a>
                    </button>
            </div>
            <footer class="footer-message">
                    <div class="about">
                            <p class="about-head head">ABOUT</p>
                            <p class="about-info">SendIT is a courier service that helps users deliver parcels to different destinations.</p>
                            <p class="about-info"> SendIT provides courier quotes based on weight categories.</p>
                    </div>
                    <div class="contact-us">
                            <p class="customer-service head">CUSTOMER SERVICES</p>
                            <p><a href="/" class="cont">Email Us</a></p>
                            <p><a href="/" class="cont">FaceBook</a></p>
                            </div>
                    <div class="copyright">
                            <p class="logo-foot" style="color:#00f">SEND IT </p>
                            <p class="foot-logo"> copyright &copy; 2019!!!</p>
                    </div>
             </footer>       
           
    </body>
    </html>

`;
return signup;
}