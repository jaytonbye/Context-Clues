var friends = ['Alex','WayneCarl','Jason','Jermaine','Branden']
var locations = ['study','wrestling room','laundry room', 'bedroom','courtyard','sex dungeon', 'attic','torture chamber','sauna','windjammer cafe']
var weapons = ['hot dog','monkey wrench','knife','broad sword','spear gun','atomic bomb','acid','blow dart','bamboo under the finger nails','throwing shoe','chinese stars','loud rap music','large limp male genitalia','poison','drug overdose','strangulation','heckling','whining','a cold stare','limp bizkit']

for (i=1; i<=100; i++){
    var randomFriend
    var randomLocation
    var randomWeapon
    function setStuff(){
        randomFriend = friends[Math.floor(Math.random() * friends.length)]
        randomLocation = locations[Math.floor(Math.random() * friends.length)]
        randomWeapon = weapons[Math.floor(Math.random() * friends.length)]
    }
    setStuff()
    var h3 = document.createElement('h3')
    var h3Text = document.createTextNode(`Accusation ${i}`)
    h3.appendChild(h3Text)
    document.body.appendChild(h3)
    h3.addEventListener('click',()=>{
        alert(`I accuse ${randomFriend}, with the ${randomWeapon}, in the ${randomLocation}!`)
    })
}