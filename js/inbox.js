$(function(){

    // Inbox Search Form Toggle
    $('#btn-search-toggle').click(function(event){
        event.preventDefault();
        event.stopPropagation();
        
        const thisElem = $(this);
        const searchFormElem = $("#inbox-search-form");
        const inboxFilterElem = $('#inbox-filter');
    });

})(jQuery);