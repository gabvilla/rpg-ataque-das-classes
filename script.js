let newChar
let classNum
let classes = [
   {
      className: "mage",
      classWeapon: "magic"
   },
   {
      className: "warrior",
      classWeapon: "greatsword"
   },
   {
      className: "monk",
      classWeapon: "divine hands"
   },
   {
      className: "ninja",
      classWeapon: "shuriken"
   }
];

class character {
   constructor(){
      this.name = charName.value;
      this.class = charClass.value;
      this.weapon = classes[classNum].classWeapon;
   }

   attack(){
      result.innerHTML = (`Your ${this.class} attacked with ${this.weapon}`);
   }
}

const charName = document.querySelector("#charName");
const charClass = document.querySelector("#charClass");
const form = document.querySelector("#form");
let result = document.querySelector("#result");

form.addEventListener(("submit"), (e) => {
   e.preventDefault();
   if (validateForm()){
      createChar();
      newChar.attack();
   }else {
      window.alert("Insert your character name!");      
   }
})

const validateForm = () => {
   if (charName.value == ""){
      charName.value = "";
      return false
   } else {
      return true
   }

}

const createChar = () => {
   switch (charClass.value){
      case "mage":
         classNum = 0;
         break
      case "warrior":
         classNum = 1;
         break
      case "monk":
         classNum = 2;
         break
      case "ninja":
         classNum = 3;
         break
   }
   newChar = new character();
}





