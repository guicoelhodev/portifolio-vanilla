console.log('File was loaded')

/** @function getProjects
	* @returns {Array<{ 
	* 	title: string,
	* 	src: string,
	* 	href: string
	* 	languages: Array<string>
	* 	}>}
	*/
function getProjects() {

	return [
		{
			title: "Pomodoro lofi",
			src: "./assets/radio_lofi.png",
			href: "https://radio.guicoelhodev.com/",
			languages: [
				'lni lni-svelte text-2xl text-orange-600',
				'lni lni-svelte text-2xl text-orange-600'
			]
		},
		{
			title: "React Music",
			src: "./assets/react_music.png",
			href: "https://react-music-xi.vercel.app/",
			languages: ['lni lni-svelte text-2xl text-orange-600']
		},
		{
			title: "Pokedex",
			src: "./assets/pokedex.png",
			href: "https://pokedex.guicoelhodev.com/",
			languages: ['lni lni-svelte text-2xl text-orange-600']
		},
		{
			title: "Discord clone",
			src: "./assets/discord_ui_clone.png",
			href: "https://pokedex.guicoelhodev.com/",
			languages: ['lni lni-svelte text-2xl text-orange-600']
		}
	]
}

document.addEventListener('alpine:init', () => {
	Alpine.data('projects', () => ({
		projects: getProjects()
	}))
})
