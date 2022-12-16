function validateForm(event)
{
    event.preventDefault();
    let uname = document.getElementById("fname").value
    let pass = document.getElementById("fpass").value
    if(uname === "admin")
    {
        if(pass === "admin")
        {
            window.location.replace('admin.html')
        }
        else{
            alert("Wrong password try again")
        }
    }
    else if(uname === "u1")
    {
        if(uname === "u1")
        {
            window.location.replace('1.html')
        }
        else{
            alert("Wrong password try again")
            location.reload()
        }
    }
    
}