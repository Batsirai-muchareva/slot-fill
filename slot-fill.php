<?php

/**
 * Plugin Name: React Slot Fill
 * Version: 1.0.0
 * Requires at least: 6.2
 * Author: Batsirai
 */

define( 'SLOT_FILL_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'SLOT_FILL_PLUGIN_URL', plugins_url( '/', __FILE__ ) );

require_once __DIR__ . '/vendor/autoload.php';

$plugin = new Batsirai\SlotFill\Plugin();

$plugin->init();
