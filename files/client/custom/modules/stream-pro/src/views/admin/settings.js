define('stream-pro:views/admin/settings', ['views/settings/record/edit'], (SettingsEditRecordView) => {
    return class extends SettingsEditRecordView {

        gridLayoutType = 'record'

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

            this.events['click button[data-action="save"]'] = () => {
                this.actionSave();
                this.broadcastUpdate();
            };
            
            this.events['click button[data-action="cancel"]'] = () => {
                this.cancel();
            };
            
            this.events['click button[data-action="resetToDefault"]'] = () => {
                this.confirm(this.translate('confirmation', 'messages'), () => {
                    this.resetToDefault();
                    this.broadcastUpdate();
                });
            };
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