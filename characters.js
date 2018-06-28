async function Characters(){
    const div = document.createElement('div')
    // div.innerHTML = "Characters"
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            div.innerText = this.responseText; 
        } else {
            // alert('xhr failed')
            div.innerHTML = 'XHR Failed'
        }
    }
    xhttp.open('GET', 'https://swapi.co/api/people', true);
    xhttp.send();
    return div
}