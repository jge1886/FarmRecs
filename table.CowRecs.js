
/*
 * Editor client script for DB table CowRecs
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: '/api/CowRecs',
		table: '#CowRecs',
		fields: [
			{
				"label": "Name\/ID:",
				"name": "nameid"
			},
			{
				"label": "Date:",
				"name": "date",
				"type": "datetime",
				"format": "MM\/DD\/YY"
			},
			{
				"label": "Sire:",
				"name": "sire"
			},
			{
				"label": "Dame:",
				"name": "dame"
			},
			{
				"label": "MGD:",
				"name": "mgd"
			},
			{
				"label": "Birthdate:",
				"name": "birthdate",
				"type": "datetime",
				"format": "MM\/DD\/YY"
			},
			{
				"label": "Born Organic?:",
				"name": "born_organic",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Yes"
				]
			},
			{
				"label": "Breed:",
				"name": "breed"
			},
			{
				"label": "DHIA Tag:",
				"name": "dhia_tag"
			},
			{
				"label": "Last Breeding Date:",
				"name": "last_breeding_date",
				"type": "datetime",
				"format": "ddd, D MMM YY"
			},
			{
				"label": "Breeding Record:",
				"name": "breeding_record",
				"type": "textarea"
			},
			{
				"label": "Calving Record:",
				"name": "calving_record",
				"type": "textarea"
			},
			{
				"label": "Recent Medical Check Date:",
				"name": "recent_medical_check_date",
				"type": "datetime",
				"format": "MM\/DD\/YY"
			},
			{
				"label": "Health condition:",
				"name": "health_condition",
				"type": "textarea"
			},
			{
				"label": "Treatment:",
				"name": "treatment",
				"type": "textarea"
			},
			{
				"label": "Notes:",
				"name": "notes",
				"type": "textarea"
			}
		]
	} );

	var table = $('#CowRecs').DataTable( {
		dom: 'Bfrtip',
		ajax: '/api/CowRecs',
		columns: [
			{
				"data": "nameid"
			},
			{
				"data": "date"
			},
			{
				"data": "sire"
			},
			{
				"data": "dame"
			},
			{
				"data": "mgd"
			},
			{
				"data": "birthdate"
			},
			{
				"data": "born_organic"
			},
			{
				"data": "breed"
			},
			{
				"data": "dhia_tag"
			},
			{
				"data": "last_breeding_date"
			},
			{
				"data": "breeding_record"
			},
			{
				"data": "calving_record"
			},
			{
				"data": "recent_medical_check_date"
			},
			{
				"data": "health_condition"
			},
			{
				"data": "treatment"
			},
			{
				"data": "notes"
			}
		],
		select: true,
		lengthChange: false,
		buttons: [
			{ extend: 'create', editor: editor },
			{ extend: 'edit',   editor: editor },
			{ extend: 'remove', editor: editor }
		]
	} );
} );

}(jQuery));

