console.log("Hello")

// let's say this is the data we obtained from some API
const dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "T-Rex",
    "Voldemort",
    "Wednesday"
]

const costumesContainer = document.getElementById("costumesContainer")

console.log(costumesContainer)

renderData()

function createNewEntry(list, costume) {
     // create list items
     const newCostumeEntry = document.createElement("li")
     newCostumeEntry.innerText = costume

     // Create and append a remove button
     const removeButton = document.createElement("button")
     removeButton.innerText = `Remove ${costume}`

     // Add the functionality to the remove button 
     removeButton.addEventListener("click", () => {
         removeCostumeFromList(list, newCostumeEntry)
     })

     newCostumeEntry.appendChild(removeButton)

     list.appendChild(newCostumeEntry)
}

function renderData() {
    const costumesContainerList = document.createElement("ul")
    costumesContainerList.id = "costumesContainerList"

    dataArray.forEach((costume) => {
        // let's see what we are dealing with
        console.log(costume)

        createNewEntry(costumesContainerList, costume)
    })

    costumesContainer.appendChild(costumesContainerList)
}

function removeCostumeFromList(list, entry) {
    list.removeChild(entry)
}

const formInputButton = document.getElementById("formInputButton")
formInputButton.addEventListener("click", (event) => {
    addCostumeToList(event)
})

function addCostumeToList(event) {
    event.preventDefault()

    // get the form
    const costumeForm = document.getElementById("costumeInputForm")

    // check the validity
    const isFormValid = costumeForm.checkValidity()

    if (!isFormValid) {
        costumeForm.reportValidity()
        return
    }

    // get the input field
    const newCostumeInput = document.getElementById("costumeInputText")

    // get the costumes container list
    const costumesContainerList = document.getElementById("costumesContainerList")

    // call the createNewEntry function to create a new costume entry at the end
    createNewEntry(costumesContainerList, newCostumeInput.value)

    newCostumeInput.value = ""
    newCostumeInput.focus()
}