define(['stream-pro:controllers/settings'], (RecordController) => {
    return class extends RecordController {

        defaultAction = 'index'

        checkAccess() {
            if (this.getUser().isAdmin()) {
                return true;
            }
            return false;
        }

        index() {
            const model = this.getSettingsModel();

            model.once('sync', function() {
                model.id = '1';
                this.main('views/settings/edit', {
                    model: model,
                    headerTemplate: 'stream-pro:views/admin/settings-header',
                    recordView: 'stream-pro:views/admin/settings'
                });
            }, this);
            
            model.fetch();
        }
    }
});