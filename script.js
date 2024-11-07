document.addEventListener('DOMContentLoaded', function() {
    const plans = document.querySelectorAll('.plans-grid div');
    plans.forEach(plan => {
        plan.addEventListener('click', () => {
            alert('You selected the ' + plan.textContent + ' plan!');
        });
    });
});
