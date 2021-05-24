const CarrouselY = {}
CarrouselY.html = '<div class="carrousel-y-c"></div>'

CarrouselY.init = (backdropImgs = ['Awareness', 'Environment', 'Mage', 'Role']) => {
	const backdropElmt = $('.carrousel-y-c')
	backdropImgs.forEach(img => {
		backdropElmt.append(
			$('<img src="./public/img/backdrop/' + img + '.jpg" style="height: 140vw"/>')
		)
	})
	backdropElmt.slick({
		autoplay: true,
		vertical: true,
		slidesToShow: 2,
		adaptiveHeight: true,
		speed: 300,
		infinite: true,
		arrows: false,
		dots: false
	})
}