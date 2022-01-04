    const santris = document.getElementById('santri');
    const thumbns = document.querySelector('.thumbn');
   
    const thumbnailss= document.querySelectorAll('.thumbnails rounded');
    santris.addEventListener('click', function(e) {
        if ( e.target.className == 'thumbnails rounded' ) {
            thumbns.src = e.target.src;
        
        }

    });