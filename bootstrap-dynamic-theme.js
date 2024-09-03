/*Theme Changer Plugin*/
var themes = {
	 "default": "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css",
    "cerulean" : "https://bootswatch.com/5/cerulean/bootstrap.min.css",
    "cosmo" : "https://bootswatch.com/5/cosmo/bootstrap.min.css",
    "cyborg" : "https://bootswatch.com/5/cyborg/bootstrap.min.css",
    "flatly" : "https://bootswatch.com/5/flatly/bootstrap.min.css",
    "journal" : "https://bootswatch.com/5/journal/bootstrap.min.css",
    "readable" : "https://bootswatch.com/5/readable/bootstrap.min.css",
    "simplex" : "https://bootswatch.com/5/simplex/bootstrap.min.css",
    "slate" : "https://bootswatch.com/5/slate/bootstrap.min.css",
    "spacelab" : "https://bootswatch.com/5/spacelab/bootstrap.min.css",
	  "amelia" : "https://bootswatch.com/5/amelia/bootstrap.min.css",
    "united" : "https://bootswatch.com/5/united/bootstrap.min.css"
}

$(function(){
   var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
    themesheet.appendTo('head');

    $('#themeDropdown a').empty();
    var themeList = Object.keys(themes);
    for (var i = 0; i < themeList.length; i++) {
        var selectedTheme = themeList[i];
        $('#themeDropdown').append('<a class="dropdown-item theme-link" href="#" data-theme="'+selectedTheme+'">'+selectedTheme+'</a>');
    }

    $('.theme-link').click(function(){
        var themeurl = themes[$(this).attr('data-theme')]; 
         themesheet.attr('href',themeurl);
         $('#selectedTheme').text($(this).attr('data-theme'));
     });
});

(function ($) {
    "use strict";
    $.fn.ChangeTheme = function (themename) {
		var themesheet = $('<link href="'+themes['default']+'" rel="stylesheet" />');
		themesheet.appendTo('head');
		var themeurl = themes[themename]; 
		themesheet.attr('href',themeurl);
		return this;
    }
}(jQuery));

/**
*	URL For Themes :
*	===================
*	 "default": "https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css",
*    "cerulean" : "https://bootswatch.com/5/cerulean/bootstrap.min.css",
*    "cosmo" : "https://bootswatch.com/5/cosmo/bootstrap.min.css",
*    "cyborg" : "https://bootswatch.com/5/cyborg/bootstrap.min.css",
*    "flatly" : "https://bootswatch.com/5/flatly/bootstrap.min.css",
*    "journal" : "https://bootswatch.com/5/journal/bootstrap.min.css",
*    "readable" : "https://bootswatch.com/5/readable/bootstrap.min.css",
*    "simplex" : "https://bootswatch.com/5/simplex/bootstrap.min.css",
*    "slate" : "https://bootswatch.com/5/slate/bootstrap.min.css",
*    "spacelab" : "https://bootswatch.com/5/spacelab/bootstrap.min.css",
*	 "amelia" : "https://bootswatch.com/5/amelia/bootstrap.min.css",
*    "united" : "https://bootswatch.com/5/united/bootstrap.min.css"
*
*
*/
