
const Navbar = {}

Navbar.html = $(`
<aside class="navbar-s">
	<nav>
		<button class="close">&times;</button>
		<ul>
			<li><a>Home</a></li>
			<li><a>Biography</a></li>
			<li><a>Gallery</a></li>
			<li><a>Contact</a></li>
		</ul>
	</nav>
</aside>


<button class="navbar-toggler ui-button ui-corner-all">
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</button>
`)

Navbar.init = (backdropImg = "./public/img/condor.jpg") => {
    
    const backdropElmt = $('<div class="backdrop"><div/>').css({backgroundImage:"url(" + backdropImg + ")"})

    function hideNavbar() {
        $('.navbar-s').removeClass('show')
        backdropElmt.off('click', hideNavbar).detach()
    }
    $('.navbar-toggler').first().click(function() {
        $('.navbar-s').addClass('show').before(backdropElmt.on('click', hideNavbar))
    })
    $('.navbar-s .close').click(hideNavbar)
}