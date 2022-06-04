var list = [];
function myFunction(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('myIn').value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    if(inputValue === ''){
        alert('Ban can dien gi do')
    }
    else{
        document.getElementById('myul').appendChild(li);
        list.push(inputValue);
    }   
    document.getElementById("myIn").value = "";
    document.getElementById('demo').innerHTML = list;
 }

function myElement(){
    var li = document.createElement('li');
    var outputValue = document.getElementById('myul').lastElementChild;
    li.appendChild(outputValue);
    document.getElementById('myul2').appendChild(li);
}