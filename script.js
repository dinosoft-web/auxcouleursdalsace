const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const arrowsRight = document.querySelectorAll('.arrow-right')
const arrowsLeft = document.querySelectorAll('.arrow-left')
const imageContainers = document.querySelectorAll('.image-container')
const suiteImages = document.querySelectorAll('.suite-image')

BACKGROUND_IMAGES = [
	[
		'../assets/pool-night.jpeg',
		'../assets/outdoor1.jpg',
		'../assets/outdoor2.JPG',
		'../assets/outdoor3.jpg',
	],
	[
		'../assets/pool-night.jpeg',
		'../assets/outdoor1.jpeg',
		'../assets/outdoor2.jpeg',
		'../assets/outdoor3.jpeg',
	],
	[
		'../assets/pool-night.jpeg',
		'../assets/outdoor1.jpeg',
		'../assets/outdoor2.jpeg',
		'../assets/outdoor3.jpeg',
	],
]

let currentImage = 0

suiteImages.forEach((image, index) => {
	image.addEventListener('click', () => {
		if (!suiteImages[index].classList.contains('left-0')) {
			suiteImages[index].classList.replace('left-[230px]', 'left-0')
			suiteImages[index - 1].classList.replace('left-0', '-left-[1050px]')
			suiteImages[index + 1].classList.replace('left-[460px]', 'left-[230px]')
		}
	})
})

// Arrows event Listener
arrowsRight.forEach((arrowRight, index) =>
	arrowRight.addEventListener('click', () => {
		if (currentImage <= BACKGROUND_IMAGES[index].length - 2) currentImage++
		imageContainers[
			index
		].style.backgroundImage = `url('${BACKGROUND_IMAGES[index][currentImage]}')`
	})
)

arrowsLeft.forEach((arrowLeft, index) =>
	arrowLeft.addEventListener('click', () => {
		if (currentImage >= 1) {
			currentImage--
			imageContainers[
				index
			].style.backgroundImage = `url('${BACKGROUND_IMAGES[index][currentImage]}')`
		}
	})
)

arrowsLeft.forEach((arrowLeft) =>
	arrowLeft.addEventListener('click', onArrowLeftClick)
)

function onArrowRigthClick() {}

function onArrowLeftClick() {}

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
	// Deactivate all tabs
	tabs.forEach((tab) => {
		currentImage = 0
		tab.children[0].classList.remove(
			'border-secondary',
			'border-b-4',
			'md:border-b-0'
		)
	})

	// Hide all panels
	panels.forEach((panel) => panel.classList.add('hidden'))

	// Activate a new tab and panel based on the target
	e.target.classList.add('border-secondary', 'border-b-4')
	const classString = e.target.getAttribute('data-target')
	document
		.getElementById('panels')
		.getElementsByClassName(classString)[0]
		.classList.remove('hidden')
}
