let abrirModal = document.getElementById("btn-modal")
let modal = document.querySelector(".modal")
let modalContent = document.querySelector(".modal-content")
let btnClose = document.querySelector(".btn-close")

abrirModal.addEventListener("click", (e)=>{
	console.log(modal)
	modal.classList.remove("hidden")
	// modalContent.addEventListener("mouseleave", (e)=>{
	// 	modal.classList.add("hidden")	
	// })
	btnClose.addEventListener("click", (e)=>{
		modal.classList.add("hidden")	
	})
})