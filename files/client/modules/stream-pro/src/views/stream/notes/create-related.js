define('stream-pro:views/stream/notes/create-related', 'views/stream/notes/create-related', function (Dep) {
    return Dep.extend({
        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            if (this.getConfig().get('streamFullDateTime')) {
                $("div.stream-date-container a span").text(function() {
                    return $(this).attr('title');
                });
            }
        }
    });
});
