export function createAccordion(items) {
    const container = document.createElement('li')
    container.classList.add('accordion-item')

    for (const item of items) {
        container.appendChild(createAccordionItem(item.title, item.description))
    }

    return container;
}

function createAccordionItem(title, description) {
    const container = document.createElement('li')
    container.classList.add('accordion-item')

    const itemTitleContainer = document.createElement('div')
    itemTitleContainer.classList.add('accordion-item-title-container')
    container.appendChild(itemTitleContainer)

    const itemTitle = document.createElement('h2')
    itemTitle.classList.add('accordion-item-title')
    itemTitleContainer.appendChild(itemTitle)

    const toggleButtonContainer = document.createElement('div')
    toggleButtonContainer.classList.add('accordion-toggle-button-container')
    itemTitleContainer.appendChild(toggleButtonContainer)

    const toggleButton = document.createElement('div')
    toggleButton.classList.add('accordion-toggle-button')
    toggleButtonContainer.appendChild(toggleButton)

    const itemDescription = document.createElement('div')
    itemDescription.classList.add('accordion-item-description')
    container.appendChild(itemDescription)

    itemTitleContainer.addEventListener('click', () => {
        itemDescription.classList.toggle('opened')
        itemTitle.classList.toggle('opened')
        toggleButton.classList.toggle('opened')
    })

    const divider = document.createElement('div')
    divider.classList.add('accordion-item-divider')
    container.appendChild(divider)

    itemTitle.innerHTML = title;
    itemDescription.innerHTML = description;

    return container;
}