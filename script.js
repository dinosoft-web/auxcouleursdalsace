const tabs = document.querySelectorAll('.tab')
const suiteTabs = document.querySelectorAll('.suite-tab')
const panels = document.querySelectorAll('.panel')
const suitePanels = document.querySelectorAll('.suite-panel')
const arrowsRight = document.querySelectorAll('.arrow-right')
const arrowsLeft = document.querySelectorAll('.arrow-left')
const suiteArrowsRight = document.querySelectorAll('.suite-arrow-right')
const suiteArrowsLeft = document.querySelectorAll('.suite-arrow-left')
const imageContainers = document.querySelectorAll('.image-container')
const suiteImageContainers = document.querySelectorAll('.suite-image-container')
const suiteImages = document.querySelectorAll('.suite-image')
const heroSuiteImage = document.querySelector('.hero-suite-image')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

BACKGROUND_IMAGES = [
	[
		'./assets/exterieur1.jpg',
		'./assets/exterieur2.jpg',
		'./assets/exterieur3.jpg',
		'./assets/exterieur4.jpg',
		'./assets/exterieur5.jpg',
		'./assets/exterieur6.jpg',
		'./assets/interieur1.jpg',
		'./assets/interieur2.jpg',
		'./assets/interieur3.jpg',
	],
	[
		'./assets/prestation2.jpg',
		'./assets/prestation3.jpg',
		'./assets/prestation4.jpg',
	],
	[
		'./assets/pool-night.jpeg',
		'./assets/outdoor1.jpeg',
		'./assets/outdoor2.jpeg',
		'./assets/outdoor3.jpeg',
	],
]

SUITE_BACKGROUND_IMAGES = [
	['./assets/bamboo1.jpg', './assets/bamboo2.jpg', './assets/bamboo3.jpg'],
	[
		'./assets/ruby1.jpg',
		'./assets/ruby2.jpg',
		'./assets/ruby3.jpg',
		'./assets/ruby4.jpg',
		'./assets/ruby5.jpg',
		'./assets/ruby6.jpg',
	],
	[
		'./assets/turquoise1.jpg',
		'./assets/turquoise2.jpg',
		'./assets/turquoise3.jpg',
		'./assets/turquoise4.jpg',
	],
]

HERO_SUITE_IMAGE = [
	'./assets/suite-bamboo-4.png',
	'./assets/suite-ruby.png',
	'./assets/suite-turquoise.jpg',
]

let currentImage = 0
let suiteCurrentImage = 0

btn.addEventListener('click', navToggle)

function navToggle() {
	btn.classList.toggle('open')
	menu.classList.toggle('flex')
	menu.classList.toggle('hidden')
}

suiteTabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		heroSuiteImage.style.backgroundImage = `url('${HERO_SUITE_IMAGE[index]}')`
	})
})

suiteImages.forEach((image, index) => {
	image.addEventListener('click', () => {
		if (!suiteImages[index].classList.contains('left-0')) {
			if (index === 1) {
				suiteImages[index].classList.replace('left-[230px]', 'left-0')
				suiteImages[index].classList.replace('z-10', 'z-20')
				suiteImages[index - 1].classList.replace('left-0', '-left-[1050px]')
				suiteImages[index - 1].classList.replace('z-20', 'z-0')
				suiteImages[index + 1].classList.replace(
					'-left-[1050px]',
					'left-[230px]'
				)
				suiteImages[index + 1].classList.replace('z-0', 'z-10')
			} else if (index === 2) {
				suiteImages[index].classList.replace('left-[230px]', 'left-0')
				suiteImages[index].classList.replace('z-10', 'z-20')

				suiteImages[index - 1].classList.replace('left-0', '-left-[1050px]')
				suiteImages[index - 1].classList.replace('z-20', 'z-0')

				suiteImages[index - 2].classList.replace(
					'-left-[1050px]',
					'left-[230px]'
				)
				suiteImages[index - 2].classList.replace('z-0', 'z-10')
			} else if (index === 0) {
				suiteImages[index].classList.replace('left-[230px]', 'left-0')
				suiteImages[index].classList.replace('z-10', 'z-20')
				suiteImages[index + 2].classList.replace('left-0', '-left-[1050px]')
				suiteImages[index + 2].classList.replace('z-20', 'z-0')
				suiteImages[index + 1].classList.replace(
					'-left-[1050px]',
					'left-[230px]'
				)
				suiteImages[index + 1].classList.replace('z-0', 'z-10')
			}
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

// Suite Tabs menu event listener
suiteTabs.forEach((tab) => tab.addEventListener('click', onSuiteTabClick))

function onSuiteTabClick(e) {
	// Deactivate all tabs
	suiteTabs.forEach((tab) => {
		currentImage = 0

		tab.children[0].classList.remove(
			'border-secondary',
			'border-b-4',
			'md:border-b-0'
		)
	})

	// Hide all panels
	suitePanels.forEach((panel) => panel.classList.add('hidden'))

	// Activate a new tab and panel based on the target
	e.target.classList.add('border-secondary', 'border-b-4')
	const classString = e.target.getAttribute('data-target')
	document
		.getElementById('panels')
		.getElementsByClassName(classString)[0]
		.classList.remove('hidden')
}

// Arrows event Listener
suiteArrowsRight.forEach((arrowRight, index) =>
	arrowRight.addEventListener('click', () => {
		if (suiteCurrentImage <= SUITE_BACKGROUND_IMAGES[index].length - 2)
			suiteCurrentImage++
		suiteImageContainers[
			index
		].style.backgroundImage = `url('${SUITE_BACKGROUND_IMAGES[index][suiteCurrentImage]}')`
	})
)

suiteArrowsLeft.forEach((arrowLeft, index) =>
	arrowLeft.addEventListener('click', () => {
		if (suiteCurrentImage >= 1) {
			suiteCurrentImage--
			suiteImageContainers[
				index
			].style.backgroundImage = `url('${SUITE_BACKGROUND_IMAGES[index][suiteCurrentImage]}')`
		}
	})
)
