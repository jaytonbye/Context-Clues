
var friends = ['Alex','WayneCarl','Jason','peter','bob']
var locations = ['study','wrestling room','laundry room', 'bedroom','courtyard','sex dungeon', 'attic','torture chamber','sauna','windjammer cafe']
var weapons = ['hot dog','monkey wrench','knife','broad sword','spear gun','atomic bomb','acid','blow dart','bamboo under the finger nails','throwing shoe','chinese stars','loud rap music','large limp male genitalia','poison','drug overdose','strangulation','heckling','whining','a cold stare','limp bizkit']

function makeFunc(i){
    return function() {
        var randomFriend = friends[Math.floor(Math.random() * friends.length)]
        var randomLocation = locations[Math.floor(Math.random() * locations.length)]
        var randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
        var h3 = document.createElement('h3')
        var h3Text = document.createTextNode(`Accusation ${i}`)
        h3.appendChild(h3Text)
        document.body.appendChild(h3)
        h3.addEventListener('click',()=>{
            alert(`I accuse ${randomFriend}, with the ${randomWeapon}, in the ${randomLocation}!`)
        })
    }()
}

for (var i=1; i<=100; i++){
    makeFunc(i)
}