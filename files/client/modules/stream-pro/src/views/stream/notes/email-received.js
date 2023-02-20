define('stream-pro:views/stream/notes/email-received', 'views/stream/notes/email-received', function (Dep) {
    return Dep.extend({
        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            $("div.stream-date-container > * > span").each(function(){
                var element = $(this).text();
                var title = $(this).attr('title');
                var datetime = element.replace(element, title);
                $(this).text(datetime);
             });
        }
    });
});
