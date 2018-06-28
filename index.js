const root = document.querySelector('#root');

async function render(){
    const appContent = await makeApp();

    // slower solution
    // root.innerHTML = appContent;

    // Our Solution
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
    root.appendChild(appContent)
}

render()
window.onhashchange = () => render()



// ASYNC/AWAIT
// axios.get('someUrl').then(res => {
//     axios.get('someURL2').then(res => {
//         axios.get...
//     })
// })
// async funtion myFunc(){
                      // CANT USE AWAIT KEYWORD WITHOUT ASYNC FUNCTION
//     const response = await axios.get('someUrl')
//    const response2 = await axios.get('someURL2')
//     .....
// }