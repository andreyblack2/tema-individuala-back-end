$(document).ready(function () {
    $('select').material_select();
});

document.querySelector('#regbutton').addEventListener("click", (e) => {
    e.preventDefault();
    toastr.remove()
    const rezervare = {
        nume: document.querySelector('#nume').value,
        prenume: document.querySelector('#prenume').value,
        telefon: document.querySelector('#telefon').value,
        email: document.querySelector('#email').value,
        data_inceput: document.querySelector('#data_inceput').value,
        data_sfarsit: document.querySelector('#data_sfarsit').value
    }
    axios.post('/bilet', rezervare)
        .then((response) => {
            toastr.success("Abonament achizitionat!");
        })
        .catch((error) => {
            const values = Object.values(error.response.data)
            console.log(error);
            values.map(item => {
                toastr.error(item)
            })
        })

}, false)