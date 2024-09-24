define('stream-pro:views/stream/notes/create', ['views/stream/notes/create'], (CreateNoteStreamView) => {

    return class extends CreateNoteStreamView {
 
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