
const Navbar = {}

Navbar.html = $(`
<div class="navbar-c">
<aside class="navbar-s">
	<nav>
		<button class="close">&times;</button>
		<ul>
			<li><a href="./index.html">Featured</a></li>
			<li><a href="./biography.html">Biography & Contact</a></li>
			<li><a href="./gallery.html">Gallery</a></li>
			<li><a href="./software.html">Software</a></li>
		</ul>
	</nav>
</aside>

<button class="toggler ui-button ui-corner-all">
	<ul>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</button>
</div>
`)

Navbar.init = ({fixed = false, variant = 'text-light', backdropImg = "./public/img/condor.jpg"}) => {
    
    const backdropElmt = $('<div class="backdrop"><div/>').css({backgroundImage:"url(" + backdropImg + ")"})
	$('.navbar-s').addClass(variant).css({backgroundImage: "url(" + backdropImg + ")"})
	if (fixed) $('.navbar-c .toggler').addClass('fixed')

    function hideNavbar() {
        $('.navbar-s').removeClass('show')
        backdropElmt.off('click', hideNavbar).detach()
    }
    $('.toggler').first().click(function() {
        $('.navbar-s').addClass('show').before(backdropElmt.on('click', hideNavbar))
    })
    $('.navbar-s .close').click(hideNavbar)
}