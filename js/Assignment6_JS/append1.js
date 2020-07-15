function deleteNode() {
    var parent=document.getElementById('demo')
    parent.removeChild(parent.lastChild)

}
function getDelete(id) {
    var x = document.getElementById(id)
    console.log(x);

    var parent=document.getElementById('demo')
    parent.removeChild(x)
}
