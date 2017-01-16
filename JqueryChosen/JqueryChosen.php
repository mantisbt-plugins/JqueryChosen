<?php

class JqueryChosenPlugin extends MantisPlugin {

	function register() {
		$this->name = 'Jquery Chosen';
		$this->description = 'Applies the Chosen jQuery plugin on all html selects';

		$this->version = '0.2';
		$this->requires['MantisCore'] = '1.2.0, < 1.4';
		// if it is mantis 1.2, require jQuery.
		// 1.3 has jQuery bundled.
		if (substr(MANTIS_VERSION, 0, 3) == "1.2")
		{
			$this->requires['jQuery'] = '1.9.1, < 1.12';
		}	

		$this->author	= 'Kiver Vinicius';
		$this->contact	= 'kivervinicius@gmail.com';
		$this->url		= 'https://github.com/kivervinicius';
	}

	function hooks() {
		return array(
			'EVENT_LAYOUT_RESOURCES' => 'resources',
		);
	}

	/**
	 * Create the resource link to load the jQuery library.
	 */
	function resources( $p_event ) {
		$resources = '<link rel="stylesheet" type="text/css" href="' . plugin_file( 'chosen.css') . '" />' .
					 '<script type="text/javascript" src="' . plugin_file( 'chosenmin.js' ) . '"></script>'.
					 '<script type="text/javascript" src="' . plugin_file( 'chosen.js' ) . '"></script>'.
					 '<script> '.
					 'var SELECTION_ONE_OPTION = "'.plugin_lang_get("selectionOneOption").'";'. 
					 'var NO_RESULTS = "'.plugin_lang_get("noResults").'";'. 
					 '</script>';
		return  $resources;
	}
}

