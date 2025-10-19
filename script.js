const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('header nav a');

        function highlightMenu() {
            let scrollY = window.pageYOffset + 150;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop;
                let sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active')); 
                    document.querySelector('header nav a[href*=' + sectionId + ']').classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightMenu);
        document.addEventListener("DOMContentLoaded", highlightMenu);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario-contato');
    
    async function handleSubmit(event) {
        event.preventDefault(); 
        
        const formData = new FormData(form);
        const action = form.getAttribute('action');

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert('MENSAGEM ENVIADA! OBRIGADO, LOGO ENTRAREI EM CONTATO');
                form.reset();
            } else {
                alert('Oops! Ocorreu um problema ao enviar seu formulário. Tente novamente.');
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        }
    }

    form.addEventListener('submit', handleSubmit);
});