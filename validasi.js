function validateRegister(){
    let name = document.getElementById("fullName").value;
    let schName = document.getElementById("schoolName").value;
    let password = document.getElementById("password").value;
    var day = document.formRegist.date.value;
    var month = document.formRegist.month.value;
    var year = document.formRegist.year.value;
    let label = document.getElementById("lblError");



    if(name.length < 5 || name.length >20){
        label.innerText = " Nama Harus 5-20 Karakter ";
        return false;
    }else if (name=="") {
        label.innerText= "Nama Must be filled";
        return false;
    }
    // }else if (!/^[a-zA-Z]*$/g.test(name)) {
    //     label.innerText = "Name Must be Alphabet";
    //     return false;
    }
    else if (schName=="") {
        label.innerText= "School Name Must be filled";
        return false;
    }
    else if (!(schName.startsWith("School"))||schName.length <7) {
        label.innerText = "School Name must be Started with 'School' ";
        return false;
    }else if (date=="Date") {
        label.innerText = "Choose Day"
        return false;
    }else if (month=="Month") {
        label.innerText = "Choose Month"
        return false;
    }else if (year=="Year") {
        label.innerText = "Choose Year"
        return false;
    }
    else if(name==""||schName=="" || password==""){
        label.innerText = "Semua Form harus diisi";
        return false;
    }else{
        alert("Registrasi Berhasil dilakukan!")
    }
}