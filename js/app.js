/*========================= START-HERO-IMAGE =========================*/

const email = document.getElementById("email");
const emailLabel = document.querySelector(".email-form__email-input label");

email.addEventListener("blur", checkEmailInput);

function checkEmailInput() {
    if (this.value.length != 0) {
        emailLabel.classList.add("active-label");
    } else {
        emailLabel.classList.remove("active-label");
    }
}

/*========================= END-HERO-IMAGE =========================*/




/*========================= START-QUESTIONS =========================*/

let tabIndex;

const questionTabs = document.querySelectorAll("#questions .question-tab");
const answerTabs = document.querySelectorAll("#questions .answer-tab");
const tabIcons = document.querySelectorAll("#questions .question-tab .icon"); 

questionTabs.forEach((item, index) => {
    item.addEventListener("click", function() {
        tabIndex = index;
        clearClassInList(tabIcons, "icon--active", tabIndex);
        tabIcons[tabIndex].classList.toggle("icon--active");
        clearClassInList(answerTabs, "answer-tab--active", tabIndex);
        answerTabs[tabIndex].classList.toggle("answer-tab--active");
    });
});



function clearClassInList(list, className, notPosition) {
    list.forEach((item, index) => {
        if (index != notPosition) {
            item.classList.remove(className);
        }
    })
}


/*========================= END-QUESTIONS =========================*/


