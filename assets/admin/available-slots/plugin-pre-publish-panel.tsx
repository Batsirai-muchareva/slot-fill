import { registerPlugin } from '@wordpress/plugins';
import { PluginPrePublishPanel } from '@wordpress/editor';

const PluginPrePublishPanelTest = () => (
    <PluginPrePublishPanel
        className="custom-panel-class"
        initialOpen
        title="My Custom Panel Pre Publish"
    >
        <p>Pre Publish Panel</p>
    </PluginPrePublishPanel>
);

registerPlugin( 'plugin-pre-publish-panel-test', { render: PluginPrePublishPanelTest } );
