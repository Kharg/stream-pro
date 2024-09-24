define('stream-pro:views/stream/notes/post', ['views/stream/notes/post'], (PostNoteStreamView) => {

    return class extends PostNoteStreamView {
 
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