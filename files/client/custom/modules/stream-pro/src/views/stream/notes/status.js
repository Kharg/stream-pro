define('stream-pro:views/stream/notes/status', ['views/stream/notes/status'], (StatusNoteStreamView) => {

    return class extends StatusNoteStreamView {
 
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