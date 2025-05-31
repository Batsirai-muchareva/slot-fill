import { __ } from '@wordpress/i18n';
import { PluginSidebar } from '@wordpress/editor';
import {
    PanelBody,
    Button,
    TextControl,
    SelectControl,
} from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useState } from '@wordpress/element';

const PluginSidebarExample = () => {
    const [ text, setText ] = useState( '' );
    const [ select, setSelect ] = useState( 'a' );

    return (
        <PluginSidebar
            name="plugin-sidebar-example"
            title={ __( 'My PluginSidebar' ) }
            icon={ 'smiley' }
        >
            <PanelBody>
                <h2>
                    { __( 'This is a heading for the PluginSidebar example.' ) }
                </h2>
                <p>
                    { __(
                        'This is some example text for the PluginSidebar example.'
                    ) }
                </p>
                <TextControl
                    __nextHasNoMarginBottom
                    __next40pxDefaultSize
                    label={ __( 'Text Control' ) }
                    value={ text }
                    onChange={ ( newText ) => setText( newText ) }
                />
                <SelectControl
                    label={ __( 'Select Control' ) }
                    options={ [
                        { value: 'a', label: 'Option A' },
                        { value: 'b', label: 'Option B' },
                        { value: 'c', label: 'Option C' },
                    ] }
                    onChange={ ( newSelect ) => setSelect( newSelect ) }
                />
                <Button variant="primary">{ __( 'Primary Button' ) } </Button>
            </PanelBody>
        </PluginSidebar>
    );
};

// Register the plugin.
registerPlugin( 'plugin-sidebar-example-ttttttt', { render: PluginSidebarExample } );
