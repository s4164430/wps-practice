document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (document.getElementById('lastname')) {
        return;
    }
    
    const lastNameDiv = document.createElement('div');
    lastNameDiv.className = 'formItem';
    
    const label = document.createElement('label');
    label.setAttribute('for', 'lastname');
    label.textContent = 'Last Name';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'lastname';
    input.name = 'lastname';
    input.placeholder = 'Last Name';
    
    lastNameDiv.appendChild(label);
    lastNameDiv.appendChild(input);
    
    const emailDiv = document.querySelector('#email').parentElement;
    
    emailDiv.parentNode.insertBefore(lastNameDiv, emailDiv);

    this.textContent = 'Submit';
});