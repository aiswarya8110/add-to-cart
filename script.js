// Getting all Pair Containers
const pairContainers = [...document.getElementsByClassName("pair-container")];

const hideAllItems = ()=>{

    // Hiding previously selected element before DOM changes
    pairContainers.forEach((pairContainer)=>{

        if(pairContainer.lastElementChild.hidden === false){
            
            pairContainer.lastElementChild.style.display = "none";
            pairContainer.classList.remove("selected-pair-container");

            const children = pairContainer.firstElementChild.children;

            children[2].firstElementChild.style.visibility="hidden";
            children[3].firstElementChild.style.display="none";
        }
    })
}

const showSelectedItem = (selectedPairContainer)=>{

    // Manipulating element based on selected Pair Container
    pairContainers.forEach((pairContainer)=>{
        if(pairContainer.id === selectedPairContainer.id){
            pairContainer.hidden = false;
            pairContainer.classList.add("selected-pair-container");
            pairContainer.lastElementChild.style.display = "block";

            const children = pairContainer.firstElementChild.children;

            children[2].firstElementChild.style.visibility = "visible";
            children[3].firstElementChild.style.display = "block";
        }
    })
}

const handleClick = (e, pairContainer )=>{

    // Checking if the target element is input or not 
    if(e.target.type === "radio"){
        hideAllItems();
        showSelectedItem(pairContainer);
    }
}

// Adding Event Listeners to each Pair Container 

pairContainers.forEach(pairContainer=>(
    pairContainer.addEventListener("click", e => handleClick(e, pairContainer))
))