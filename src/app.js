window.onload = () => {
  //write your code here

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 4);
    return random;
  };

  const excuseGenerator = () => {
    let who = ["My cat", "My cousin", "Your raccoon", "The president"];
    let action = ["ate", "shot at", "crushed", "smashed"];
    let what = [
      "my homework",
      "my computer",
      "my dreams",
      "the concept of time"
    ];
    let when = [
      "before lunch",
      "right on time",
      "during my sabbatical year",
      "while I was taking a nap"
    ];

    return `${who[randomNumber()]} ${action[randomNumber()]} ${
      what[randomNumber()]
    } ${when[randomNumber()]}`;
  };

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
