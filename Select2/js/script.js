
$(function() {
    $('#states').select2();

    $('#departements').select2({
        tags: true,
        tokenSeparators: [",", " "]
    }).on("change", function(){
        let mot = $(this).find('[data-select2-tag="true"]:last-of-type')
        console.log(mot.val());
    })
});

