function smInitMenus(){$("ul.navbar-nav").not(".sm").each(function(){var s=$(this);s.addClass("sm").smartmenus({subMenusSubOffsetX:2,subMenusSubOffsetY:-6,subIndicatorsPos:"append",subIndicatorsText:"...",collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:s.hasClass("navbar-right"),bottomToTopSubMenus:s.closest(".navbar").hasClass("navbar-fixed-bottom")}).find("a.current").parent().addClass("active")}).bind({"show.smapi":function(s,a){var n=$(a),t=n.dataSM("scroll-arrows"),e=$(this).data("smartmenus");t&&t.css("background-color",$(document.body).css("background-color")),n.parent().addClass("open"+(e.isCollapsible()?" collapsible":""))},"hide.smapi":function(s,a){$(a).parent().removeClass("open collapsible")},"click.smapi":function(s,a){var n=$(this).data("smartmenus");if(n.isCollapsible()){var t=$(a),e=t.parent().dataSM("sub");if(e&&e.dataSM("shown-before")&&e.is(":visible"))return n.itemActivate(t),n.menuHide(e),!1}}})}!function($){$(function(){smInitMenus()}),$.SmartMenus.prototype.isCollapsible=function(){return"left"!=this.$firstLink.parent().css("float")}}(jQuery);