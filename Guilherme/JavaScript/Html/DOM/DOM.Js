window.document.write(window.document.URL)

window.document.write(window.navigator.appName)

window.document.write("Little Boy")




var Cinema = window.document.getElementsByTagName("P")[0]
window.document.write(Cinema.innerText)
Cinema.style.color = 'orange'

var corpo = window.document.body
corpo.style.background = 'purple'
corpo.style.color = 'white'

var d = window.document.getElementById('msg')
d.style.background = 'lightblue'
d.innerText = 'Estou Pronto'
d.style.color = 'purple'