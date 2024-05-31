let lightTheme = false;
let newChatButton = document.querySelector(".new-chat-button");
let leftBottomContainer = document.querySelector(".left-bottom-container");
let leftBottomParameterP = document.querySelectorAll(".left-bottom-parameter-p");
let centerBlockH = document.querySelector(".center-block-h");
let centerBlockGridColumnHeader = document.querySelectorAll(".center-block-grid-column-header");
let centerBlockGridCell = document.querySelectorAll(".center-block-grid-cell");
let centerBottomInput = document.querySelector(".center-bottom-input");
let centerBottomText = document.querySelector(".center-bottom-text");

let rightColumn = document.querySelector(".right-column");
let leftColumn = document.querySelector(".left-column");
let centerBottomButton = document.querySelector(".center-bottom-button");

document.getElementById("themeToggler").addEventListener("click", () => {
    if (lightTheme == false) {
        lightTheme = true;
        newChatButton.style.color = "black";
        newChatButton.style.border = "3px solid black";
        leftBottomContainer.style.borderTop = "1px solid black"
        leftBottomParameterP.forEach((item) => {
            item.style.color = "black";
        })
        centerBlockH.style.color = "black"
        centerBlockGridColumnHeader.forEach((item) => {
            item.style.color = "black"
        })
        centerBlockGridCell.forEach((item) => {
            item.style.color = "black"
            item.style.backgroundColor = "#939393"
        })
        centerBottomInput.style.color = "black";
        centerBottomInput.style.backgroundColor = "#939393";
        centerBottomText.style.color = "black";
        rightColumn.style.backgroundColor = "white";
        leftColumn.style.backgroundColor = "#939393";
        centerBottomButton.style.backgroundColor = "#939393";
    } else {
        lightTheme = false;
        newChatButton.style.color = "#BFC0C5";
        newChatButton.style.border = "3px solid #BFC0C5";
        leftBottomContainer.style.borderTop = "1px solid #BFC0C5"
        leftBottomParameterP.forEach((item) => {
            item.style.color = "#BFC0C5";
        })
        centerBlockH.style.color = "#BFC0C5"
        centerBlockGridColumnHeader.forEach((item) => {
            item.style.color = "#BFC0C5"
        })
        centerBlockGridCell.forEach((item) => {
            item.style.color = "#BFC0C5"
            item.style.backgroundColor = "#3E3F49"
        })
        centerBottomInput.style.color = "#BFC0C5";
        centerBottomInput.style.backgroundColor = "#40414D";
        centerBottomText.style.color = "#BFC0C5";
        rightColumn.style.backgroundColor = "#34353F";
        leftColumn.style.backgroundColor = "#202123";
        centerBottomButton.style.backgroundColor = "#40414D";
    }
})