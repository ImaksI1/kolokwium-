const form = document.getElementById("myForm");
const button = document.getElementById("sendForm");
const ul = document.getElementById("myUl");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const opis = formData.get("opis");
    const date = formData.get("date");
    if (opis === "" || date === "") {
        alert("pola nie mogą być puste!")
        return
    }

    const li = document.createElement("li");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    p1.classList.add("p1");
    p1.textContent = date;
    p2.textContent = opis;

    p2.classList.add("p2");

    li.append(p1, p2);
    ul.append(li)
    form.reset();
})