const form = document.getElementById("myForm");
const button = document.getElementById("sendForm");
const textArea = document.getElementById("listaZadan");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const opis = formData.get("opis");
    const date = formData.get("date");
    if (opis === "" || date === "") {
        alert("pola nie mogą być puste!")
        return
    }
    const data = `Zadanie: ${opis}\nData: ${date}\n`;
    textArea.textContent += data;
    form.reset();
})