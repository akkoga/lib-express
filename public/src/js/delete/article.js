const tbody = document.querySelector('table tbody');
const actions = tbody.querySelectorAll('.actions');

actions.forEach(article => {
    const deleteButton = article.querySelector('.deleteButton');
    const id = article.id;

    const request = {
        body: JSON.stringify({ 
            id: id
        }), 
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    };

    deleteButton.addEventListener('click', () => {
        fetch(`/dashboard/article/:id`,request)
            .then(async (result) => {
                const json = await result.json();
                console.log(json);
                if (json.deleted) {
                    article.parentNode.remove();
                    UIkit.notification({message: '<span uk-icon="icon: check"></span> Article supprimer avec succes', status: 'success', pos: 'top-right'});
                } else {
                    UIkit.notification({message: json.result.error.message, status: 'warning', pos: 'top-right'});
                }

            }).catch((err) => {
            });
    })
});