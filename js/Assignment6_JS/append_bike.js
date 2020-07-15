function insert1() {
    var bike=document.getElementById('bikes');
  
    var add_bike=document.getElementById('demo1')
    var list=document.createElement('li')
    //var list=document.getElementById('lis')
    list.innerText= bike.value
    add_bike.appendChild(list)
   
}

function remove1() {
    var del_bike=document.getElementById('demo1')
    del_bike.removeChild(del_bike.lastElementChild)
}

function ul1() {
    var uli=document.getElementById('demo1')
    uli.removeChild(uli.firstChild)
}