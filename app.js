async function makeApp(){
    console.log('Suhhhh duhhhh');
    const div = document.createElement('div')
    div.innerHTML = `<h1>My app</h1>`
    const nav = document.createElement('nav')
    nav.innerHTML = `<a href="#home">Home</a> | <a href="#characters">Characters</a>`
        div.appendChild(nav)
    if(location.hash === '#home'){
        const home = document.createElement('div')
        home.innerHTML = `Welcome to Home, Homie`
        div.appendChild(home)
    } else if (location.hash === '#characters'){
        const characters = await Characters()
        // document.createElement('div')
        // characters.innerHTML = `You are at the characters page`
        div.appendChild(characters)
    }
    console.log(div.childNodes)
    return div
}