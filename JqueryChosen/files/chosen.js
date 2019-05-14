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

jQuery(function($){
	$("select").each(function() {

		var element_width = this.offsetWidth;

		// calculate width of elements that are not visible
		if(!$(this).is(":visible")) {
			var clone = $(this).clone();
			clone.css("visibility","hidden");
			$('body').append(clone);
			element_width = clone.outerWidth();
			clone.remove();
		}

		$(this).attr("data-placeholder", SELECTION_ONE_OPTION).chosen({
			no_results_text: NO_RESULTS,
			allow_single_deselect: true,
			width: element_width + 60
		}).addClass("chosen-plugin-auto-hide");

	});
});
