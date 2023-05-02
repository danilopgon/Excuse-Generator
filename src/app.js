window.onload = () => {
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuseGenerator();
  });

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 4);
    return random;
  };

  const excuseGenerator = () => {
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

    return `${who[randomNumber()]} ${action[randomNumber()]} ${
      what[randomNumber()]
    } ${when[randomNumber()]}`;
  };
};
