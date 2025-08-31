define('stream-pro:views/stream/notes/event-confirmation', ['crm:views/stream/notes/event-confirmation'], (EventConfirmationNoteView) => {

    return class extends EventConfirmationNoteView {
 
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