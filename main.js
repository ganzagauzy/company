

var iconBx = document.querySelectorAll('.iconBx');
var contentBx = document.querySelectorAll('.contentBx');

for(var i=0; i<iconBx.length; i++){
    iconBx[i].addEventListener('click', function(){
        for (var i=0; i<contentBx.length; i++){
            contentBx[i].className='contentBx';
        }

        document.getElementById(this.dataset.id).className = 'contentBx active';

        for (var i=0; i<iconBx.length; i++){
            iconBx[i].className='iconBx';
        }
        this.className = 'iconBx active'
    })
}