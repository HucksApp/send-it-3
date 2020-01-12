module.exports= function ( func ){  
    
    const nFunc = `<h2 style="color:#00f">${func}</h2>`

    const home   =      `
    
       
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../styles/index.css">
    <title>index</title>
</head>
<body>
    <img src="../images/sendlogo.gif" alt="SEND IT" class="logo">
    
    <div class="buttons" id="buttons">
        <button class="central-btn"> 
            <a href="/logout">LOGOUT</a> 
        </button>
        <button class="central-btn"> 
            <a href="/account"> ACCOUNT</a>
        </button>
        <button class="central-btn"> 
            <a href="/order"> ORDERS</a>
        </button>
    </div>
    <main class="home-wraper">
        <button style="background-color:#00f;font-weight:bolder;color:#fff;border-radius:5px;" id="tog-menu">menu</button>
        <h1 class="venture-name">SEND IT</h1>
        <h3 class="greetings">${nFunc} <span>  YOUR ORDERS ARE IN GOOD HANDS  </span></h3>
        <p class="first-anthem">WE HOPE WE SERVED  YOU WELL, YOU ARE ALL THAT MATTERS </p>
        <p class="last-anthem">FOR COMPLAINS OR MESSAGE, CHECK FOR OUR CUSTOMER SERVICE LINKS BELOW</p>
    </main>
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
    <script src="../handlers/index.js"></script>
</body>
</html>

`;
return home;
}