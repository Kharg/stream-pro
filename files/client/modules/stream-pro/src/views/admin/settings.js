define('stream-pro:views/admin/settings', ['views/settings/record/edit'], function (Dep) {

    return Dep.extend({

        gridLayoutType: 'record',

        events: {
            'click button[data-action="save"]': function () {
                this.actionSave();
                this.broadcastUpdate();
            },
            'click button[data-action="cancel"]': function () {
                this.cancel();
            },
            'click button[data-action="resetToDefault"]': function () {
                this.confirm(this.translate('confirmation', 'messages'), () => {
                    this.resetToDefault();
                    this.broadcastUpdate();
                });
            },
        },

        buttonList: [
            {
                name: 'save',
                label: 'Save',
                style: 'primary',
                title: 'Ctrl+Enter',
            },
            {
                name: 'cancel',
                label: 'Cancel',
            },
            {
                name: 'resetToDefault',
                label: 'Restore',
            }
        ],

        detailLayout: [
            {
                "rows": [
                    [{"name": "streamFullDateTime"}, {"name": "streamUpdatesExanded"}],
                ],
                "style": "default",
                "label": "Stream Pro Settings"
            }
        ],

        setup: function () {
            Dep.prototype.setup.call(this);
        },

        afterSave: function () {
            Dep.prototype.afterSave.call(this);
            window.location.reload();
            },

        resetToDefault: function () {
            Espo.Ajax
            .putRequest('Settings/1', {
                streamFullDateTime: this.getMetadata().get(['entityDefs', this.scope, 'fields', 'streamFullDateTime', 'default']),
                streamUpdatesExanded: this.getMetadata().get(['entityDefs', this.scope, 'fields', 'streamUpdatesExanded', 'default']),
            })
            .then(response => {
                this.model.fetch();
                window.location.reload();
            });
        },

        broadcastUpdate: function () {
            this.getHelper().broadcastChannel.postMessage('reload');
        },

    });
});
