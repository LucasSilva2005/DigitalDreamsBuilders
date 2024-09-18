const form = document.getElementById('anuncioForm');
        const steps = document.querySelectorAll('.step');
        const progressSteps = document.querySelectorAll('.progress-step');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        const submitBtn = document.getElementById('submitBtn');
        let currentStep = 0;

        nextBtn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                currentStep++;
                updateStep();
            }
        });

        prevBtn.addEventListener('click', () => {
            currentStep--;
            updateStep();
        });

        function updateStep() {
            steps.forEach((step, index) => {
                step.classList.toggle('active', index === currentStep);
            });
            progressSteps.forEach((step, index) => {
                step.classList.toggle('active', index <= currentStep);
            });
            prevBtn.style.display = currentStep > 0 ? 'block' : 'none';
            if (currentStep === steps.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'block';
                updateResumo();
            } else {
                nextBtn.style.display = 'block';
                submitBtn.style.display = 'none';
            }
        }

        function validateStep(step) {
            let isValid = true;
            const inputs = steps[step].querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.required && !input.value) {
                    isValid = false;
                    showError(input, 'Este campo é obrigatório');
                } else {
                    clearError(input);
                }
            });
            return isValid;
        }

        function showError(input, message) {
            const errorElement = document.getElementById(`${input.id}Error`);
            if (errorElement) {
                errorElement.textContent = message;
            }
        }

        function clearError(input) {
            const errorElement = document.getElementById(`${input.id}Error`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        }

        function updateResumo() {
            const resumo = document.getElementById('resumoAnuncio');
            resumo.innerHTML = `
                <h3>Resumo do anúncio</h3>
                <p><strong>Título:</strong> ${document.getElementById('titulo').value}</p>
                <p><strong>Categoria:</strong> ${document.getElementById('categoria').value}</p>
                <p><strong>Preço:</strong> R$ ${document.getElementById('preco').value}</p>
                <p><strong>Estado:</strong> ${document.getElementById('estado').value}</p>
            `;
        }

        const imageUpload = document.getElementById('imageUpload');
        const imageInput = document.getElementById('imageInput');
        const imagePreview = document.getElementById('imagePreview');

        imageUpload.addEventListener('click', () => imageInput.click());
        imageUpload.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageUpload.style.borderColor = '#3483FA';
        });
        imageUpload.addEventListener('dragleave', () => {
            imageUpload.style.borderColor = '#e6e6e6';
        });
        imageUpload.addEventListener('drop', (e) => {
            e.preventDefault();
            imageUpload.style.borderColor = '#e6e6e6';
            handleFiles(e.dataTransfer.files);
        });

        imageInput.addEventListener('change', (e) => handleFiles(e.target.files));

        function handleFiles(files) {
            for (let file of files) {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        imagePreview.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateStep(currentStep)) {
                alert('Anúncio enviado com sucesso!');
                // Aqui você enviaria os dados para o servidor
            }
        });