define('stream-pro:views/stream/notes/update', 'views/stream/notes/update', function (Dep) {
    return Dep.extend({
        afterRender: function () {
            Dep.prototype.afterRender.call(this);
            if (this.getConfig().get('streamUpdatesExpanded')) {
                this.$el.find('.details').removeClass('hidden');
            }
            if (this.getConfig().get('streamFullDateTime')) {
                $("div.stream-date-container a span").text(function() {
                    return $(this).attr('title');
                });
            }
        }
    });
});
