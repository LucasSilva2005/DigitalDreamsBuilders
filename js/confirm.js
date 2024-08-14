const passwordInput = document.getElementById('password');
        const minLength = document.getElementById('minLength');
        const uppercase = document.getElementById('uppercase');
        const specialChar = document.getElementById('specialChar');

        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;

            // Verifica se a senha tem pelo menos 8 caracteres
            if (password.length >= 8) {
                minLength.classList.add('valid');
            } else {
                minLength.classList.remove('valid');
            }

            // Verifica se a senha tem pelo menos uma letra maiúscula
            if (/[A-Z]/.test(password)) {
                uppercase.classList.add('valid');
            } else {
                uppercase.classList.remove('valid');
            }

            // Verifica se a senha tem pelo menos um caractere especial
            if (/[!@#$%^&*(),.?":{}|<>_-]/.test(password)) {
                specialChar.classList.add('valid');
            } else {
                specialChar.classList.remove('valid');
            }
        });

        document.getElementById('signup-form').addEventListener('submit', (e) => {
            const password = passwordInput.value;

            if (!(minLength.classList.contains('valid') && uppercase.classList.contains('valid') && specialChar.classList.contains('valid'))) {
                e.preventDefault();
                alert('A senha é muito fraca. Por favor, atenda a todos os requisitos.');
            }
        });