console.log('File was loaded')

/** @function getProjects
	* @returns {Array<{ title: string }>}
	*/
function getProjects() {

	return [
		{ title: "Project 1" },
		{ title: "Project 2" },
		{ title: "projects 3" }
	]
}

document.addEventListener('alpine:init', () => {
	Alpine.data('projects', () => ({
		projects: getProjects()
	}))
})
