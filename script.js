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