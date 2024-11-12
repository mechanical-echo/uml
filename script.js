const galleryData = [
    {
        path: './images/sequence/uml-object-symbol.svg',
        description: '<b>1. Objekta simbols.</b><br> Reprezentē klasi vai objektu UML. Objekta simbols parāda, kā objekts uzvedīsies sistēmas kontekstā. Šajā formā nevajadzētu uzskaitīt klases atribūtus.'
    },
    {
        path: './images/sequence/uml-activation-box-symbol.svg',
        description: "<b>2. Aktivizācijas lodziņš.</b><br> Attēlo laiku, kas nepieciešams, lai objekts pabeigtu uzdevumu. Jo ilgāks būs uzdevums, jo garāks kļūst aktivizācijas lodziņš."
    },
    {
        path: './images/sequence/uml-actor-symbol.svg',
        description: '<b>3. Aktora simbols.</b><br> Parāda entitātes, kas mijiedarbojas ar sistēmu vai ir tai ārējas.'
    },
    {
        path: './images/sequence/uml-package-symbol.svg',
        description: '<b>4. Pakotnes simbols.</b><br> Tiek izmantots UML 2.0 apzīmējumos, lai saturētu diagrammas interaktīvos elementus. Pazīstams arī kā ietvars, šī taisnstūrveida forma satur mazu iekšējo taisnstūri diagrammas marķēšanai.'
    },
    {
        path: './images/sequence/uml-lifeline-symbol.svg',
        description: '<b>5. Dzīves līnijas simbols</b>.<br> Attēlo laika plūsmu, kas stiepjas lejup. Šī pārtrauktā vertikālā līnija parāda secīgos notikumus, kas notiek ar objektu kartētā procesa laikā. Dzīves līnijas var sākties ar marķētu taisnstūra formu vai aktora simbolu.'
    },
    {
        path: './images/sequence/uml-option-loop-symbol.svg',
        description: '<b>6. Opciju cikla simbols</b>.<br> Tiek izmantots, lai modelētu if/then scenārijus, t.i., apstākļus, kas notiks tikai noteiktos apstākļos.'
    },
    {
        path: './images/sequence/uml-alternative-symbol.svg',
        description: '<b>7. Alternatīvas simbols.</b><br> Simbolizē izvēli (kas parasti ir savstarpēji izslēdzoša) starp divām vai vairākām ziņojumu secībām. Lai attēlotu alternatīvas, izmanto marķētu taisnstūra formu ar pārtrauktu līniju iekšpusē.'
    }
];

class Gallery {
    constructor() {
        this.currentIndex = 0;
        this.totalImages = galleryData.length;
        
        this.imageElement = document.querySelector('#image img');
        this.descriptionElement = document.querySelector('#image-desc');
        this.prevButton = document.querySelector('#btn-prev');
        this.nextButton = document.querySelector('#btn-next');
        this.prevButton.addEventListener('click', () => this.showPrevious());
        this.nextButton.addEventListener('click', () => this.showNext());
        
        this.updateDisplay();
        this.updateButtonStates();
    }
    
    showPrevious() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateDisplay();
            this.updateButtonStates();
        }
    }
    
    showNext() {
        if (this.currentIndex < this.totalImages - 1) {
            this.currentIndex++;
            this.updateDisplay();
            this.updateButtonStates();
        }
    }
    
    updateDisplay() {
        const currentImage = galleryData[this.currentIndex];
        this.imageElement.src = currentImage.path;
        this.descriptionElement.innerHTML = currentImage.description;
    }
    
    updateButtonStates() {
        this.prevButton.disabled = this.currentIndex === 0;
        this.nextButton.disabled = this.currentIndex === this.totalImages - 1;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});



let currentPage = localStorage.getItem("lastPage") ?? 0;

let buttons = document.querySelectorAll(".navBtn")
let sections = document.querySelectorAll("main");

changePage(currentPage)

function changePage(page) {
    currentPage = page
    localStorage.setItem("lastPage", currentPage)

    buttons.forEach((btn) => {
        btn.classList.remove("active")
        if(buttons[currentPage] == btn) {
            buttons[currentPage].classList.add("active")
        }
    })

    sections.forEach((sec) => {
        sec.classList.add("hidden")
        if(sections[currentPage] == sec) {
            sections[currentPage].classList.remove("hidden")
        }
    })
}
let placeholder = document.querySelector("#placeholder")
let image = document.querySelector("#img")

function showOnHover(src) {
    placeholder.classList.add("hidden")
    image.classList.remove("hidden")
    image.src = src
}

function hideOnHover() {
    placeholder.classList.remove("hidden")
    image.classList.add("hidden")
}