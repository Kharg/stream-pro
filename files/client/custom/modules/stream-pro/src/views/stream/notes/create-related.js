define('stream-pro:views/stream/notes/create-related', ['views/stream/notes/create-related'], (CreateRelatedNoteStreamView) => {

    return class extends CreateRelatedNoteStreamView {
 
         afterRender() {
             super.afterRender();
             if (this.getConfig().get('streamFullDateTime')) {
                $("div.stream-date-container a span").text(function() {
                    return $(this).attr('title');
                });
            }
         }
     }
});