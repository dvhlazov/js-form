document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('name_form');
    var agreeRadio = document.getElementById('agree');
    var info = document.querySelector('.info');
   

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var name = form.elements['name'].value;
        var option = agreeRadio.checked ? 'agree' : 'not_agree';

        console.log('Name:', name);
        console.log('Agreed with rules:', option === 'agree' ? 'Yes' : 'No');

        if (option === 'not_agree') {
           
            info.innerHTML = '<strong>not correct answer!!!</strong>';
            return;
        }
    });
    agreeRadio.addEventListener('change', function() {
        if (agreeRadio.checked) {
            info.innerHTML = 'choose "Yes" to accept terms and conditions';
        }
    });
});