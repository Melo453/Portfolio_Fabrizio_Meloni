$("#botton").click(function() {
    let name = document.querySelector('.contactt__name').value
    let mail = document.querySelector('.contactt__mail').value
    let msg = document.querySelector('.contactt__msg').value

    let validator = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(name === "" | mail === "" || msg === ""){
        Swal.fire({
            icon: 'error',
            title: `Lack of data.`,
        })
        return false;
    }else if(!validator.test(mail)){
        Swal.fire({
            icon: 'error',
            title: `Invalid mail.`,
        })
        return false;
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Mail sent.'
        });
    }
});


