const tbody = document.querySelector('table tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach(row => {
    const button = row.querySelector('.actions button');
    const id = row.id;

    if (row.id && row.id !== "0") {
        button.addEventListener('click', () => {
            console.log(`Suppression du category ayant pour ID ${id} ...`);
            row.querySelectorAll('th').forEach(el => el.style.color = "#FFF");
            row.style.background = "#f0506e";
            row.style.opacity = "0.5";

            const request = {
                body: JSON.stringify({ 
                    id: id
                }), 
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            };

            fetch(`/dashboard/category/:id`, request)
                .then(async (result) => {
                    const json = await result.json();

                    if (json.deleted) {
                        row.remove();
                        UIkit.notification({
                            message: '<span uk-icon="icon: check"></span> category supprimer avec succes', 
                            status: 'success', 
                            pos: 'top-right'});

                    } else {
                        const error = json.result.error.message;
                        console.error(error);
                        UIkit.notification({
                            message: error, 
                            status: 'warning', 
                            pos: 'top-right'
                        });
                    }

                }).catch((error) => {
                    UIkit.notification({
                        message: error, 
                        status: 'warning', 
                        pos: 'top-right'
                    });
                });
        });
    }

});