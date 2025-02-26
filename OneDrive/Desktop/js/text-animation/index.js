const span =document.querySelector("span")
const words=["Developer","arif","alam"]
let wordCount=0
let typing = true;
let currentWordIndex=0



















// setInterval(()=>{
//      const currentWord = words[currentWordIndex];

//       if (typing) {
//         // Typing mode
//         if (wordCount < currentWord.length) {
//           span.innerText += currentWord[wordCount];
//           wordCount++;
//         } else {
//           typing = false; // Switch to delete mode
//         }
//       } else {
//         // Deleting mode
//         if (wordCount > 0) {
//           span.innerText = span.innerText.slice(0, -1);
//           wordCount--;
//         } else {
//           typing = true; // Switch back to typing mode
//           currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
//         }
//       }
//     }, 200);
