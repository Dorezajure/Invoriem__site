$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
		responsive : {
		loop: true,
			0 : {
				items: 2,
				margin: 32,
				dots: false,
				loop: true,
			},
			601 : {
				items: 3,
				dots: false,
				margin: 32,
				loop: true,
			},
			1001 : {
				items: 3,
				margin: 48,
				dots: false,
				loop: true,
			}
		}
    });
});

/*Скрипт для видео*/
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

/*Как ведет себя скрипт, при клике по кнопке срабатывает либо if либо else. в случае с if видео встает на паузу исчезает 
привьюшка, но остается прозрачный фон и кнопка, если работает else то просто идет прокрутка видео без сторонних элементов, 
на повторе*/

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
		videoWrapper.classList.remove('video-overlay');
		videoBtn.classList.add('none');
		video.play();
	} else {
		videoWrapper.classList.add('video-overlay');
		videoBtn.classList.remove('none');
		video.pause();
	}
});

/*Мобильная навигация*/
const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function () {
	mobileNav.classList.remove('none')
	document.body.classList.add('no-scroll')
}

closeNavbtn.onclick = function () {
	mobileNav.classList.add('none')
	document.body.classList.remove('no-scroll')
}
