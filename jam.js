function showTime(){
  var tgl = new Date();
  var j = tgl.getHours(); // 0 - 23
  var m = tgl.getMinutes(); // 0 - 59
  var d = tgl.getSeconds(); // 0 - 59
  var sesi = "AM";
  
  if(j == 0){
      j = 12;
  }
  
  if(j > 12){
      j = j - 12;
      sesi = "PM";
  }
  
  j = (j < 10) ? "0" + j : j;
  m = (m < 10) ? "0" + m : m;
  d = (d < 10) ? "0" + d : d;
  
  var waktu = j + ":" + m + ":" + d + " " + sesi;
  setTimeout(showTime, 1000);
  document.getElementById("jam").innerHTML = waktu;
  
}

showTime();