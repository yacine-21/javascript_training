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

words.forEach((word, i) => {
    let li = document.createElement('li');
    li.innerText = word + " est le mot qui est a l'index " + i + " du tableau de mots" ;
    ul.appendChild(li)
    li.classList.add("list-group-item")
});