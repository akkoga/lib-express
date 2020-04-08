const forms = document.querySelectorAll('tbody .form');

forms.forEach(form => {
    const button = form.querySelector('footer > button');

    button.addEventListener('click', () => {
        const id = form.querySelector('.id').value;
        const category = form.querySelector('.category').value;

        console.log(`Modification du category ayant pour id ${id}...`);

        const request = {
            body: JSON.stringify({
                id, category
            }),
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        };

        fetch('/dashboard/category/:id', request)
            .then(async (result) => {
                const json = await result.json();

                if (json.modified) {
                    UIkit.notification({
                        message: `<span uk-icon="icon: check"></span> Le category à été modifier avec succes`, 
                        status: 'success', 
                        pos: 'top-right'
                    });
                    const value = document.querySelector(`tr[id="${id}"] > [data-category]`);
                    value.innerHTML = category;
                } else {
                    UIkit.notification({
                        message: `<span uk-icon="icon: close"></span>${json.result.message}`, 
                        status: 'error', 
                        pos: 'top-right'
                    });
                }

            }).catch((error) => {
                UIkit.notification({
                    message: `<span uk-icon="icon: close"></span>${error.message}`, 
                    status: 'error', 
                    pos: 'top-right'
                });
            });
    });
})



