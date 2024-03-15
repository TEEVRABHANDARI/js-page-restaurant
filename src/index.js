// import * as module from './intialLoadPage.js'
import { intialLoadPage } from './intialLoadPage.js';
import { aboutSection } from './aboutUs.js';
import { contactSection } from './contact.js';

console.log("Using webpack")

intialLoadPage();

const homeTab = document.querySelector(".home");
homeTab.addEventListener("click",intialLoadPage);

const aboutUs = document.querySelector(".aboutUs");
aboutUs.addEventListener("click",aboutSection)

const contact = document.querySelector(".contact");
contact.addEventListener("click", contactSection)