




module.exports= function ( func ){              
                      const signin   =      `


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
                                              <div class="nav"> <a href="/">HOME</a></div>
                                              <div class="nav"> <a href="/signup">SIGN UP</a> </div>
                                              
                                      </div>
                                      <img src="../images/sendlogo.gif" alt="SEND IT" src="">
                              </nav>


                              <form action="/admin"  method="post"  class="admin">
                                        <label for="email" >Email</label>
                                        <input type="email" name="email" id="email" placeholder="Enter Email">
                        
                                        <label for="password">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter Password">
                        
                                        <button type="submit">LOGIN</button>  
                                </form>
              



                              <form action="/old_user" method="post" class="user">
                              <div style="color:#f00;text-align:center;font-weight:bolder"> ${func}</div>
                                      <label for="email" >Email</label>
                                      <input type="email" name="email" id="email" placeholder="Enter Email">
                      
                                      <label for="password">Password</label>
                                      <input type="password" name="password" id="password" placeholder="Enter Password">
                      
                                      <button type="submit">LOGIN</button>  
                              </form>
                              <div class="sign-option">
                                       <p class="alt-message">New To Send It ?, Create An Account</p>
                                      <button class="alt-redirect">
                                              <a href="/signup">Sign Up</a>
                                      </button>
                                      <button class="alt-redirect" id="admin">
                                      ADMIN
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

   

                                                <script>
                                                const admin = document.getElementById('admin');
                                                const adminForm= document.querySelector('form.admin');
                                                const userForm= document.querySelector('form.user');

                                                admin.addEventListener('click',(e)=>{

                                                if(adminForm.classList.contains('display')){
                                                adminForm.classList.remove('display');
                                                userForm.classList.remove('remv');
                                                console.log('admin here')
                                                }else {
                                                        let chk = window.confirm('RESTRICTED...... ADMIN ONLY !!!!!!!');
                                                        if( chk == true){
                                                        adminForm.classList.add('display');
                                                        userForm.classList.add('remv') ;
                                                        console.log('admin here') 

                                                        }else{
                                                                return
                                                        }
                                                }

                                                })

                                                </script>
                         
                      </body>
                
                      </html>
                
              
              `;
        return signin;
}