export function intialLoadPage() {

    const contentDiv = document.querySelector("#content")
    contentDiv.replaceChildren()
    const heading = document.createElement("h1")
    heading.textContent = "Welcome to The Flavours "
    heading.classList.add("heading")
    contentDiv.appendChild(heading)

    // Welcome to The Flavours, where every dish tells a tale of taste, culture, and culinary mastery.

    const subHeading = document.createElement("h3")
    subHeading.textContent = "Welcome to The Flavours, where every dish tells a tale of taste, culture, and culinary mastery."
    subHeading.classList.add("subheading")
    contentDiv.appendChild(subHeading)

    const topImage = document.createElement("img")
    topImage.classList.add("image");
    topImage.src = "/src/jason-leung-poI7DelFiVA-unsplash.jpg"
    topImage.alt = "Image"
    contentDiv.appendChild(topImage)

    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent= "Savor Every Bite, Create Lasting Delight!"
    contentDiv.appendChild(para)

    const para2 = document.createElement("p")
    para2.classList.add("para")
    para2.textContent= "Indulge in the flavors of India and embark on a journey of culinary bliss at our restaurant."
    contentDiv.appendChild(para2)
}