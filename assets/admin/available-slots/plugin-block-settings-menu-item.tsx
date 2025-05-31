import { registerPlugin } from '@wordpress/plugins';
import { PluginBlockSettingsMenuItem } from '@wordpress/editor';

const PluginBlockSettingsMenuItemTest = () => (
    <PluginBlockSettingsMenuItem
        allowedBlocks={ [ 'core/paragraph' ] }
        label="Menu item text"
        icon="smiley"
        onClick={ () => {
            alert( 'clicked' );
        } }
    />
);

registerPlugin( 'plugin-block-settings-menu-item-test', { render: PluginBlockSettingsMenuItemTest } );
