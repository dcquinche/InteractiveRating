# Interactive Rating Component

 Make It Real - This is a solution to the Interactive Rating Component Project of the Make It Real course.

## Table of contents
 1. [The challenge](#the-challenge)
 2. [Screenshot](#screenshot)
 3. [My process](#my-process)
 4. [Built with](#built-with)
 5. [What I learned](#what-i-learned)
 6. [Useful resources](#useful-resources)
 7. [Author](#author)
 8. [Acknowledgments](#acknowledgments)

### The challenge
 Users should be able to:
 Watch the card component regardless of the screen size (mobile or desktop) and add a rate to it.

### Screenshot

#### Mobile design
![Mobile design1](https://github.com/dcquinche/InteractiveRating/blob/main/design/MobileCard1.png)

![Mobile design2](https://github.com/dcquinche/InteractiveRating/blob/main/design/MobileCard2.png)

#### Desktop design
![Desktop design](https://github.com/dcquinche/InteractiveRating/blob/main/design/DesktopCard1.png)

![Desktop design](https://github.com/dcquinche/InteractiveRating/blob/main/design/DesktopCard2.png)

#### Active Mode of Numbers and Submit Button
![Numbers](https://github.com/dcquinche/InteractiveRating/blob/main/design/ActiveModeNumber.png)

![Submit](https://github.com/dcquinche/InteractiveRating/blob/main/design/ActiveModeSubmit.png)


### My process
First we organized the HTML structure and layouts for the mobile design including the hover and focus selectors. After that, we created a new file with JavaScript code to make the phrase with the score work. At the end, we made some changes on the size of the components for the desktop design.


### Built with
- HTML
- CSS
- Mobile-first workflow
- Media Query
- JavaScript


### What I learned
 - The document method querySelector returns the element that matches the parameter.
 
 ```
    let score = document.querySelector("#numberScore");

 ```

 - The innerHTML property put or replace the content of the element.

 ```
    score.innerHTML = calification

 ```
 - The onclick and addEventListener properties are used to make something happen when the user click on the element.

 ```
    <button class="value" id="4" onclick="rate(this)">4</button>

 ```

 ```
    submit.addEventListener("click", ()=>{
        firstCard.style.display = "none"
        secondCard.style.display = "block"
        })

 ```


### Useful resources
[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) - You can find information and examples to see how to use it.

[onclick and addEventListener](https://www.w3schools.com/JSREF/event_onclick.asp) - You can find several examples to see how to use them.

[innerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) - You can find information and examples to see how to use it.



### Author
Diana Carolina Quinche Velez -
[Linkedin](https://www.linkedin.com/in/diana-carolina-quinche-v%C3%A9lez-06b9791b3/)


### Acknowledgments
Special acknowledgments to my team partner Salomon Vasquez and our mentor Cristian Moreno.