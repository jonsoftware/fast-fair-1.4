











// Função para redirecionar para a página de resultados de pesquisa

function searchItems() {
    // Lógica de pesquisa aqui
}








// Script para esconder e aparecer as redes sociais

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    const socialStrip = document.querySelector(".social-strip");
    if (prevScrollpos > currentScrollPos) {
        socialStrip.classList.remove("hidden");
    } else {
        socialStrip.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
};



//anuncie

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})