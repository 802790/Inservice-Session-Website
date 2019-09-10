let sessions

function loadPage(){
fetch("sessions.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                   sessions = json
                   createCards()})
    .catch(err => console.error(err))
}
function createCards(){
let container = document.createElement('div')
container.innerHTML = sessions.map(session => 
`<div>
<h2>${session.Title}</h2>

<h3>${session["Area of Focus"]}</h3>

<h4>${session["Grade"]}</h4>

<p>${session['Description']}</p>

<h4>Presenter${session['Presenter(s)'].split(' and ').length > 1 ? 's' : ''}: ${session['Presenter(s)']}</h4>

<h5>${session['Intended Audience']}</h5>

<h5>${session['Building']}</h5>
<button>Sign Up</Button>
</div>`
                                  ).join('')
document.querySelector('article')
.append(container)
}