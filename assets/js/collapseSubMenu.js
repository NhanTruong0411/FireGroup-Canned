// get width of submenu before collapse
var menuDivWidth = $('.submenu').width();

// toggle collapse/expand menu
collapseSubMenu = () => {
   let menuDiv = $('.submenu');
   let collapseIcon = document.getElementById("collapseIcon");

   console.log(menuDivWidth)

   if (menuDiv.hasClass('open')) {
      if (!collapseIcon.classList.contains(collapseIcon)) {
         menuDiv.removeClass('open');
         collapseIcon.classList.add('collapseIcon');
         menuDiv.width(0);
      }
   } else {
      collapseIcon.classList.remove("collapseIcon");
      menuDiv.addClass('open');
      menuDiv.width(menuDivWidth);
   }
}


// check and uncheck radio button
$('input[type=radio]').click(function(){
   if (this.previous) {
      this.checked = false;
   }
   this.previous = this.checked;
});
