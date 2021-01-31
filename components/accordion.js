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

    const toggleButton = document.createElement('button')
    toggleButton.classList.add('accordion-toggle-button')
    itemTitleContainer.appendChild(toggleButton)

    const itemDescription = document.createElement('div')
    itemDescription.classList.add('accordion-item-description')
    container.appendChild(itemDescription)

    toggleButton.addEventListener('click', () => {
        itemDescription.classList.toggle('opened')
    })

    itemTitle.innerHTML = title;
    itemDescription.innerHTML = description;

    return container;
}