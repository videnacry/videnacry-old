const bookCover = {}
bookCover.html = ({alt, imgVerticalSrc, imgHorizontalSrc}) => `
<article class="book-cover-c">
	<div class="responsive-vertical">
	<section class="star-out" style="background-image: url(${imgVerticalSrc})">
		<img src="${imgVerticalSrc}" alt="${alt}"/>
		<p>En nuestra realidad siempre encontraremos que existen caminos opuestos en cuanto a su objetivo, de este modo se rige lo que conocemos y lo usamos para llegar a obtener algo (una bebida dulce por ejemplo), pero estos caminos que cruzamos nos llevan a buscar otro (una bebida amarga) o seguir por uno de sus similares (una bebida muy dulce) y los caminos nos van formando, para comprender la trascendencia de esto vasta con saber que "elegir" es un camino y con esto en cuenta,  descubrimos en este cuadro que habla sobre el camino utilizando por medida al ser humano, que cada color representa un camino y el cambio de ser una cosa a otra viene dado por la forma (el hombre azul (soso en caso que subsita) en león (animal que vive por la naturaleza); el feto rojo (ser del que poco depende su vida) en bebe (qué ya puede llorar enérgicamente) y el mismo conjunto es algo que comenzó siendo un tren sobre las ruedas de un tren invertido (transportes qué crecen por lo que llevan y son impulsados el uno por el otro (como las armas y los escudos)), para terminar diré que el verde representa a la naturaleza, el rojo al autocomplacimiento, el azul al rechazo qué es movido por el instinto de supervivencia, el negro a la libre elección (sobreponiendose incluso a lo natural, por ello lleva una forma tan rara y hace de arma y cura,  utiliza las nociones abstractas de lo que percibe), el café al conflicto (a favor y en contra, permanece en  estado contemplativo a través de sus gafas), y el blanco es el infinito qué se puede encontrar en todas partes y contener en palabras... Eres libre de analizar el cuadro con y sin las luces que te he dado, puedes tambi&eacute;n contactarme.</p>
	</section>
	<img src="${imgVerticalSrc}" alt="${alt}"/>
	</div>
	<div class="responsive-horizontal">
	<section class="star-out" style="background-image: url(${imgHorizontalSrc})">
		<img src="${imgHorizontalSrc}" alt="${alt}"/>
		<p>En nuestra realidad siempre encontraremos que existen caminos opuestos en cuanto a su objetivo, de este modo se rige lo que conocemos y lo usamos para llegar a obtener algo (una bebida dulce por ejemplo), pero estos caminos que cruzamos nos llevan a buscar otro (una bebida amarga) o seguir por uno de sus similares (una bebida muy dulce) y los caminos nos van formando, para comprender la trascendencia de esto vasta con saber que "elegir" es un camino y con esto en cuenta,  descubrimos en este cuadro que habla sobre el camino utilizando por medida al ser humano, que cada color representa un camino y el cambio de ser una cosa a otra viene dado por la forma (el hombre azul (soso en caso que subsita) en león (animal que vive por la naturaleza); el feto rojo (ser del que poco depende su vida) en bebe (qué ya puede llorar enérgicamente) y el mismo conjunto es algo que comenzó siendo un tren sobre las ruedas de un tren invertido (transportes qué crecen por lo que llevan y son impulsados el uno por el otro (como las armas y los escudos)), para terminar diré que el verde representa a la naturaleza, el rojo al autocomplacimiento, el azul al rechazo qué es movido por el instinto de supervivencia, el negro a la libre elección (sobreponiendose incluso a lo natural, por ello lleva una forma tan rara y hace de arma y cura,  utiliza las nociones abstractas de lo que percibe), el café al conflicto (a favor y en contra, permanece en  estado contemplativo a través de sus gafas), y el blanco es el infinito qué se puede encontrar en todas partes y contener en palabras... Eres libre de analizar el cuadro con y sin las luces que te he dado, puedes tambi&eacute;n contactarme.</p>
	</section>
	<img src="${imgHorizontalSrc}" alt="${alt}"/>
	</div>
</article>
`
bookCover.init = ({imgVerticalSrc, responsive = false, imgHorizontalSrc, stellarRatio = 2, story, selector, alt = 'picture made with ink', flip = false}) => {
	$(selector).html(bookCover.html({alt, imgVerticalSrc, imgHorizontalSrc}))
	if (flip) $(selector + ' article').addClass('flipped')
	const elements = {
		responsiveHorizontalDiv: $(selector + ' .responsive-horizontal'),
		responsiveVerticalDiv: $(selector + ' .responsive-vertical'),
		sections: $(selector + ' article>div>section'),
		divsImg: $(selector + ' article>div>img')
	}
	if (!responsive) {
		elements.responsiveHorizontalDiv.remove()
		elements.responsiveVerticalDiv.removeClass('responsive-vertical')
	}

	elements.divsImg.click(function() {
		this.classList.contains('star-in') ? this.classList.remove('star-in') : this.classList.add('star-in')
		elements.sections.removeClass('star-in').addClass('star-out')
	}).each(function() {
		this.dataset.stellarRatio = stellarRatio
	})

	elements.sections.click(function() {
		this.classList.contains('star-in') ? elements.sections.removeClass('star-in').addClass('star-out') : elements.sections.addClass('star-in').removeClass('star-out')
		elements.divsImg.removeClass('star-in')
	}).children('p').text(story)
}