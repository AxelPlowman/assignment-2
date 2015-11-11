var rotationAmount = 90;
var imageDegree = 0;
var imageSrc = $('.image').attr('src');
var imageList = ['img/picasso.jpg', 'img/kandinsky.jpg', 'img/pollock.jpg','img/appel.jpg', 'img/whistler.jpg'];
var imageNumber = 0;

$('.image').attr('src',imageList[imageNumber]);
imageDegree = randomRotation();
$('.image').css({transform: 'rotate(' + imageDegree + 'deg)'});

$('.rotate').on('click', function() {
	imageDegree += rotationAmount;
	$('.image').css({transform: 'rotate(' + imageDegree + 'deg)'});
});

$('.guess').on('click', function() {
	console.log(imageDegree);
	if (imageDegree === 0 || imageDegree%360 === 0) {
		$('body').css('background-color', '#70CF9A');
		alert('Well done! Click "next image" to continue.');
		$('body').css('background-color', '#ffffff');
	} else {
		$('body').css('background-color', '#B5443A');
		alert('Sorry, that was incorrect. Try again!');
		$('body').css('background-color', '#ffffff');
	};
});

$('.next-image').on('click', function() {
	imageNumber += 1;
	if (imageNumber < imageList.length) {
		imageDegree = randomRotation();
		$('.image').attr('src',imageList[imageNumber]);
		$('.image').css({transform: 'rotate(' + imageDegree + 'deg)'});
	} else {
		if (confirm('There are no more images to guess! Would you like to play again?')) {
			imageNumber = 0;
			imageDegree = randomRotation();
			$('.image').attr('src',imageList[imageNumber]);
			$('.image').css({transform: 'rotate(' + imageDegree + 'deg)'});
		}
	};
	
}); 

function randomRotation() {
	var random = Math.random();
	if (random <= 0.25) {
		return 90;
	} else if (random <= 0.50) {
		return 180;
	} else if (random <= 0.75) {
		return 270;
	} else {
		return 360;
	};
};