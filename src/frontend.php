<?php

namespace Batsirai\SlotFill;

class Frontend {
	const URL_VAR = 'slot_fill';

	public function register_hooks(): void {
		add_action( 'init', [ $this, 'add_custom_page_route' ] );
		add_filter( 'query_vars', [ $this, 'add_query_vars' ] );
		add_action( 'template_redirect', [ $this, 'render_frontend_page' ] );
	}

	public function enqueue_scripts(): void {
		$config = require SLOT_FILL_PLUGIN_PATH . "build/frontend.asset.php";

		$handle = 'react-frontend';

		wp_enqueue_script(
			$handle,
			SLOT_FILL_PLUGIN_URL . 'build/frontend.js',
			$config['dependencies'],
			$config['version'],
			true
		);

		wp_localize_script(
			$handle,
			'myPluginData',
			[
				'apiUrl'   => rest_url(),
				'userName' => wp_get_current_user()->display_name,
				'siteName' => get_bloginfo( 'name' ),
				'menuData' => $this->get_menu_data(),
			]
		);

		$this->enqueue_tailwind();
	}

	private function enqueue_tailwind(): void {
		wp_enqueue_script(
			'tailwind-browser',
			'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
			[],
			null,
			false  // load in the header (true = footer)
		);
	}

	public function add_custom_page_route(): void {
		add_rewrite_rule(
			'^slot-fill/?$',
			'index.php?' . self::URL_VAR . '=1',
			'top'
		);
	}

	public function add_query_vars( $vars ) {
		$vars[] = self::URL_VAR;

		return $vars;
	}

	public function render_frontend_page(): void {
		if ( get_query_var( self::URL_VAR ) ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );

			$this->render_body_template();
			$this->stop_further_rendering();
		}
	}

	private function render_body_template(): void {
		include SLOT_FILL_PLUGIN_PATH . '/src/template.php';
	}

	private function stop_further_rendering(): void {
		exit;
	}

	private function get_menu_data(): array {
		$menu_items = wp_get_nav_menu_items( 'primary' );

		return array_map( function ( $item ) {
			return [
				'title' => $item->title,
				'url'   => $item->url,
			];
		}, $menu_items ?: [] );
	}
}
