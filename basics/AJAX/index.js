function loadDoc(){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.response == 200){
            document.getElementById('div1').innerHTML = this.responseText
        }
    }
    // jvdkvnd.method(request, file, default async:true)
    httpRequest.open('GET', 'demo.txt', true);
    httpRequest.send();
}
loadDoc();

/*
HTTP
methods : GET, POST, PUT(edit), DELETE, PATCH(huge files), OPTIONS,...
HTTP readystate
*/