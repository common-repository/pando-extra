<?php

add_filter( 'rwmb_meta_boxes', 'bearr_cpt_meta_fields' );

function bearr_cpt_meta_fields( $meta_boxes ) {
	$prefix = 'bearr_';

    /*Post Format: Quote*/
    $meta_boxes[] = array(
        'title'      => esc_html( 'Post Format: Quote - Options', 'bearr' ),
        'post_types' => array( 'post'),
        'context' => 'normal',
        'show' => array(
            'relation' => 'OR',
            'post_format' => array('Quote'),
            ),
        'fields'     => array(    
            array(
                'id'   => $prefix. 'quote_author',
                'name' => esc_html( 'Quote Author', 'bearr' ),
                'type' => 'text',
                //'desc' => 'Please input the URL for your link in this field. (Example: http://www.themebear.co)',
            )
        ),
    );

	/*Post Format: Link*/
    $meta_boxes[] = array(
        'title'      => esc_html( 'Post Format: Link - Options', 'bearr' ),
        'post_types' => array( 'post'),
        'context' => 'normal',
		'show' => array(
			'relation' => 'OR',
			'post_format' => array('Link'),
			),
        'fields'     => array(    
        	array(
                'id'   => $prefix. 'link_url',
                'name' => esc_html( 'Link URL', 'bearr' ),
                'type' => 'text',
                'desc' => 'Please input the URL for your link in this field. (Example: http://www.themebear.co)',
            )
        ),
    );


    /*Post Format: Vídeos*/
    $meta_boxes[] = array(
        'title'      => esc_html( 'Post Format: Video – Options', 'bearr' ),
        'post_types' => array( 'post'),
        'context' => 'normal',
		'show' => array(
			'relation' => 'OR',
			'post_format' => array('Video'),
			),
        'fields'     => array(    
        	array(
                'id'   => $prefix. 'video',
                'name' => esc_html( 'Vídeo', 'bearr' ),
                'type' => 'wysiwyg',
                'desc' => 'Please enter the link of your video inside the [embed shortcode].<br/><b>This can be used for YouTube and Vimeo.</b><br/>
                <b>Example:</b></br><br/>
				[embed]https://www.youtube.com/watch?v=ScMzIvxBSi4[/embed]<br/><br/>	
				The video will be displayed in place of the featured image.<br/>
				You can also use the <b>Vídeopress (via the Jetpack plugin)</b> and paste the shortcode here.',
            )
        ),
    );    

    return $meta_boxes;
}

