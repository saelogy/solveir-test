  const rawTitle = "꒰⋆ ୨♡୧ 𝑠𝑡𝑟𝑎𝑤𝑏𝑢𝑛𝑖𝑚𝑖𝑙𝑘 𖦹 ⋆꒱ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ";
  let titleArray = Array.from(rawTitle);
  
  function scrollTitle() {
    const firstChar = titleArray.shift();
    titleArray.push(firstChar);
    document.title = titleArray.join('');
  }
  setInterval(scrollTitle, 250);
