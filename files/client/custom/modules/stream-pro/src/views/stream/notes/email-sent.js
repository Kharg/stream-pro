define('stream-pro:views/stream/notes/email-sent', ['views/stream/notes/email-sent'], (EmailSentNoteStreamView) => {

    return class extends EmailSentNoteStreamView {
 
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