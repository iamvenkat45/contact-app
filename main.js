$(document).ready(() => {
    let contactsList = [];

    $('#btnCreateContact').click(() => {
        $('.contact-app, .contact-table').show();
        addContact();
    });

    $('#btnSubmit').click(() => {
        // const first = $('#firstName').prop('value');
        // const last = $('#lastName').prop('value');
        // const contact = $('#contactNum').prop('value');

        const formData = $('form').serializeArray();
        const first = formData[0].value;
        const last = formData[1].value;
        const contact = formData[2].value;

        contactsList.push({
            firstName: first,
            lastName: last,
            contactNum: contact
        });
        addContact();
    });

    function addContact() {
        $('.contact-table tbody').empty();
        contactsList.forEach((contact, index) => {
            const tableRow = `<tr>
                                <td>${index}</td>
                                <td>${contact.firstName}</td>
                                <td>${contact.lastName}</td>
                                <td>${contact.contactNum}</td>
                             </tr>`;
            $('.contact-table tbody').append($(tableRow));
        });
    }

    //Ajax Calls
    $.ajax({
        url: 'https://www.booknomads.com/api/v0/isbn/9789000035526',
        method: 'GET'
    }).done((result) => {
        console.log(result.Title);
    }).fail((err) => {
        console.log(err);
    });


    //Carousel Code
    $(".owl-carousel").owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
    });
});