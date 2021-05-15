document.addEventListener( 'DOMContentLoaded', function(){
    var btn = document.getElementById('yivic-javascript');
    if( btn ) {
        btn.onclick = function () {
            console.log('Hello World!');
        }
    }
}, false )