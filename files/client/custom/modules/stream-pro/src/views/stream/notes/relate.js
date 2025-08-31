define('stream-pro:views/stream/notes/relate', ['views/stream/notes/relate'], (RelateNoteStreamView) => {

    return class extends RelateNoteStreamView {
 
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