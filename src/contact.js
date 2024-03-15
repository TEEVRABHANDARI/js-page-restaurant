export function contactSection(){

    const contentDiv = document.querySelector("#content")
    contentDiv.replaceChildren()
    const heading = document.createElement("h1")
    heading.textContent = "Contact Details"
    heading.classList.add("heading")
    contentDiv.appendChild(heading)

    const topImage = document.createElement("img")
    topImage.classList.add("image");
    topImage.src = "/src/contactusimage.jpg"
    topImage.alt = "Image"
    contentDiv.appendChild(topImage)

    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent= "Address: 123 street, New Delhi"
    contentDiv.appendChild(para)

    const para2 = document.createElement("p")
    para2.classList.add("para")
    para2.textContent= "Phone: 1234567890"
    contentDiv.appendChild(para2)
}