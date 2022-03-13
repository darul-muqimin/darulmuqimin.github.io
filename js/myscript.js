   
   const santris = document.getElementById('santri');
    const thumbns = document.querySelector('.thumbn');
   
    const thumbnailss= document.querySelectorAll('.thumbnailss rounded');
    santris.addEventListener('click', function(e) {
        if ( e.target.className == 'thumbnailss rounded' ) {
            thumbns.src = e.target.src;
        
        }

    });