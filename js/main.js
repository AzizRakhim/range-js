let elInputType = document.querySelectorAll(".letter");
let elController = document.querySelectorAll(".controller");

elInputType.forEach((el, index) => {
  el.addEventListener("keyup", () => {
  let elValue =  el.getAttribute('maxlength');
  let n = 100 / elValue;

    if(index == 0){
      elController[index].style.width = `${el.value.length * n}%`;
    } else if(index == 1){
      elController[index].style.width = `${el.value.length}%`;
    } else if (index == 2){
      elController[index].style.width = `${el.value.length / 10}%`;
    }
  });
});

