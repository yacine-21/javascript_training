let ul = document.getElementById("ul");
let wordsNode = document.getElementById("paragraphe");
words = wordsNode.innerText;
words = prompt("Ecrivez votre texte ! ")
if (words === ""){
    words = undefined;
} else {
    words
}

words = words.split(" ");
console.log(words)

words.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li)
    li.classList.add("list-group-item")
});