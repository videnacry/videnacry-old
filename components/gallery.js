const Gallery = {}

Gallery.build = ({imagesPath, selector}) => {



const galleryElmt = $('<section class="gallery-c ui-corner-all" role="table"></section>')
imagesPath.forEach(img => {
    const galleryItemElmt = $('<div class="gallery-item"></div>')
        .css({backgroundImage: 'url(' + img + ')'})
    const imgElmt = $('<img src="' + img + '"/>')
    imgElmt.magnificPopup({
        type: 'image',
        items: {
            src: imgElmt.get(0).src
        }
    })
    const itemBlurElmt = $('<div class="gallery-item-blur"></div>')
        .append('<img class="space"/>', imgElmt, '<img class="space"/>')
    galleryItemElmt.append(itemBlurElmt)
    galleryElmt.append(galleryItemElmt)
})
$(selector).append(galleryElmt)



}