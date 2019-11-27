import "./styles.css";

import utility from "./util";
import utility2 from "./util";

utility.sayHello("Rahul");
utility.name = "Baba";
console.log(utility.name);
console.log(utility);
console.log(utility2);
console.log(utility === utility2);
utility2.sayHello("Raj");

let arrFun = () => {
  console.log("Arrow function");
};

arrFun();

let set = new Set([1, 2, 3]);
console.log(set);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  This app uses useBuiltIns option of babel and is packaged with parcel js
</div>
`;
