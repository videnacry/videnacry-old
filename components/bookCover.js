const bookCover = {}
bookCover.html = `
<article class="book-cover-c">
	<section>
		<img src="./public/img/magic/Role.jpg" />
		<p>En nuestra realidad siempre encontraremos que existen caminos opuestos en cuanto a su objetivo, de este modo se rige lo que conocemos y lo usamos para llegar a obtener algo (una bebida dulce por ejemplo), pero estos caminos que cruzamos nos llevan a buscar otro (una bebida amarga) o seguir por uno de sus similares (una bebida muy dulce) y los caminos nos van formando, para comprender la trascendencia de esto vasta con saber que "elegir" es un camino y con esto en cuenta,  descubrimos en este cuadro que habla sobre el camino utilizando por medida al ser humano, que cada color representa un camino y el cambio de ser una cosa a otra viene dado por la forma (el hombre azul (soso en caso que subsita) en león (animal que vive por la naturaleza); el feto rojo (ser del que poco depende su vida) en bebe (qué ya puede llorar enérgicamente) y el mismo conjunto es algo que comenzó siendo un tren sobre las ruedas de un tren invertido (transportes qué crecen por lo que llevan y son impulsados el uno por el otro (como las armas y los escudos)), para terminar diré que el verde representa a la naturaleza, el rojo al autocomplacimiento, el azul al rechazo qué es movido por el instinto de supervivencia, el negro a la libre elección (sobreponiendose incluso a lo natural, por ello lleva una forma tan rara y hace de arma y cura,  utiliza las nociones abstractas de lo que percibe), el café al conflicto (a favor y en contra, permanece en  estado contemplativo a través de sus gafas), y el blanco es el infinito qué se puede encontrar en todas partes y contener en palabras... Eres libre de analizar el cuadro con y sin las luces que te he dado, puedes tambi&eacute;n contactarme.</p>
	</section>
	<img src="./public/img/magic/Role.jpg" />
</article>
`
bookCover.init = ({imgSrc, story, selector, alt = 'picture made with ink', flip = false}) => {
	$(selector).html(bookCover.html)
	if (flip) $(selector + ' article').addClass('flipped')
	const sectionElmt = $(selector + ' article>section')
	const imgElmt = $(selector + ' article>img')

	$(selector + ' img').prop({src: imgSrc, alt})
	imgElmt.click(function() {
		this.classList.contains('star-in') ? this.classList.remove('star-in') : this.classList.add('star-in')
		sectionElmt.removeClass('star-in').addClass('star-out')
	})

	sectionElmt.click(function() {
		this.classList.contains('star-in') ? sectionElmt.removeClass('star-in').addClass('star-out') : sectionElmt.addClass('star-in').removeClass('star-out')
		imgElmt.removeClass('star-in')
	}).css({backgroundImage: `url(${imgSrc})`}).children('p').text(story)
}