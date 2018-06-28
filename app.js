async function makeApp(){
    console.log('Suhhhh duhhhh');
    const div = document.createElement('div')
    div.innerHTML = `<h1>My app</h1>`
    const nav = document.createElement('nav')
    nav.innerHTML = `<a href="#home">Home</a> | <a href="#characters">Characters</a>`
    div.appendChild(nav)
    return div
}