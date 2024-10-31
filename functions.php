<?php
/*
    Bearr Functions
*/

/*
 * Enable shortcode on menu
 */
function bearr_site_url_shortcode($atts, $content = null) {
    extract(shortcode_atts(array(
    ), $atts));

    $site_url = get_site_url();
    $site_url_ok = preg_replace('#^https?://#', '', rtrim($site_url,'/'));

    $retour ='';
    
    $retour .=  esc_url( $site_url_ok );
    
    return $retour;
}

add_shortcode("bearr-site-url", "bearr_site_url_shortcode");

add_filter('wp_nav_menu_items', 'do_shortcode');


/*
 * Generic Meta-Boxes
 */

//Custom Header
function bearr_custom_header( $meta_boxes ) {
    $prefix = 'bearr_'; 

    /*page subtitle*/
    $meta_boxes[] = array(
        'title'      => esc_html( 'Header Details', 'bearr' ),
        'post_types' => array( 'post', 'page' ),
        'fields'     => array(            
            array(
                'id'   => $prefix. 'page_subtitle',
                'name' => esc_html( 'Page Subtitle', 'bearr' ),
                'type' => 'text',
            ),  
            array(
                'id'   => $prefix. 'header_type',
                'name' => esc_html( 'Header type', 'bearr' ),
                'type' => 'radio',
                'std'   => 'classic',
                'inline' => false,
                'options' => array(
                    'classic' => esc_html( 'Classic (Default)', 'bearr' ),
                    'image' => esc_html( 'Image Background', 'bearr' ),
                    'color' => esc_html( 'Color Background', 'bearr' ),
                ),
            ),   
            array(
                'id'   => $prefix. 'header_text_align',
                'name' => esc_html( 'Text Align of the Header', 'bearr' ),
                'type' => 'radio',
                'std'   => 'left',
                'inline' => false,
                'options' => array(
                    'left' => esc_html( 'Left', 'bearr' ),
                    'center' => esc_html( 'Center', 'bearr' ),
                    'right' => esc_html( 'Right', 'bearr' ),
                ),
            ),
            array(
                'id'   => $prefix. 'mini_hero_text_color',
                'name' => esc_html( 'Custom Text Color', 'bearr' ),
                'desc' => 'Edit to customize the text color of this page or post. Only works if "Color Background" of "Image Background" option is selected.',
                'std'   => '#ffffff',
                'required'  => false,
                'type' => 'color',
            ),
            array(
                'id'   => $prefix. 'mini_hero_color',
                'name' => esc_html( 'Custom Background Color', 'bearr' ),
                'desc' => 'Edit to customize the background color of this page or post heading. Only works if "Color Background" option is selected.',
                'std'   => '#333333',
                'required'  => false,
                'type' => 'color',
            ), 
            array(
                'id'   => $prefix. 'mini_hero_image',
                'name' => esc_html( 'Background Image', 'bearr' ),
                'desc' => 'Only works if "Image Background" option is selected.',
                'required'  => false,
                'type' => 'image_upload',
                'max_file_uploads' => 1,
            ),                       
        ),
    );

    return $meta_boxes;
}

$bearr_setup_custom_page_header = get_option( 'bearr_setup_custom_page_header' );

if ( $bearr_setup_custom_page_header == 'true') {
    add_filter( 'rwmb_meta_boxes', 'bearr_custom_header' );
}
