define('stream-pro:views/stream/notes/mention-in-post', ['views/stream/notes/mention-in-post'], (MentionInPostNoteStreamView) => {

    return class extends MentionInPostNoteStreamView {
 
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