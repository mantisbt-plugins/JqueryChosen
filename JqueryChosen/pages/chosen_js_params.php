<?php

	header ("Content-Type: text/javascript");

	$SELECTION_ONE_OPTION = plugin_lang_get("selectionOneOption");
	$NO_RESULTS = plugin_lang_get("noResults");
	$REQUIRED = lang_get("required");


	echo "var SELECTION_ONE_OPTION = '".$SELECTION_ONE_OPTION."'; ";
	echo "var NO_RESULTS = '".$NO_RESULTS."'; ";
	echo "var REQUIRED = '".$REQUIRED."'; ";