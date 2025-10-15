const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('header nav a');

        function highlightMenu() {
            let scrollY = window.pageYOffset + 150;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop;
                let sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active')); // Limpa todos
                    document.querySelector('header nav a[href*=' + sectionId + ']').classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightMenu);
        
        // Para garantir que o link correto esteja ativo ao carregar a página
        document.addEventListener("DOMContentLoaded", highlightMenu);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario-contato');
    
    async function handleSubmit(event) {
        event.preventDefault(); // Impede o envio padrão (e o redirecionamento)
        
        const formData = new FormData(form);
        const action = form.getAttribute('action');

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json' // Pede uma resposta em formato de dados
                }
            });

            if (response.ok) {
                // Se deu tudo certo...
                alert('MENSAGEM ENVIADA! OBRIGADO, LOGO ENTRAREI EM CONTATO');
                form.reset(); // ✨ AQUI A MÁGICA ACONTECE: limpa todos os campos! ✨
            } else {
                // Se o servidor respondeu com erro
                alert('Oops! Ocorreu um problema ao enviar seu formulário. Tente novamente.');
            }
        } catch (error) {
            // Se deu erro de conexão (ex: sem internet)
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        }
    }

    form.addEventListener('submit', handleSubmit);
});