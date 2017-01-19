/*

 License:
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 file except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under the
 License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the License for the
 specific language governing permissions and limitations under the License.
 */

jQuery(function ($) {
	$("select").attr("data-placeholder",SELECTION_ONE_OPTION).chosen({
		no_results_text: NO_RESULTS,
    allow_single_deselect: true
  });
  var project_menu = $("#navbar-container .dropdown-menu.dropdown-menu-right.dropdown-yellow.dropdown-caret.dropdown-close.scrollable-menu");
  project_menu.attr("id", "project_menu_list");
  project_menu.addClass("list");
  $("#project_menu_list").offsetParent().attr("id", "project_menu");
  $("#project_menu a.dropdown-toggle").attr("id", "project_menu_current");

  var current_project_name = $("#project_menu_current ").html().match(/(.*)[^<]/g)[ 1 ]

  $('<input class="search" placeholder="' + current_project_name + '" id="project_menu_search" style="display:none;"/>').insertBefore("#project_menu_list");

  $("#project_menu_current ").click(function () {
    $(this).hide();
    $("#project_menu_search").show();
    $("#project_menu_search").focus();
  });

  $("#project_menu_search ").blur(function () {
    $(this).hide();
    $("#project_menu_current").show();
  });

  $("#project_menu_list li a").addClass("name");

  var options = {
    valueNames: [ 'name' ]
  };

  var projectList = new List("project_menu", options);
})
;
 