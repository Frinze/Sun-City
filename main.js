// Function for index show more ==========================================
document.getElementById('see-more-btn').addEventListener('click', function() {
    var departments = document.querySelectorAll('.more-departments');
    departments.forEach(function(department) {
        department.style.display = 'block';
    });
    document.getElementById('see-more-btn').style.display = 'none'; 
    document.getElementById('hide-btn').style.display = 'inline-block'; 
});

document.getElementById('hide-btn').addEventListener('click', function() {
    var departments = document.querySelectorAll('.more-departments');
    departments.forEach(function(department) {
        department.style.display = 'none';
    });
    document.getElementById('see-more-btn').style.display = 'inline-block'; 
    document.getElementById('hide-btn').style.display = 'none'; 
});