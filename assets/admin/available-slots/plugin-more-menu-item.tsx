import { registerPlugin } from '@wordpress/plugins';
import { PluginMoreMenuItem } from '@wordpress/editor';

const PluginMoreMenuItemTest = () => (
    <PluginMoreMenuItem
        href="https://developer.wordpress.org/block-editor/reference-guides/slotfills/"
        target="_blank"
        rel="noopener noreferrer"
    >
        Site Editor Example: SlotFill Reference Guide
    </PluginMoreMenuItem>
);

// registerPlugin( 'plugin-more-menu-item-test', { render: PluginMoreMenuItemTest } );
