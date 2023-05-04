window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = generateExcuse();
  });

  const getRandomExcuse = excuseArray => {
    const random = Math.floor(Math.random() * excuseArray.length);
    return excuseArray[random];
  };

  const generateExcuse = () => {
    const who = ["My cat", "My cousin", "Your raccoon", "The president"];
    const action = ["ate", "shot at", "crushed", "smashed"];
    const what = [
      "my homework",
      "my computer",
      "my dreams",
      "the concept of time"
    ];
    const when = [
      "before lunch",
      "right on time",
      "during my sabbatical year",
      "while I was taking a nap"
    ];

    return `${getRandomExcuse(who)} ${getRandomExcuse(
      action
    )} ${getRandomExcuse(what)} ${getRandomExcuse(when)}`;
  };
};
