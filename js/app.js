var me = new Vivus('me', {
   	onReady: function (myVivus) {
          // `el` property is the SVG element
          // myVivus.el.setAttribute('height', 'auto');
    }
}), work = new Vivus('work', {
   	onReady: function (myVivus) {
          // `el` property is the SVG element
          // myVivus.el.setAttribute('height', 'auto');
    }
}), skills = new Vivus('skills', {
   	onReady: function (myVivus) {
          // `el` property is the SVG element
          // myVivus.el.setAttribute('height', 'auto');
    }
}), contact = new Vivus('contact', {
   	onReady: function (myVivus) {
          // `el` property is the SVG element
          // myVivus.el.setAttribute('height', 'auto');
    }
});

var goToWork = function(){
	me.play(-3);
	skills.play(-3);
	contact.play(-3);
	work.play(-3);
	setTimeout('window.location.href = "work.php";', 1200);
	$( "h2" ).switchClass( "quote", "disappearing", 1000, "easeInOutQuad" );
    $( "span" ).switchClass( "android", "disappearing", 1000, "easeInOutQuad" );
}

var goToSkills = function(){
	me.play(-3);
	skills.play(-3);
	contact.play(-3);
	work.play(-3);
	setTimeout('window.location.href = "skills.php";', 1200);
	$( "h2" ).switchClass( "quote", "disappearing", 1000, "easeInOutQuad" );
    $( "span" ).switchClass( "android", "disappearing", 1000, "easeInOutQuad" );
}

var goToContact = function(){
	me.play(-3);
	skills.play(-3);
	contact.play(-3);
	work.play(-3);
	setTimeout('window.location.href = "contact.php";', 1200);
	$( "h2" ).switchClass( "quote", "disappearing", 1000, "easeInOutQuad" );
    $( "span" ).switchClass( "android", "disappearing", 1000, "easeInOutQuad" );
}

// If persisted then it is in the page cache, force a reload of the page.
window.onpageshow =function(event){
	if(event.persisted){        
		document.body.style.display ="none";        
		location.reload();
    }
};



