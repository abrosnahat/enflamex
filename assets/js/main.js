const url = 'https://enflamex-media.com/mailer.php';

document.addEventListener('DOMContentLoaded', () => {
    const renderData = () => {
        const firstname = document.querySelector('input[name="firstname"]'),
            lastname = document.querySelector('input[name="lastname"]'),
            email = document.querySelector('input[name="email"]'),
            telephone = document.querySelector('input[name="telephone"]'),
            companyName = document.querySelector('input[name="companyName"]'),
            message = document.querySelector('input[name="message"]'),
            wherePlace = document.querySelector('input[name="wherePlace"]'),
            country = document.querySelector('input[name="country"]');

        const data = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            telephone: telephone.value,
            companyName: companyName.value,
            message: message.value,
            country: country.value,
            wherePlace: wherePlace.value,
        };

        return data;
    };

    const form = document.querySelector('#formAll');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = renderData();

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'html',
            data: data,
            success: function (data) {
                $('input').val('');
                alert('Message sent successful')
            },
            error: function (error) {
                alert('Message sent error ' + error);
            }
        });
    });
});
