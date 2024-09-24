define('stream-pro:views/stream/notes/assign', ['views/stream/notes/assign'], (AssignNoteStreamView) => {

    return class extends AssignNoteStreamView {
 
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