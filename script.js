document.querySelector("#alert-btn").addEventListener("click", function() {
    const alert = document.querySelector("#viewport");
    alert.classList.remove("hidden");
});

document.querySelector(".close").addEventListener("click", function(){
    const alert = document.querySelector("#viewport");
    alert.classList.add("hidden");
});