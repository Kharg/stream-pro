define('stream-pro:views/admin/settings', ['views/settings/record/edit'], (SettingsEditRecordView) => {
    return class extends SettingsEditRecordView {

        gridLayoutType = 'record'

        events = {
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
        }

        buttonList = [
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
        ];

        detailLayout = [
            {
                "rows": [
                    [{"name": "streamFullDateTime"}, {"name": "streamUpdatesExpanded"}],
                ],
                "style": "default",
                "label": "Stream Pro Settings"
            }
        ];

        setup() {
            super.setup();
        }

        afterSave() {
            super.afterSave();
            window.location.reload();
        }
    
        resetToDefault() {
            Espo.Ajax
            .putRequest('Settings/1', {
                streamFullDateTime: this.getMetadata().get(['entityDefs', this.scope, 'fields', 'streamFullDateTime', 'default']),
                streamUpdatesExpanded: this.getMetadata().get(['entityDefs', this.scope, 'fields', 'streamUpdatesExpanded', 'default']),
            })
            .then(response => {
                this.model.fetch();
                window.location.reload();
            });
        }

        broadcastUpdate() {
            this.getHelper().broadcastChannel.postMessage('reload');
        }

    }
});