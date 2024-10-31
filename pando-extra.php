<?php
/*
Plugin Name: Pando Extra
Plugin URI: http://wppug.com
Description: Enhances PandoWP WordPress theme with extra functionality and features.
Author: WpPug
Version: 1.1
Author URI: http://wppug.com
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * Meta Fields
 */
require_once ('inc/meta-box/meta-box.php');
require ('inc/meta-box/meta-box-show-hide.php');
require ('meta-fields-post-formats.php');
function bearr_metabox_css($hook) {
    wp_enqueue_style( 'bearr-metabox-css-file', plugins_url('/css/metabox.css', __FILE__) );
}
add_action( 'admin_enqueue_scripts', 'bearr_metabox_css' );
/*
 * WP Less
 */
require_once ('inc/wp-less/bootstrap-for-theme.php');

/*
 * Other Functions
 */
require ('functions.php');
