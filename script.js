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

const translations = {
    'pt-br': {
        'page_title': 'Canoas Resolve - App de Denúncias',
        'app_title': 'Canoas Resolve',
        'home_main_button_text': 'Denunciar',
        'home_my_reports_title': 'Minhas Denúncias',
        'report_type_hole': 'Buraco',
        'report_type_garbage': 'Lixo',
        'report_status_analysis': 'Em Análise',
        'report_status_resolved': 'Resolvido',
        'form_title': 'Nova Denúncia',
        'form_add_photo_label': 'Adicionar Foto',
        'form_category_label': 'Categoria',
        'category_hole': 'Buraco',
        'category_garbage': 'Lixo',
        'category_flood': 'Alagamento',
        'category_lighting': 'Iluminação',
        'category_sidewalk': 'Calçada',
        'form_description_label': 'Descrição (opcional)',
        'form_description_placeholder': 'Descreva o problema...',
        'form_location_label': 'Localização',
        'form_submit_button': 'Enviar',
        'form_save_offline_button': 'Salvar Offline',
        'details_title': 'Detalhes da Denúncia',
        'details_info_section_title': 'Informações',
        'details_category_field_label': 'Categoria:',
        'details_status_field_label': 'Status:',
        'details_date_field_label': 'Data de Envio:',
        'details_photo_section_title': 'Foto',
        'details_description_section_title': 'Descrição',
        'details_location_section_title': 'Localização',
        'details_updates_section_title': 'Atualizações',
        'map_title': 'Denúncias Próximas',
        'map_filter_label': 'Filtrar por Categoria',
        'map_filter_all': 'Todas',
        'map_map_section_label': 'Mapa',
        'settings_title': 'Configurações',
        'settings_notifications_section_title': 'Notificações',
        'settings_receive_notifications_label': 'Receber notificações',
        'settings_accessibility_section_title': 'Acessibilidade',
        'settings_high_contrast_label': 'Alto contraste',
        'settings_font_size_label': 'Tamanho da fonte',
        'font_size_normal': 'Normal',
        'font_size_large': 'Grande',
        'font_size_very_large': 'Muito Grande',
        'settings_account_section_title': 'Conta',
        'settings_logout_button': 'Logout',
        'settings_language_section_title': 'Idioma',
        'help_title': 'Ajuda',
        'help_chat_section_title': 'Conversa com o Bot de Suporte',
        'chat_bot_label': 'Bot:',
        'chat_you_label': 'Você:',
        'help_chat_msg1': 'Olá! Bem-vindo ao Canoas Resolve. Como posso ajudar você a fazer uma denúncia?',
        'help_chat_msg2': 'Como faço para denunciar um buraco na rua?',
        'help_chat_msg3': 'É simples! Na tela inicial, clique no botão verde "Denunciar". Depois, adicione uma foto do buraco, selecione a categoria "Buraco", escreva uma descrição (se quiser) e confirme a localização no mapa. Por fim, clique em "Enviar".',
        'help_chat_msg4': 'E se eu estiver sem internet?',
        'help_chat_msg5': 'Você pode salvar a denúncia offline clicando em "Salvar Offline" no formulário. Quando estiver conectado, a denúncia será enviada automaticamente.'
    },
    'en': {
        'page_title': 'Canoas Resolve - Reporting App',
        'app_title': 'Canoas Resolve',
        'home_main_button_text': 'Report',
        'home_my_reports_title': 'My Reports',
        'report_type_hole': 'Hole',
        'report_type_garbage': 'Garbage',
        'report_status_analysis': 'Under Review',
        'report_status_resolved': 'Resolved',
        'form_title': 'New Report',
        'form_add_photo_label': 'Add Photo',
        'form_category_label': 'Category',
        'category_hole': 'Hole',
        'category_garbage': 'Garbage',
        'category_flood': 'Flooding',
        'category_lighting': 'Lighting',
        'category_sidewalk': 'Sidewalk',
        'form_description_label': 'Description (optional)',
        'form_description_placeholder': 'Describe the problem...',
        'form_location_label': 'Location',
        'form_submit_button': 'Submit',
        'form_save_offline_button': 'Save Offline',
        'details_title': 'Report Details',
        'details_info_section_title': 'Information',
        'details_category_field_label': 'Category:',
        'details_status_field_label': 'Status:',
        'details_date_field_label': 'Submission Date:',
        'details_photo_section_title': 'Photo',
        'details_description_section_title': 'Description',
        'details_location_section_title': 'Location',
        'details_updates_section_title': 'Updates',
        'map_title': 'Nearby Reports',
        'map_filter_label': 'Filter by Category',
        'map_filter_all': 'All',
        'map_map_section_label': 'Map',
        'settings_title': 'Settings',
        'settings_notifications_section_title': 'Notifications',
        'settings_receive_notifications_label': 'Receive notifications',
        'settings_accessibility_section_title': 'Accessibility',
        'settings_high_contrast_label': 'High contrast',
        'settings_font_size_label': 'Font size',
        'font_size_normal': 'Normal',
        'font_size_large': 'Large',
        'font_size_very_large': 'Very Large',
        'settings_account_section_title': 'Account',
        'settings_logout_button': 'Logout',
        'settings_language_section_title': 'Language',
        'help_title': 'Help',
        'help_chat_section_title': 'Chat with Support Bot',
        'chat_bot_label': 'Bot:',
        'chat_you_label': 'You:',
        'help_chat_msg1': 'Hello! Welcome to Canoas Resolve. How can I help you make a report?',
        'help_chat_msg2': 'How do I report a pothole in the street?',
        'help_chat_msg3': 'It\'s simple! On the home screen, click the green "Report" button. Then, add a photo of the pothole, select the "Hole" category, write a description (if you want), and confirm the location on the map. Finally, click "Submit".',
        'help_chat_msg4': 'What if I don\'t have internet?',
        'help_chat_msg5': 'You can save the report offline by clicking "Save Offline" on the form. When you are connected, the report will be sent automatically.'
    },
    'es': {
        'page_title': 'Canoas Resuelve - App de Denuncias',
        'app_title': 'Canoas Resuelve',
        'home_main_button_text': 'Denunciar',
        'home_my_reports_title': 'Mis Denuncias',
        'report_type_hole': 'Bache',
        'report_type_garbage': 'Basura',
        'report_status_analysis': 'En Revisión',
        'report_status_resolved': 'Resuelto',
        'form_title': 'Nueva Denuncia',
        'form_add_photo_label': 'Añadir Foto',
        'form_category_label': 'Categoría',
        'category_hole': 'Bache',
        'category_garbage': 'Basura',
        'category_flood': 'Inundación',
        'category_lighting': 'Iluminación',
        'category_sidewalk': 'Acera',
        'form_description_label': 'Descripción (opcional)',
        'form_description_placeholder': 'Describa el problema...',
        'form_location_label': 'Ubicación',
        'form_submit_button': 'Enviar',
        'form_save_offline_button': 'Guardar sin Conexión',
        'details_title': 'Detalles de la Denuncia',
        'details_info_section_title': 'Información',
        'details_category_field_label': 'Categoría:',
        'details_status_field_label': 'Estado:',
        'details_date_field_label': 'Fecha de Envío:',
        'details_photo_section_title': 'Foto',
        'details_description_section_title': 'Descripción',
        'details_location_section_title': 'Ubicación',
        'details_updates_section_title': 'Actualizaciones',
        'map_title': 'Denuncias Cercanas',
        'map_filter_label': 'Filtrar por Categoría',
        'map_filter_all': 'Todas',
        'map_map_section_label': 'Mapa',
        'settings_title': 'Configuraciones',
        'settings_notifications_section_title': 'Notificaciones',
        'settings_receive_notifications_label': 'Recibir notificaciones',
        'settings_accessibility_section_title': 'Accesibilidad',
        'settings_high_contrast_label': 'Alto contraste',
        'settings_font_size_label': 'Tamaño de fuente',
        'font_size_normal': 'Normal',
        'font_size_large': 'Grande',
        'font_size_very_large': 'Muy Grande',
        'settings_account_section_title': 'Cuenta',
        'settings_logout_button': 'Cerrar sesión',
        'settings_language_section_title': 'Idioma',
        'help_title': 'Ayuda',
        'help_chat_section_title': 'Conversación con el Bot de Soporte',
        'chat_bot_label': 'Bot:',
        'chat_you_label': 'Tú:',
        'help_chat_msg1': '¡Hola! Bienvenido a Canoas Resuelve. ¿Cómo puedo ayudarte a hacer una denuncia?',
        'help_chat_msg2': '¿Cómo denuncio un bache en la calle?',
        'help_chat_msg3': '¡Es simple! En la pantalla de inicio, haz clic en el botón verde "Denunciar". Luego, añade una foto del bache, selecciona la categoría "Bache", escribe una descripción (si quieres) y confirma la ubicación en el mapa. Finalmente, haz clic en "Enviar".',
        'help_chat_msg4': '¿Y si no tengo internet?',
        'help_chat_msg5': 'Puedes guardar la denuncia sin conexión haciendo clic en "Guardar sin Conexión" en el formulario. Cuando estés conectado, la denuncia se enviará automáticamente.'
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.dataset.translateKey;
        const translation = translations[lang]?.[key];
        if (translation !== undefined) {
            element.textContent = translation;
        }
    });
    document.querySelectorAll('[data-translate-key-placeholder]').forEach(element => {
        const key = element.dataset.translateKeyPlaceholder;
        const translation = translations[lang]?.[key];
        if (translation !== undefined) {
            element.placeholder = translation;
        }
    });
     if (document.title && translations[lang]?.['page_title']) {
        document.title = translations[lang]['page_title'];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const fontSizeSelect = document.getElementById('font-size-select');
    const languageSelect = document.getElementById('language-select');

    const storedHighContrast = localStorage.getItem('highContrast') === 'true';
    const storedFontSize = localStorage.getItem('fontSize') || 'normal';
    const storedLanguage = localStorage.getItem('language') || 'pt-br';

    if (storedHighContrast) {
        document.body.classList.add('high-contrast');
        if (highContrastToggle) {
            highContrastToggle.checked = true;
        }
    }

    document.body.classList.remove('font-normal', 'font-grande', 'font-muito-grande');
    document.body.classList.add(`font-${storedFontSize}`);
    if (fontSizeSelect) {
        fontSizeSelect.value = storedFontSize;
    }

    if (languageSelect) {
        languageSelect.value = storedLanguage;
    }
    updateLanguage(storedLanguage);

    if (highContrastToggle) {
        highContrastToggle.addEventListener('change', function() {
            document.body.classList.toggle('high-contrast', this.checked);
            localStorage.setItem('highContrast', this.checked);
        });
    }

    if (fontSizeSelect) {
        fontSizeSelect.addEventListener('change', function() {
            document.body.classList.remove('font-normal', 'font-grande', 'font-muito-grande');
            document.body.classList.add(`font-${this.value}`);
            localStorage.setItem('fontSize', this.value);
        });
    }

    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            updateLanguage(selectedLang);
            localStorage.setItem('language', selectedLang);
        });
    }
});