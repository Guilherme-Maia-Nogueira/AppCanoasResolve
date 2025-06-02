// Funções de navegação entre telas
function showForm() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('form-screen').classList.remove('hidden');
    document.getElementById('details-screen').classList.add('hidden');
    document.getElementById('mapa-screen').classList.add('hidden');
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('ajuda-screen').classList.add('hidden');
}

function showHome() {
    document.getElementById('form-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('details-screen').classList.add('hidden');
    document.getElementById('mapa-screen').classList.add('hidden');
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('ajuda-screen').classList.add('hidden');
}

function showDetails() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('form-screen').classList.add('hidden');
    document.getElementById('details-screen').classList.remove('hidden');
    document.getElementById('mapa-screen').classList.add('hidden');
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('ajuda-screen').classList.add('hidden');
}

function showMapa() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('form-screen').classList.add('hidden');
    document.getElementById('details-screen').classList.add('hidden');
    document.getElementById('mapa-screen').classList.remove('hidden');
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('ajuda-screen').classList.add('hidden');
}

function showConfig() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('form-screen').classList.add('hidden');
    document.getElementById('details-screen').classList.add('hidden');
    document.getElementById('mapa-screen').classList.add('hidden');
    document.getElementById('config-screen').classList.remove('hidden');
    document.getElementById('ajuda-screen').classList.add('hidden');
}

function showAjuda() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('form-screen').classList.add('hidden');
    document.getElementById('details-screen').classList.add('hidden');
    document.getElementById('mapa-screen').classList.add('hidden');
    document.getElementById('config-screen').classList.add('hidden');
    document.getElementById('ajuda-screen').classList.remove('hidden');
}

// Configurações de alto contraste, tamanho da fonte e idioma - AINDA EM DESENVOLVIMENTO, SOMENTE O CONTRASTE FUNCIONA
document.addEventListener('DOMContentLoaded', () => {
    // Carrega configurações salvas
    const highContrast = localStorage.getItem('highContrast') === 'true';
    const fontSize = localStorage.getItem('fontSize') || 'normal';
    const language = localStorage.getItem('language') || 'pt-br';

    // Aplica configurações iniciais
    if (highContrast) {
        document.body.classList.add('high-contrast');
        document.getElementById('high-contrast-toggle').checked = true;
    }
    document.body.classList.add(`font-${fontSize}`);
    document.getElementById('font-size-select').value = fontSize;
    document.getElementById('language-select').value = language;
    updateLanguage(language);

    // Eventos
    document.getElementById('high-contrast-toggle').addEventListener('change', function() {
        document.body.classList.toggle('high-contrast', this.checked);
        localStorage.setItem('highContrast', this.checked);
    });

    document.getElementById('font-size-select').addEventListener('change', function() {
        document.body.classList.remove('font-normal', 'font-grande', 'font-muito-grande');
        document.body.classList.add(`font-${this.value}`);
        localStorage.setItem('fontSize', this.value);
    });

    document.getElementById('language-select').addEventListener('change', function() {
        updateLanguage(this.value);
        localStorage.setItem('language', this.value);
    });
});

// Função para atualizar o idioma - AINDA EM DESENVOLVIMENTO
function updateLanguage(lang) {
    const translations = {
        'pt-br': {
            'Nova Denúncia': 'Nova Denúncia',
            'Detalhes da Denúncia': 'Detalhes da Denúncia',
            'Denúncias Próximas': 'Denúncias Próximas',
            'Configurações': 'Configurações',
            'Ajuda': 'Ajuda',
            'Minhas Denúncias': 'Minhas Denúncias',
            'Receber notificações': 'Receber notificações',
            'Alto contraste': 'Alto contraste',
            'Tamanho da fonte': 'Tamanho da fonte',
            'Conta': 'Conta',
            'Idioma': 'Idioma',
            'Logout': 'Logout'
        },
        'en': {
            'Nova Denúncia': 'New Complaint',
            'Detalhes da Denúncia': 'Complaint Details',
            'Denúncias Próximas': 'Nearby Complaints',
            'Configurações': 'Settings',
            'Ajuda': 'Help',
            'Minhas Denúncias': 'My Complaints',
            'Receber notificações': 'Receive notifications',
            'Alto contraste': 'High contrast',
            'Tamanho da fonte': 'Font size',
            'Conta': 'Account',
            'Idioma': 'Language',
            'Logout': 'Logout'
        },
        'es': {
            'Nova Denúncia': 'Nueva Denuncia',
            'Detalhes da Denúncia': 'Detalles de la Denuncia',
            'Denúncias Próximas': 'Denuncias Cercanas',
            'Configurações': 'Configuraciones',
            'Ajuda': 'Ayuda',
            'Minhas Denúncias': 'Mis Denuncias',
            'Receber notificações': 'Recibir notificaciones',
            'Alto contraste': 'Alto contraste',
            'Tamanho da fonte': 'Tamaño de fuente',
            'Conta': 'Cuenta',
            'Idioma': 'Idioma',
            'Logout': 'Cerrar sesión'
        }
    };

    document.querySelectorAll('h1').forEach(h1 => {
        const originalText = h1.textContent;
        h1.textContent = translations[lang][originalText] || originalText;
    });
    document.querySelectorAll('.toggle span, .select-label span, .config-section h2').forEach(el => {
        const originalText = el.textContent;
        el.textContent = translations[lang][originalText] || originalText;
    });
    document.querySelector('.logout-btn').textContent = translations[lang]['Logout'] || 'Logout';
}