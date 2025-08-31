define('stream-pro:views/stream/notes/unrelate', ['views/stream/notes/unrelate'], (UnrelateNoteStreamView) => {

    return class extends UnrelateNoteStreamView {
 
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