<?php

namespace Batsirai\SlotFill;

class Admin {
	public function register_hooks(): void {
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		add_action( 'admin_menu', [ $this, 'register_menu' ] );
	}

	public function enqueue_scripts() {
		$config = require SLOT_FILL_PLUGIN_PATH . "build/admin.asset.php";

		wp_enqueue_script(
			'react-admin',
			SLOT_FILL_PLUGIN_URL . 'build/admin.js',
			$config['dependencies'],
			$config['version'],
			true
		);
	}

	public function register_menu() {
		add_menu_page(
			'Slot Fill',
			'Slot Fill Page',
			'manage_options',
			'slot-fill',
			[ $this, 'render_admin_page' ],
			'dashicons-image-filter',
			2
		);
	}

	public function render_admin_page() {
		echo '<h1>My Plugin Settings</h1>';
		echo '<a href="/slot-fill">Go to Frontend</a>';
	}

}
