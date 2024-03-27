

//send()


function send() {

    let message = document.getElementById('message').value;
    let name = document.getElementById('name').value;
    
    
    if (message==''){
        document.getElementById('error').innerText = 'Введите данные!';
        return
    }


    document.getElementById('result').innerText = `${name} : ${message}`;
    document.getElementById('error').innerText = '';
    document.getElementById('message').value = '';
    
}



    function hi(name) {
        alert (`Привет,  ${name} !`)
    }
    let name = prompt ("Как Вас зовут?");
    hi(name)

