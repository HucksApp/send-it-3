


module.exports= function (orders,outArray  ){ 
  
    orders.forEach((order)=> {
    const date = new Date(order.date._seconds * 1000)
    const day = date.getDate();
    const month =  date.getMonth();
    const year = date.getFullYear();
    const dateString = `${day}/${month}/${year}`


    let out=
        `
    <div class="table-data">
        <p class="id"  title="CLICK TO VIEW ORDER LOCATION IN MAP"><a href="/map?ordCk=${order.id}">${order.id}</a></p>
        <p class="receiver-name">${order.receiverName}</p>
        <p class="destination-address">${order.destinationAddress}</p>
        <p class="pick-up-address">${order.pickupAddress}</p>
        <p class="receiver-phone-number">${order.receiverPhoneNumber}</p>
        <p class="date">${dateString}</p>
        <p class="curent-location"> ${order.location}</p>
        <p class="delivery-status">${order.status}</p>
        <p class="delete ${order.id.toString()}"  title="CLICK TO DELETE ORDER">x</p>
</div>
`
outArray.push(out)
return outArray
     });


    const ord   =      `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="../styles/signin.css">
        <title>order</title>
    </head>
    <body>
    
        <nav class="navigation top">
                <div class="nav-container">
                        <div class="nav"><a href="/home">HOME</a></div>
                           <div class="nav"> <a href="/account">ACCOUNT</a> </div>
                           <div class="nav"> <a href="/logout">LOGOUT</a> </div>
                </div>
                <img src="../images/sendlogo.gif" alt="SEND IT" >
        </nav>
    
        <section class="orders-list">
            <h3>Orders With Receiver's Details</h3>
            <div class="rap">
            <header class="table-head">
                <p class="id">ID</p>
                <p class="receiver-name">NAME</p>
                <p class="destination-address">DESTINATION</p>
                <p class="pick-up-address">PICKUP LOCATION</p>
                <p class="receiver-phone-number">RECEIVERS'S MOBILE</p>
                <p class="date">DATE</p>
                <p class="curent-location">CURENT LOCATION</p>
                <p class="delivery-status">DELIVERY STATUS</p>
    
            </header>
            ${outArray.toString().replace(/,/g,' ')}
        </div>
            </section>
        <div class="btn">
            <button id="btn-1">Create Order</button>
            <button id="btn-2">Edit Destination</button>
        </div>
        
        <form action="/"  method="post" class="create-order" name="create_order" >
    
            <label for="receiver-name">Receiver's Name</label>
            <input type="text"  id="receiver-name" name="receiver_name" placeholder="Enter Recipient Name" required>
    
            <label for="destination-address">Destination Address</label>
            <input type="text" id="destination-address" name="destination_address" placeholder="Please Enter Pakage Destination" required>
    
    
            <label for="pickup-address">Pick UP Address</label>
            <input type="text" id="pickup-address" name="pickup_address" placeholder="Please Enter Preferred Pick Up Location" required>
    
            <label for="receiver-phone-number">Receiver's Phone Number</label>
            <input type="number"  id="receiver-phone-number" name="receiver_phone_number" placeholder="Enter Recipient's Phone Number" required>
    
    
            <button type="submit">Submit </button>  
        </form>
        <form action="/" method="post" class="edit-destination">
            
            <label for="destination-address">Destination Address</label>
            <input type="text" id="destination-address-edit" name="destination_address" placeholder="Please Enter Pakage Destination" required>
    
            <label for="receiver-phone-number">Order's Id</label>
            <input type="number"  id="order-id" name="id" placeholder="Enter Order's ID...Check Above" required>
    
            <button type="submit">UPDATE</button>
    
        </form>
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
         <style>
         .table-data p.id{
            color:#00f;
        }
    
        .table-data p.id:hover{
            cursor: pointer;
        }
         
         </style>
         <script src="../handlers/order.js"></script>     
    </body>
    </html>


`;
return ord;
}