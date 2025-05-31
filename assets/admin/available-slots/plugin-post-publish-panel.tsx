import { registerPlugin } from '@wordpress/plugins';
import { PluginPostPublishPanel } from '@wordpress/editor';

const PluginPostPublishPanelTest = () => (
    <PluginPostPublishPanel
        className="custom-panel-class"
        title="My Custom Panel"
        initialOpen
    >
			<p>Post Publish Panel.....</p>
    </PluginPostPublishPanel>
);

registerPlugin( 'plugin-post-publish-panel-test', { render: PluginPostPublishPanelTest } );
