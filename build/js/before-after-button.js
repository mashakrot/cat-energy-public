var scale=document.querySelector(".scale"),scaleButton=document.querySelector(".scale__toggle");scale.addEventListener("click",function(){scaleButton.classList.contains("scale__toggle--before")?(scaleButton.classList.remove("scale__toggle--before"),scaleButton.classList.add("scale__toggle--after")):(scaleButton.classList.remove("scale__toggle--after"),scaleButton.classList.add("scale__toggle--before"))});