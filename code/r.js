document.addEventListener("DOMContentLoaded", function() {
    const userType = document.querySelectorAll('input[name="user-type"]');
    const domainField = document.getElementById('domain-field');
    const competenceField = document.getElementById('competence-field');
    const profilePictureField = document.getElementById('profile-picture-field');

    function toggleFields() {
        if (document.getElementById('student').checked) {
            domainField.style.display = 'block';
            competenceField.style.display = 'block';
            profilePictureField.style.display = 'block';
        } else {
            domainField.style.display = 'none';
            competenceField.style.display = 'none';
            profilePictureField.style.display = 'none';
        }
    }

    // Listen for changes on radio buttons
    userType.forEach(input => {
        input.addEventListener('change', toggleFields);
    });

    // Initial check to ensure proper display based on the selected user type
    toggleFields();
});
