function myFunction(){
    confirm("Apakah Anda yakin ingin mendaftar?")
}

function kirim(){
    confirm("Apakah Anda yakin ingin mengirim?")
}

var masukanpass = document.getElementById('Password'),
      chk  = document.getElementById('chk'),
      label = document.getElementById('showhide');


     chk.onclick = function () {

      if(chk.checked) {

           masukanpass.setAttribute('type', 'text');
           label.textContent = 'Hide Password';
       } else {

           masukanpass.setAttribute('type', 'Password');
           label.textContent = 'Show Password';
       }
 
     }

     function Login() {
        var nama = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;
        if (nama != "indah123" && password !="indah123") {
            alert('Username dan Password anda salah');
        }else{
            alert('Login Berhasil');
            document.location="index.html"   
        }
    }

    function validate() {
        var password1 = document.getElementById('pw1').value;
        var password2 = document.getElementById('pw2').value;
        if (password1 != password2) {
            alert("Password Tidak Sama!!");
        } else {
            alert("Selamat Anda Telah Mengganti Password Anda");
            document.location="login.html"
        }
    }

    function check_empty() {
        var email=document.getElementById('email').value;
        if (email == "") {
        alert("No email address specified.");
        } else {
        document.getElementById('forgetpass').submit("login.html");
        alert("Your password has been reset, please check Your email");
        window.location.href = "lupaPassword.html";
        }
        }
        //Function To Display Popup
        function show_popup() {
        document.getElementById('isipopup').style.display = "block";
        }
        //Function to Hide Popup
        function hide_popup(){
        document.getElementById('isipopup').style.display = "none";
        }
