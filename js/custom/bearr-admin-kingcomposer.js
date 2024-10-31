//Slideshow
function bearr_kingc_slideshow( data, el ){

	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = 'Click to select the items that will be displayed in the slider.<br/>';
	var html2 = 'To edit the content of each slide, please go to Slider &#8594; Slides and edit the item.';
	var itemcontent = html + html2;
	return itemcontent;

}

//Portfolio
function bearr_kingc_portfolio( data, el ){

	var postsPerPage = data.postsperpage ; 
	var showFilter = data.showfilter;
	var useItemMargin = data.margin; 
	var style = data.style; 
	var columns = data.columns ; 
	var linkType = data.linkto ; 
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Number of Projects:</strong> '+postsPerPage +'  /  ';
	var html2 = '<strong>Show Filter:</strong> '+showFilter +',  /  ';
	var html3 = '<strong>Grid Style:</strong> '+style +',  /  ';
	var html4 = '<strong>Use Item Margin:</strong> '+useItemMargin +',  /  ';
	var html4 = '<strong>Number of Columns:</strong> '+columns +',  /  ';
	var html5 = '<strong>Link to:</strong> '+linkType +'.<br/>';
	var html6 = 'To edit the content of each item, please go to Portfolio &#8594; Portfolio and edit the item.';

	var itemcontent = html + html2 + html3 + html4 + html5 + html6;
	return itemcontent;
}

//Section Title
function bearr_kingc_section_title( data, el ){

	var title = data.title ; 
	var subtitle = data.subtitle ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Title:</strong> '+title +'  <br/> ';

	//var html2 = '<strong>Subtitle:</strong> '+subtitle +'';	

	var itemcontent = html;
	return itemcontent;

}

//BlogRoll
function bearr_kingc_blogroll( data, el ){

	var postsPerPage = data.postsperpage ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Number of Posts:</strong> '+postsPerPage +'';	
	

	var itemcontent = html;
	return itemcontent;

}

//Clients
function bearr_kingc_clients( data, el ){

	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = 'Click to select the items that will be displayed in the carousel.<br/>';
	var html2 = 'To edit the content of each item, please go to Clients &#8594; Clients and edit the item.';
	var itemcontent = html + html2;
	return itemcontent;

}

//Service Block
function bearr_kingc_service_block( data, el ){

	var thetitle = data.the_title ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Title:</strong> '+thetitle +'';	
	

	var itemcontent = html;
	return itemcontent;

}


//Gallery
function bearr_kingc_galleries( data, el ){

	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = 'Click to select the gallery that will be displayed in the element.<br/>';
	var html2 = 'To edit the content of the gallery, please go to "Image Gallery" on admin menu and edit the item.';
	var itemcontent = html + html2;
	return itemcontent;

}

//Gallery
function bearr_kingc_gridblog( data, el ){

	var postsPerPage = data.postsperpage ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Number of Posts:</strong> '+postsPerPage +'';	
	

	var itemcontent = html;
	return itemcontent;

}

//Quover Features
function bearr_kingc_quover( data, el ){

	var title_one = data.title_one ; 
	var title_two = data.title_two ; 
	var title_three = data.title_three ; 
	var title_four = data.title_four ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Title 1:</strong> '+title_one +'  /  ' + '<strong>Title 2:</strong> '+title_two +'  /  ';	
	var html2 = '<strong>Title 3:</strong> '+title_three +'  /  ' + '<strong>Title 4:</strong> '+title_four +'  /  ';

	var itemcontent = html+html2;
	return itemcontent;

}

//Restaurant Menu
function bearr_kingc_restaurant_menu( data, el ){

}

//Restaurant Menu Item
function bearr_kingc_restaurant_menu_item( data, el ){

	var thetitle = data.menu_item_title ;
	var theprice = data.menu_item_price ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Item Title:</strong> '+thetitle +'  /  ' + '<strong>Item Price:</strong> '+theprice +'';	
	

	var itemcontent = html;
	return itemcontent;

}

//Team
function bearr_kingc_team( data, el ){

	var html = 'Click to select the team members that will be displayed in the carousel.<br/>';
	var html2 = 'To edit the content of each item, please go to Team &#8594; Team Members and edit the item.';
	var itemcontent = html + html2;
	return itemcontent;

}

//Testimonials
function bearr_kingc_testimonials( data, el ){

	var html = 'Click to select the testimonials that will be displayed in the carousel.<br/>';
	var html2 = 'To edit the content of each item, please go to "Testimonials" on the side menu and edit the item.';
	var itemcontent = html + html2;
	return itemcontent;

}

//Timeline
function bearr_kingc_timeline_item( data, el ){

	var thetitle = data.title ;
	var thedate = data.date ; 
	var theposition = data.position ; 
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Title:</strong> '+thetitle +'  /  ' + '<strong>Date:</strong> '+thedate + '  /  ' + '<strong>Content Position:</strong> '+theposition +'';	
	

	var itemcontent = html;
	return itemcontent;

}

//Wedding Bio
function bearr_kingc_wedding_bio( data, el ){

	var thebride = data.bride_title ;
	var thegroom = data.groom_title ;  
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Bride:</strong> '+thebride +'  /  ' + '<strong>Groom:</strong> '+thegroom + '';	
	

	var itemcontent = html;
	return itemcontent;

}

//Wedding Event
function bearr_kingc_wedding_event( data, el ){

	var thename = data.event_name ;
	var thedate = data.event_date ;  
	var thetime = data.event_time ;
	
	// See the structure of the data in console.
	// el is jQuery object of outer div element

	var html = '<strong>Event:</strong> '+thename +' <br/> ' + '<strong>Date:</strong> '+thedate;	
	

	var itemcontent = html;
	return itemcontent;

}



