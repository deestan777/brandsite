var arrLang = {
  'en': {
    'home': 'Home',
    'about': 'About Us',
    'instructions' : 'Instructions',
    'news' : "News",
    'platforms' : 'Platforms',
    'faq' : 'FAQ',
    'contact': 'Contact Us',
    'languages': 'Languages',
    'en':'English',
    'ru': 'Russian',

    'title':'We help you managing asset, provide financial advise. Leave money issue with us and focus on your core business.',
    'registration':'Registration'

  },
  'ru': {
    'home': 'Главная',
    'about': 'О нас',
    'instructions' : 'Инструкции',
    'news' : "Новости",
    'platforms' : 'Платформы',
    'faq' : 'FAQ',
    'contact': 'Контакты',
    'languages': 'Языки',
    'en':'Английский',
    'ru': 'Русский',

    'title':'Доверьте нам свои деньги и сфокусируйтесь на вашем бизнесе.',
    'registration':'Регистрация'

  }
};

// Process translation
$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});