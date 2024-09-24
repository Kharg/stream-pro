define('stream-pro:views/stream/notes/email-received', ['views/stream/notes/email-received'], (EmailReceivedNoteStreamView) => {

    return class extends EmailReceivedNoteStreamView {
 
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