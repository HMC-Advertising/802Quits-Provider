<?php
function provider_scripts() {
	wp_register_style("provider-style", plugins_url("assets/style/css/style.css", __FILE__), array(), '1.0.0');

	wp_register_script("provider-script", plugins_url("assets/script/dev.js", __FILE__), array(), '1.0', true);
}

add_action( 'wp_enqueue_scripts', 'provider_scripts' );
