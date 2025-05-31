import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel, PluginPostStatusInfo } from '@wordpress/editor';

const PluginDocumentSettingPanelTest = () => (
    <PluginDocumentSettingPanel
        name="custom-panel"
        title="Custom Panel"
    >
        Custom Panel Contents
    </PluginDocumentSettingPanel>
);

registerPlugin( 'plugin-document-setting-panel', { render: PluginDocumentSettingPanelTest } );
