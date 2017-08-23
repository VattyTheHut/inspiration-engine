$(document).ready(() => {
     $('.chips').material_chip();
     $('.chips-initial').material_chip({
        data: [{
            tag: 'Quotes',
        }, {
            tag: 'love quotes',
        }, {
            tag: 'Google',
        }],
    });

    $('.chips-placeholder').material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });

    var chip = {
        tag: 'chip content',
        image: '', //optional
        id: 1, //optional
    };

    $('.chips').on('chip.delete', function(e, chip){
        // you have the deleted chip here
     });

    $('.chips').on('chip.select', function(e, chip){
        // you have the selected chip here
    });

});