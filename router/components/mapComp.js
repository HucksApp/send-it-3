
module.exports= function (presentLoc,pickup ){              
    const signin   =      `


    <!DOCTYPE html>
<html lang="en" >
  <head>
    <meta name="viewpoint" content="initia-scale=1.0">
    <meta charset="utf-8">
    <title>Pakage location</title>

    <style>

    #map{
      height: 400px;
      width:100%;
      border:solid rgba(255, 255, 255, 0.5);
    }

    h2{
      text-align: center;
    }
    </style>
  </head>
  <body>
    <h2>location</h2>

    <div id="map"></div>


    <script>



    let geocoder;
    let  map;

    function initMap(){
      let latlng = new google.maps.LatLng(8.500000, 4.550000);
  console.log('1');

                const options= {
                        zoom:8,
                        center:latlng
                };

                map = new google.maps.Map(document.getElementById('map'), options);
                addMarker(latlng,"<h3>point of dispatch</h3>" );

console.log('2');

     geocoder = new google.maps.Geocoder();
      geocoder.geocode({address:'${presentLoc}'},(results, status)=>{
  console.log('3');
        if(status=="OK"){
          console.log(results[0].geometry.location);
          map.setCenter(results[0].geometry.location);
console.log('4');
          addMarker(results[0].geometry.location,"<h3>order curent location</h3>" );

        if(pickup!= undefined){

            geocoder.geocode({address:'${pickup}'},(results, status)=>{
              if(status=="OK"){
                console.log(results[0].geometry.location);
                  addMarker(results[0].geometry.location,"<h3>pick up location</h3>");
              }else{alert('we could not get your order location, check later')}

            });
          }else{return}

        }else{alert('we could not get your order location, check later');}

        });







        function addMarker(curentLocation, message){
          let marker = new google.maps.Marker(
                                  {map:map,
                                    position:curentLocation,
                                    icon:"/images/icons8-marker-50.png"
                                  }
                                );
              const infoWindow =  new google.maps.InfoWindow({content:message});

                marker.addListener('click',function(){
                      infoWindow.open(map, marker);
            });


        };

    };




</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoduk96MV36i6RJFgvo80FqZTFBZj2k1M&callback=initMap"
async defer></script>
  </body>
</html>



`;
return signin;
}