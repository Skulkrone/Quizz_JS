const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];


const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // avoir les résultats de ce qu'on a coché
  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");

  // console.log(radioButtons);

  radioButtons.forEach((radioButton, index) => {
    if (radioButton.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });

  // console.log(radioButtons);
  // console.log(results);

  showResults(results);
  addColors(results)
}

const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  // const errorsNumber = results.filter(el => el === false);
  // transformer ce tableau en nb d'erreur, on rajoute .length à la fin
  const errorsNumber = results.filter(el => el === false).length;

  console.log(errorsNumber);

  // utiliser un switch pour gérer les conditions dans ce cas est une bonne idée
  switch (errorsNumber) {
    case 0:
      titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
      helpResult.textContent = "Quelle culture ...";
      helpResult.style.display = "block";
      // on peut avoir des problèmes dé sécurité avec innerHTML seulement si on travaille avec un serveur
      markResult.innerHTML = "Score : <span>5 / 5</span>";
      markResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
      helpResult.textContent =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>4 / 5</span>";
      markResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = `✨ Encore un effort ... 👀`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>3 / 5</span>";
      markResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>2 / 5</span>";
      markResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = `😭 Peut mieux faire ! 😭`;
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      helpResult.style.display = "block";
      markResult.innerHTML = "Score : <span>1 / 5</span>";
      markResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = `👎 Peut mieux faire ! 👎`;
      helpResult.style.display = "block";
      helpResult.textContent =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      markResult.style.display = "block";
      markResult.innerHTML = "Score : <span>0 / 5</span>";
      break;

    default:
      titleResult.textContent = "Wops, cas inattendu.";
  }

}

const questions = document.querySelectorAll(".question-block");

// fonction qui gère les couleurs des blocks et qui change le style si la réponse est bonne ou pas
function addColors(results) {
  results.forEach((response, index) => {
    if(results[index]) {
      questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
    } else {
      questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
    }
  })
}

// Bien respecter le naming des constantes et fonctions, il faut que le code soit maintenable si on repasse 6 mois après ou si des gens viennent le lire

const radioInputs = document.querySelectorAll("input[type='radio']")

radioInputs.forEach(radioInput => radioInput.addEventListener('input', resetColor))

function resetColor(e) {

  // console.log(e.target.getAttribute("name").slice(1) -1);

  // e.target.getAttribute("name").slice(1) = à partir de l'index 1 de cette chaine de caractère, je garde ce qu'il y a après avec le (1)
  // et pour ça corresponde à l'index d'un tableau on met -1 à la fin

  const index = e.target.getAttribute("name").slice(1)  - 1;
  const parentQuestionBlock = questions[index];
  // console.log(parentQuestionBlock);
 
  parentQuestionBlock.style.backgroundColor = "#f1f1f1";
  // parentQuestionBlock.style.backgroundImage =  annule le dégradé linéaire
  parentQuestionBlock.style.backgroundImage = "none";

}