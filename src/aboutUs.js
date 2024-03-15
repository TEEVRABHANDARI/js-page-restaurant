export function aboutSection(){

    const contentDiv = document.querySelector("#content")
    contentDiv.replaceChildren()
    const heading = document.createElement("h1")
    heading.textContent = "Discover Our Story"
    heading.classList.add("heading")
    contentDiv.appendChild(heading)


    const topImage = document.createElement("img")
    topImage.classList.add("image");
    topImage.src = "/src/fabrizio-magoni-boaDpmC-_Xo-unsplash.jpg"
    topImage.alt = "Image"
    contentDiv.appendChild(topImage)

    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent= "Since 1999, we have been proudly serving authentic Indian cuisine, steeped in tradition and flavor, inviting you to experience the rich tapestry of Indian culinary delights at our restaurant."
    contentDiv.appendChild(para)
}