console.log('File was loaded')

/** @function getProjects
	* @returns {Array<{ 
	* 	title: string,
	* 	src: string,
	* 	href: string
	* 	languages: Array<string>
	* 	description: string
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
				'lni lni-typescript text-2xl  text-blue-500'
			],
			description: 'This project is a lofi radio combined with a pomodoro timer. You can choose from six available stations and adjust the volume of rain and noise'
		},
		{
			title: "React Music",
			src: "./assets/react_music.png",
			href: "https://react-music-xi.vercel.app/",
			languages: [
				'lni lni-react text-2xl text-neutral-600',
				'lni lni-typescript text-2xl  text-blue-500'
			],
			description: 'Music app that uses the Deezer API to provide intros for most of the available songs'
		},
		{
			title: "Pokedex",
			src: "./assets/pokedex.png",
			href: "https://pokedex.guicoelhodev.com/",
			languages: [
				'lni lni-nextjs text-2xl',
				'lni lni-typescript text-2xl  text-blue-500'
			],
			description: 'A complete Pokédex built with Next.js that displays detailed information about every Pokémon, including their types, abilities, stats, and more'
		},
		{
			title: "Discord clone",
			src: "./assets/discord_ui_clone.png",
			href: "https://pokedex.guicoelhodev.com/",
			languages: [
				'lni lni-vuejs text-2xl text-green-500',
				'lni lni-typescript text-2xl  text-blue-500'
			],
			description: 'A Vue-based clone of Discord’s landing page, created to practice and showcase motion effects, smooth animations, and modern UI interactions'
		}
	]
}

document.addEventListener('alpine:init', () => {
	Alpine.data('projects', () => ({
		projects: getProjects()
	}))
})
