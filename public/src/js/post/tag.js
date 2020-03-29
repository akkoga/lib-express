const form = document.querySelector('#addcategory .form');

form.querySelector('button').addEventListener('click', () => {
    const category = form.querySelector('.category').value;
    const request = {
        body: JSON.stringify({
             category 
        }), 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    fetch('/dashboard/category/', request)
        .then(async (result) => {
            const json = await result.json();
            if (json.created) {
                UIkit.notification({
                    message: '<span uk-icon="icon: check"></span> category ajouter avec succes', 
                    status: 'success', 
                    pos: 'top-right'
                });
                setTimeout(() => {
                    location.reload(true);
                }, 1500);
            } else {
                UIkit.notification({
                    message: `<span uk-icon="icon: close"></span> ${json.result.message}`, 
                    status: 'error', 
                    pos: 'top-right'
                });
            }

        }).catch((err) => {
            UIkit.notification({
                message: `<span uk-icon="icon: close"></span>${err.message}`, 
                status: 'error', 
                pos: 'top-right'
            });
        });
});