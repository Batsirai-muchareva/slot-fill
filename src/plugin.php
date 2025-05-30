<?php

namespace Batsirai\SlotFill;

class Plugin {

	public function init(): void {
		( new Frontend() )->register_hooks();
		( new Admin() )->register_hooks();
	}
}
