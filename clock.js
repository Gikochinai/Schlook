function clockstart() {
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();


                var newformat = hours >= 12 ? 'PM' : 'AM';


                hours = hours % 12;


                hours = hours ? hours : 12;
                minutes = minutes < 10 ? '0' + minutes : minutes;

                document.getElementById("clock").innerHTML = hours + ':' + minutes + ' ' + newformat;
            }

          /*  function clock() {
                var now = new Date();
                var TwentyFourHour = now.getHours();
                var hour = now.getHours();
                var min = now.getMinutes();
                var sec = now.getSeconds();
                var mid = 'pm';
                if (min < 10) {
                  min = "0" + min;
                }
                if (hour > 12) {
                  hour = hour - 12;
                }
                if(hour==0){
                  hour=12;
                }
                if(TwentyFourHour < 12) {
                   mid = 'am';
                }
              document.getElementById('clock').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
                setTimeout(clock, 1000);
              }*/
