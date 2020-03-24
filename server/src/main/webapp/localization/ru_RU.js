if ( !document.localization ) document.localization = [];

document.localization[ 'ru_RU' ] = {
    'login.username': 'Имя пользователя или email',
    'login.username.placeholder': 'Введите имя пользователя или email',
    'login.password': 'Пароль:',
    'login.password.placeholder': 'Введите пароль',
    'login.submit': 'Войти',
    'login.password.incorrect': 'Неверные имя пользователя или пароль',

    'header.label.username': 'Имя пользователя',

    'devices.group.options.all': 'Все группы',
    'devices.configuration.options.all': 'Все конфигурации',
    'devices.permissions.all': 'Все разрешения выданы',
    'devices.permissions.not.as.device.admin': '- Приложение не установлено как администратор устройства',
    'devices.permissions.window.overlap.prohibited': '- Наложение поверх других окон недоступно',
    'devices.permissions.history.access.prohibited': '- Доступ к истории использования не настроен',
    'devices.unknown': 'Неизвестен',
    'devices.model.unknown': 'Неизвестна',
    'devices.date.unknown': 'неизвестно',
    'devices.date.format': 'dd/MM HH:mm',
    'devices.app.installed': '- ${applicationName}: установл.',
    'devices.app.not.installed': '- ${applicationName}: не установл.',
    'devices.app.version.available': ', доступна ${applicationVersion}',
    'devices.app.installed.and.version.available': '- ${applicationName}: установл. ${applicationInstalledVersion}, доступна ${applicationVersionAvailable}',
    'devices.app.needs.removal': '${applicationVersion}, требуется удаление',
    'devices.no.data': 'Устройство не передало данных',
    'devices.settings.conformance.broken': 'Несоответствие настройкам: (${serverData})',
    'devices.file.installed': '- ${file}: установл.',
    'devices.file.not.installed': '- ${file}: не установл.',
    'devices.file.lastUpdate.differs': '- ${file}: различие во врмени модификации ${diff} мин',

    'button.apply': 'Применить',
    'button.gps.on': 'Включить GPS',
    'button.wifi.on': 'Включить Wi-Fi',
    'button.notify.update': 'Уведомить об обновлении',
    'button.app.settings': 'Настройки приложений',
    'button.ok': 'OK',
    'button.help': 'Помощь',
    'button.new.app': 'Новое приложение',
    'button.new.app.version': 'Новая версия',
    'button.upgrade': 'Обновить',
    'button.renew.config': 'Обновить на устройствах',
    'button.common': 'Общедоступное приложение',
    'button.close': 'Закрыть',
    'button.yes': 'Да',
    'button.cancel': 'Отмена',
    'button.save': 'Сохранить',
    'button.save.and.close': 'Сохранить и закрыть',
    'button.more': 'Ещё...',
    'button.cleanup': 'Очистить',
    'button.add': 'Добавить',
    'button.add.icon': 'Новая',
    'button.search': 'Поиск',
    'button.export': 'Экпорт',
    'button.change': 'Изменить',
    'button.copy': 'Копировать',
    'button.qrcode': 'QR-код',
    'button.application': 'Приложение',
    'button.change.password': 'Сменить пароль',
    'button.set.configuration': 'Задать конфигурацию',
    'button.delete': 'Удалить',
    'button.login': 'Логин',
    'button.renew.code': 'Обновить код',
    'button.configurations': 'Конфигурации',
    'button.set.configurations': 'Указать конфигурации',
    'button.edit.versions': 'Версии',
    'button.edit': 'Редактировать',
    'button.change.common.app': 'Изменить общее приложение',
    'button.delete.common.app': 'Удалить общее приложение',
    'button.turn.common.app': 'Сделать общим',
    'button.hints.enable': 'Показывать подсказки',
    'button.hints.disable': 'Скрыть подсказки',

    'question.impersonate.user': 'Войти в приложение от имени администратора организации "${customerName}"?',
    'question.delete.file': 'Удалить файл "${fileName}"?',
    'question.delete.customer': 'Удалить организацию "${customerName}"?',
    'question.delete.user': 'Удалить пользователя "${username}"?',
    'question.delete.application': 'Удалить приложение "${applicationName}"?',
    'question.delete.application.version': 'Удалить версию "${applicationVersion}"?',
    'question.delete.configuration': 'Удалить конфигурацию "${configurationName}"?',
    'question.delete.group': 'Удалить группу "${groupName}"?',
    'question.delete.device': 'Удалить устройство с номером "${deviceNumber}"?',
    'question.exit.without.saving': 'Изменения не сохранены. Всё равно покинуть эту страницу?',
    'question.turn2common.application': 'Сделать общим приложение "${applicationName}"?',
    'question.app.upgrade': 'Обновить приложение "${v1}" до последней версии для конфигурации "${v2}"?',

    'error.application.setting.empty.app': 'Укажите приложение',
    'error.application.setting.empty.name': 'Укажите название',
    'error.application.setting.empty.value': 'Укажите значение',

    'error.icon.dimension.invalid': 'Иконка должна быть квадратной',
    'error.icon.empty.name': 'Введите название иконки',
    'error.icon.empty.file': 'Загрузите файл иконки',
    'error.application.version.pkg.mismatch': 'ID пакета файла (${actual}) не соответствует приложению (${expected})',
    'error.empty.user': 'Выберите пользователя',
    'error.empty.user.name': 'Заполните имя пользователя',
    'error.empty.user.login': 'Заполните login пользователя',
    'error.empty.user.role': 'Выберите роль пользователя',
    'error.empty.password': 'Введите новый пароль',
    'error.empty.password.confirm': 'Введите подтверждение пароля',
    'error.empty.group.name': 'Заполните название группы',
    'error.empty.configuration': 'Укажите конфигурацию',
    'error.empty.configuration.name': 'Заполните имя конфигурации',
    'error.empty.configuration.password': 'Заполните пароль',
    'error.empty.configuration.contentApp': 'Не указано контентное приложение',
    'error.invalid.configuration.mainApp': 'В настройках MDM используется неверное главное приложение',
    'error.invalid.configuration.contentApp': 'В настройках MDM используется неверное контентное приложение',
    'error.mismatch.password': 'Пароль и подтверждение пароля должны совпадать',
    'error.empty.customer.name': 'Заполните имя организации',
    'error.empty.customer.prefix': 'Заполните префикс номеров устройств',
    'error.empty.customer.device.configuration': 'Выберите конфигурацию устройств',
    'error.empty.customer.duplicate.prefix': 'Префикс уже используется',
    'error.duplicate.customer.name': 'Организация с введенным именем уже существует. Попробуйте другое имя.',
    'error.duplicate.group.name': 'Группа с введенным именем уже существует. Попробуйте другое имя.',
    'error.duplicate.configuration.name': 'Конфигурация с введенным именем уже существует. Попробуйте другое имя.',
    'error.duplicate.device.number': 'Устройство с таким номером уже существует',
    'error.internal.server': 'Внутренняя ошибка сервера',
    'error.permission.denied': 'Нет прав для выполнения',
    'error.request.failure': 'Ошибка при выполнении запроса',
    'error.configuration.device.use': 'Невозможно удалить эту конфигурацию, она используется на устройствах. Сначала перейдите в "Устройства", найдите устройства, использующие эту конфигурацию, и измените их настройки.',
    'error.invalid.system.update.time': 'Неверный интервал врмение установки',

    'error.configuration.file.empty.name': 'Укажите название файла',
    'error.configuration.file.empty.desc': 'Укажите описание файла',
    'error.configuration.file.empty.path': 'Укажить путь на устройстве',
    'error.configuration.file.empty.file': 'Укажите URL или загрузите файл',

    'error.notfound.device': 'Устройство не найдено',
    'error.duplicate.login': 'Такой login уже используется',
    'error.duplicate.group': 'Группа с таким именем уже существует',
    'error.duplicate.application': 'Приложение c таким ID пакета и версией уже существует',
    'error.recent.application.version.exists': 'Существует более поздняя версия приложения',
    'error.common.application.access.prohibited': 'Управлять общим приложением может только Супер-Администратор',
    'error.application.config.reference.exists': 'Приложение используется в конфигурациях и не может быть удалено',
    'error.application.version.deletion.prohibited': 'Версия либо явялется единственной, либо используется в конфигурациях и не может быть удалена',
    'error.duplicate.file': 'Файл с таким именем уже существует',
    'error.used.file': 'Этот файл используется',
    'error.version.exists': 'Такая версия этого приложения уже существует',
    'error.duplicate.configuration': 'Конфигурация с таким именем уже существует',
    'error.notfound.customer.admin': 'Не найдена учетная запись администратора',
    'error.apk.file.required': 'Выберите файл с расширением .apk или .xapk',
    'error.empty.app.name': 'Введите название приложения',
    'error.empty.app.pkg': 'Введите ID пакета',
    'error.empty.app.url': 'Введите URL',
    'error.empty.app.iconText': 'Введите текст ярлыка',
    'error.empty.app.version': 'Введите версию приложения',
    'error.notempty.group': 'В данную группу входят одно или несколько устройств. Вы не можете её удалить.',
    'error.file.empty': 'Загрузите новый файл',
    'error.file.deletion': 'Ошибка при удалении файла на сервере',
    'error.file.save': 'Ошибка при сохранении файла на сервере',
    'error.password.wrong': 'Неверный пароль',
    'error.password.empty': 'Пароль не указан',
    'error.params.missing': 'Отсутствуют параметры:',
    'error.empty.push.options': 'Пожалуйста, выберите вариант Push-уведомлений',

    'table.filtering.check.all': 'Выбрать все',
    'table.filtering.uncheck.all': 'Отменить все',
    'table.filtering.suffix.configuration': 'конфигурации',
    'table.filtering.suffix.group': 'группы',
    'table.filtering.no.selected.configuration': 'Нет выбранных конфигураций',
    'table.filtering.no.selected.group': 'Нет выбранных групп',

    'success.admin.created': 'Создана учетная запись администратора:\n${adminCredentials}',
    'success.uploading.file': 'Файл загружается на сервер...',
    'success.loading.devices': 'Загрузка списка устройств...',
    'success.loading.customer': 'Загрузка данных организации ...',
    'success.file.uploaded': 'Файл успешно загружен.',
    'success.file.uploaded.need.save': 'Файл успешно загружен. Введите относительный путь и нажмите кнопку "Сохранить".',
    'success.settings.design.saved': 'Настройки дизайна сохранены успешно',
    'success.settings.common.saved': 'Настройки столбцов сохранены успешно',
    'success.settings.saved': 'Настройки сохранены успешно',
    'success.settings.apiKey.saved': 'Ключ API сохранен успешно',
    'success.settings.hints.enabled': 'Показ подсказок разрешен',
    'success.settings.hints.disabled': 'Показ подсказок запрещен',
    'success.configuration.saved': 'Конфигурация успешно сохранена',
    'success.operation.completed': 'Операция завершена успешно',
    'success.plugins.disabled': 'Настройки сохранены успешно',
    'success.config.update.notification': 'Команда обновления конфигурации отправлена на устройства',
    'success.config.update.device.app.settings.notification': 'Команда обновления настроек приложений отправлена на устройство',

    'form.icon.title': 'Иконка',
    'form.icon.name': 'Название',
    'form.icon.file': 'Файл',


    'form.configuration.title': 'Конфигурация',
    'form.configuration.title.typical': 'Типовая конфигурация',
    'form.configuration.settings.auto.update': 'Автообновление',
    'form.configuration.settings.system.update': 'Обновление системы',
    'form.configuration.settings.system.update.default': 'Любой',
    'form.configuration.settings.system.update.immediate': 'Немедленно',
    'form.configuration.settings.system.update.scheduled': 'По распис-ю',
    'form.configuration.settings.system.update.postponed': 'По запросу',
    'form.configuration.settings.system.update.time': 'Время установки',
    'form.configuration.settings.system.update.time.from': 'c:',
    'form.configuration.settings.system.update.time.to': 'по:',
    'form.configuration.settings.block.status.bar': 'Блокировка статус-бара',
    'form.configuration.settings.mdm.kiosk.mode': 'Режим киоска',
    'form.configuration.settings.mdm.app.main': 'Главное приложение',
    'form.configuration.settings.mdm.component.event.receiver': 'Компонент - получатель события',
    'form.configuration.settings.mdm.component.event.receiver.placeholder': 'Введите название компонента',
    'form.configuration.settings.mdm.component.wifi.ssid': 'WiFi SSID',
    'form.configuration.settings.mdm.component.wifi.ssid.placeholder': 'WiFi SSID - оставьте пустым для ручного ввода',
    'form.configuration.settings.mdm.component.wifi.password': 'WiFi пароль',
    'form.configuration.settings.mdm.component.wifi.password.placeholder': 'WiFi пароль - оставьте пустым для ручного ввода',
    'form.configuration.settings.mdm.component.wifi.security': 'Тип защиты WiFi',
    'form.configuration.settings.mdm.app.content': 'Контентное приложение',
    'form.configuration.settings.mdm.qrcode.url': 'URL QR-кода',
    'form.configuration.settings.mdm.hint': 'Выберите главное приложение и компонент',
    'form.configuration.apps.search.label': 'Поиск:',
    'form.configuration.apps.sort.label': 'Сортировать:',
    'form.configuration.apps.sort.byname': 'По имени',
    'form.configuration.apps.sort.bypkg': 'По ID',
    'form.configuration.apps.show.systeam.apps': 'Показать системные',
    'form.configuration.apps.action.install': 'Установить',
    'form.configuration.apps.action.prohibit': 'Блокировать',
    'form.configuration.apps.action.not.install': 'Не устанавливать',
    'form.configuration.apps.action.delete': 'Удалить',
    'form.configuration.apps.action.permit': 'Разрешить',
    'form.configuration.apps.label.inherit': 'Наследуется',
    'form.configuration.apps.label.show': 'Показывать',
    'form.configuration.apps.label.not.show': 'Не показывать',
    'form.configuration.settings.design.use.default': 'Использовать дизайн по умолчанию',
    'form.configuration.settings.design.color.background': 'Цвет фона',
    'form.configuration.settings.design.color.background.placeholder': 'Выберите цвет',
    'form.configuration.settings.design.color.app.names': 'Цвет названий приложений',
    'form.configuration.settings.design.color.app.names.placeholder': 'Выберите цвет',
    'form.configuration.settings.design.background.image.url': 'URL фонового изображения',
    'form.configuration.settings.design.background.image.url.placeholder': 'Введите url фонового изображения',
    'form.configuration.settings.design.icon': 'Размер иконок',
    'form.configuration.settings.design.icon.small': 'Маленькие',
    'form.configuration.settings.design.icon.medium': 'Средние (+20%)',
    'form.configuration.settings.design.icon.large': 'Большие (+40%)',
    'form.configuration.settings.design.desktop.header': 'Заголовок рабочего стола',
    'form.configuration.settings.design.desktop.header.no': 'Нет',
    'form.configuration.settings.design.desktop.header.deviceid': 'ID устройства',
    'form.configuration.settings.common.name': 'Название',
    'form.configuration.settings.common.name.placeholder': 'Введите название конфигурации',
    'form.configuration.settings.common.desc': 'Описание',
    'form.configuration.settings.common.desc.placeholder': 'Введите описание конфигурации',
    'form.configuration.settings.common.admin.pwd': 'Пароль администратора',
    'form.configuration.settings.common.admin.pwd.placeholder': 'Введите пароль администратора',
    'form.configuration.settings.common.gps': 'GPS',
    'form.configuration.settings.common.gps.any': 'Любой',
    'form.configuration.settings.common.gps.off': 'Выключен',
    'form.configuration.settings.common.gps.on': 'Включен',
    'form.configuration.settings.common.bluetooth': 'Bluetooth',
    'form.configuration.settings.common.wifi': 'Wi-Fi',
    'form.configuration.settings.common.mobile.data': 'Мобильные данные',
    'form.configuration.settings.common.usb.storage': 'Блокировка USB диска',
    'form.configuration.settings.common.brightness': 'Управление яркостью',
    'form.configuration.settings.common.brightness.none': 'Нет',
    'form.configuration.settings.common.brightness.auto': 'Авто',
    'form.configuration.settings.common.brightness.manual': 'Значение',
    'form.configuration.settings.common.brightness.value': 'Яркость экрана',
    'form.configuration.settings.common.timeout': 'Управление таймаутом экрана',
    'form.configuration.settings.common.timeout.value': 'Таймаут экрана (с)',
    'form.configuration.settings.common.volume.block': 'Блокировка громкости',
    'form.configuration.settings.request.updates': 'Отслеживать координаты',
    'form.configuration.settings.request.updates.donottrack': 'Не отслеживать',
    'form.configuration.settings.request.updates.gps': 'По GPS',
    'form.configuration.settings.request.updates.wifi': 'По Wi-Fi',
    'form.configuration.settings.request.updates.prompt.gps': 'Для отслеживания координат по GPS необходимо включить GPS',
    'form.configuration.settings.request.updates.prompt.wifi': 'Для отслеживания координат по Wi-Fi необходимо включить Wi-Fi',
    'form.configuration.settings.push.options' : 'Push-уведомления',
    'form.configuration.settings.push.options.mqtt.worker' : 'MQTT протокол (энергосбережение)',
    'form.configuration.settings.push.options.mqtt.alarm' : 'MQTT протокол (доставка в спящем режиме)',
    'form.configuration.settings.push.options.polling' : 'Опрос URL по HTTP',
    'form.configuration.settings.password.mode' : 'Требования к паролю',
    'form.configuration.settings.password.mode.any' : 'Нет',
    'form.configuration.settings.password.mode.present' : 'Пароль должен присутствовать',
    'form.configuration.settings.password.mode.easy' : 'Простой (6 символов или более)',
    'form.configuration.settings.password.mode.moderate' : 'Средний (8+ символов, буквы и цифры)',
    'form.configuration.settings.password.mode.strong' : 'Сложный (8+, разный регистр, цифры, знаки)',
    'form.configuration.files.search.label': 'Поиск:',
    'form.configuration.files.action.upload': 'Загрузить',
    'form.configuration.files.action.remove': 'Удалить',

    'form.configuration.file.name': 'Имя файла',
    'form.configuration.file.description': 'Описание файла',
    'form.configuration.file.path': 'Путь на устройстве',
    'form.configuration.file.url': 'URL',
    'form.configuration.file.file': 'Файл',
    'form.configuration.file.action': 'Действие',
    'form.configuration.file.action.prompt.1': 'Загрузить',
    'form.configuration.file.action.prompt.2': 'Удалить',
    'form.configuration.file.remove.prompt.1': 'Этот файл больше не будет синхронизироваться с устройствами',
    'form.configuration.file.remove.prompt.2': 'Удалить файл с сервера',

    'form.password.title': 'Сменить пароль',
    'form.password.label.user': 'Пользователь',
    'form.password.label.password.new': 'Новый пароль',
    'form.password.label.password.new.placeholder': 'Введите новый пароль',
    'form.password.label.password.confirm': 'Подтверждение',
    'form.password.label.password.confirm.placeholder': 'Введите новый пароль ещё раз',

    'form.application.type': 'Тип',
    'form.application.type.option.web': 'Веб-страница',
    'form.application.type.option.app': 'Приложение',
    'form.application.pkg': 'ID пакета',
    'form.application.from.file': 'Определяется из файла',
    'form.application.name': 'Название приложения',
    'form.application.version': 'Версия',
    'form.application.system': 'Системное',
    'form.application.run.after.install': 'Запуск после установки',
    'form.application.url': 'URL',
    'form.application.file': 'Файл',
    'form.application.showLabel': 'Показать ярлык',
    'form.application.iconText': 'Текст ярлыка',
    'form.application.iconText.placeholder': '(по умолчанию)',
    'form.application.versions.title': 'Версии приложения',
    'form.application.icon': 'Иконка',
    'form.application.icon.default': '(по умолчанию)',
    'form.application.icon.add': 'Добавить иконку',

    'form.application.setting.app': 'Приложение',
    'form.application.setting.app.placeholder': 'Выберите приложение',
    'form.application.setting.name': 'Атрибут',
    'form.application.setting.value': 'Значение',
    'form.application.setting.comment': 'Комментарий',
    'form.application.setting.type': 'Тип',
    'form.application.setting.readonly': 'Не меняется на устройстве',

    'form.application.configurations.app': 'Приложение',
    'form.application.configurations.configs': 'Конфигурации',

    'form.configuration.copy.new.name': 'Новое название',
    'form.configuration.copy.new.name.placeholder': 'Введите новое название конфигурации',

    'form.customer.name': 'Название',
    'form.customer.name.placeholder': 'Введите название организации',
    'form.customer.apiKey': 'Ключ API',
    'form.customer.apiKey.placeholder': 'Введите ключ API',
    'form.customer.prefix': 'Префикс',
    'form.customer.prefix.placeholder': 'Введите префикс номеров устройств',
    'form.customer.device.configuration': 'Конфигурация устройств',
    'form.customer.desc': 'Описание',
    'form.customer.desc.placeholder': 'Введите описание организации',
    'form.customer.copy.configuration': 'Копировать конфигурации',
    'form.customer.copy.design': 'Копировать дизайн',

    'form.device.number': 'Номер',
    'form.device.desc': 'Описание',
    'form.device.groups': 'Группы',
    'form.device.config': 'Конфигурация',
    'form.device.imei': 'IMEI',
    'form.device.phone.number': 'Номер телефона',

    'form.update.device.config': 'Конфигурация',

    'form.file.file': 'Файл',
    'form.file.path': 'Путь',
    'form.file.path.placeholder': 'Введите относительный путь, например "/files/"',

    'form.file.apps.name': 'Название приложения',
    'form.file.apps.pkg': 'ID пакета',
    'form.file.apps.version': 'Версия',

    'form.group.name': 'Название',
    'form.group.name.placeholder': 'Введите название группы',

    'form.user.login': 'Login',
    'form.user.login.placeholder': 'Введите login пользователя',
    'form.user.name': 'Имя',
    'form.user.name.placeholder': 'Введите имя пользователя',
    'form.user.role': 'Роль',
    'form.user.all.devices.available': 'Доступны все устройства',
    'form.user.available.groups': 'Доступные группы устройств',
    'form.user.password.new': 'Новый пароль',
    'form.user.password': 'Пароль',
    'form.user.password.new.placeholder': 'Введите новый пароль',
    'form.user.password.confirm': 'Подтверждение',
    'form.user.password.confirm.placeholder': 'Введите новый пароль ещё раз',

    'form.settings.hints.title': 'Подсказки',

    'form.settings.plugins.title': 'Используемые Плагины',

    'form.settings.common.title': 'Таблица "Устройства"',
    'form.settings.common.visible.columns': 'Видимые столбцы в таблице "Устройства"',
    'form.settings.common.status': 'Статус',
    'form.settings.common.role': 'Роль пользователей',
    'form.settings.common.date': 'Дата',
    'form.settings.common.device.number': 'Номер устройства',
    'form.settings.common.imei': 'IMEI',
    'form.settings.common.phone.number': 'Номер телефона',
    'form.settings.common.phone.model': 'Модель телефона',
    'form.settings.common.status.permissions': 'Статус разрешений',
    'form.settings.common.status.installation': 'Статус установки',
    'form.settings.common.config': 'Конфигурация',
    'form.settings.common.desc': 'Описание',
    'form.settings.common.group': 'Группа',
    'form.settings.common.launcher.version': 'Версия лаунчера',
    'form.settings.common.battery.level': 'Заряд батареи',

    'form.settings.design.title': 'Дизайн по умолчанию',
    'form.settings.design.color.font': 'Цвет фона',
    'form.settings.design.color.font.placeholder': 'Выберите цвет',
    'form.settings.design.color.app.names': 'Цвет названий приложений',
    'form.settings.design.color.app.names.placeholder': 'Выберите цвет',
    'form.settings.design.url.background.image': 'URL фонового изображения',
    'form.settings.design.url.background.image.placeholder': 'Введите URL фонового изображения',
    'form.settings.design.size.icon': 'Размер иконок',
    'form.settings.design.size.icon.small': 'Маленькие',
    'form.settings.design.size.icon.medium': 'Средние (+20%)',
    'form.settings.design.size.icon.large': 'Большие (+40%)',
    'form.settings.design.desktop.header': 'Заголовок рабочего стола',
    'form.settings.design.desktop.header.no': 'Нет',
    'form.settings.design.desktop.header.device.id': 'ID устройства',

    'form.settings.lang.title': 'Языковые настройки',
    'form.settings.lang.use.default': 'Использовать язык по умолчанию',
    'form.settings.lang.use': 'Исполльзовать язык',
    'form.settings.lang.en': 'Английский',
    'form.settings.lang.ru': 'Русский',

    'form.settings.misc.title': 'Прочие настройки',
    'form.settings.misc.create.new.devices': 'Добавлять устр-во при первом обращении',
    'form.settings.misc.new.device.config': 'Конфигурация нового устройства',
    'form.settings.misc.new.device.group': 'Группа нового устройства',

    'form.settings.groups.title': 'Группы',
    'form.settings.groups.search.placeholder': 'Поиск группы',

    'form.settings.users.title': 'Пользователи',
    'form.settings.users.search.placeholder': 'Поиск пользователя',

    'form.qr.device.number.placeholder': 'Введите ID устройства...',
    'form.qr.code.image.alt': 'QR-код',

    'form.profile.title': 'Сменить пароль',
    'form.profile.password.old': 'Старый пароль',
    'form.profile.password.old.placeholder': 'Введите старый пароль',
    'form.profile.password.new': 'Новый пароль',
    'form.profile.password.new.placeholder': 'Введите новый пароль',
    'form.profile.password.confirm': 'Подтверждение',
    'form.profile.password.confirm.placeholder': 'Введите новый пароль ещё раз',

    'tab.customers': 'Организации',
    'tab.common.applications': 'Общие приложения',

    'tab.devices': 'Устройства',
    'tab.applications': 'Приложения',
    'tab.configurations': 'Конфигурации',
    'tab.files': 'Файлы',
    'tab.default.design': 'Дизайн по умолчанию',
    'tab.common.settings': 'Таблица "Устройства"',
    'tab.users': 'Пользователи',
    'tab.groups': 'Группы',
    'tab.language': 'Язык и другие настройки',
    'tab.license': 'Лицензия',
    'tab.hints': 'Подсказки',
    'tab.plugins': 'Плагины',

    'tab.configeditor.common.settings': 'Таблица "Устройства"',
    'tab.configeditor.design.settings': 'Настройки дизайна',
    'tab.configeditor.applications': 'Приложения',
    'tab.configeditor.mdm.settings': 'Настройки MDM',
    'tab.configeditor.app.settings': 'Настройки приложений',
    'tab.configeditor.files': 'Файлы',

    'search.placeholder.file': 'Поиск файла',
    'search.placeholder.configuration': 'Поиск конфигурации',
    'search.placeholder.customer': 'Поиск организации',
    'search.placeholder.application': 'Поиск приложения',
    'search.placeholder.application.setting': 'Поиск настройки',
    'search.placeholder.device': 'Поиск устройства',
    'search.placeholder.address': 'Поиск адреса',
    'search.placeholder.point': 'Поиск площадки',
    'search.placeholder.message': 'Поиск сообщения',
    'search.placeholder': 'Поиск ...',
    'search.placeholder.from': 'С...',
    'search.placeholder.to': 'По...',


    'table.heading.customer.name': 'Название',
    'table.heading.customer.desc': 'Описание',
    'table.heading.customer.registration.time': 'Зарегистрирован',
    'table.heading.customer.last.login.time': 'Последний логин',
    'table.heading.customer.actions': 'Действия',

    'table.heading.configuration.name': 'Название',
    'table.heading.configuration.desc': 'Описание',
    'table.heading.configuration.actions': 'Действия',

    'table.heading.application.setting.app.pkg': 'ID пакета',
    'table.heading.application.setting.app.name': 'Название приложения',
    'table.heading.application.setting.name': 'Атрибут',
    'table.heading.application.setting.value': 'Значение',
    'table.heading.application.setting.comment': 'Комментарий',
    'table.heading.application.setting.lastUpdate': 'Создан',

    'table.heading.file.url': 'URL',
    'table.heading.file.devicepath': 'Путь на устройстве',
    'table.heading.file.description': 'Описание файла',
    'table.heading.file.action': 'Действие',
    'table.heading.file.lastUpdate': 'Создан',

    'table.heading.application.pkg': 'ID пакета',
    'table.heading.application.name': 'Название приложения',
    'table.heading.application.version': 'Версия',
    'table.heading.application.url': 'URL',
    'table.heading.application.label': 'Ярлык',
    'table.heading.application.actions': 'Действия',

    'table.heading.device.status': 'Статус',
    'table.heading.device.date': 'Дата',
    'table.heading.device.device.number': 'Номер устройства',
    'table.heading.device.imei': 'IMEI',
    'table.heading.device.phone.number': 'Номер телефона',
    'table.heading.device.phone.model': 'Модель телефона',
    'table.heading.device.status.permissions': 'Статус разрешений',
    'table.heading.device.status.installation': 'Статус установки',
    'table.heading.device.status.files': 'Статус файлов',
    'table.heading.device.configuration': 'Конфигурация',
    'table.heading.device.desc': 'Описание',
    'table.heading.device.group': 'Группа',
    'table.heading.device.launcher.version': 'Версия лаунчера',
    'table.heading.device.battery.level': 'Заряд батареи',
    'table.heading.device.actions': 'Действия',

    'table.heading.group.name': 'Название',
    'table.heading.group.actions': 'Действия',

    'table.heading.file.name': 'Имя файла',
    'table.heading.file.path': 'Путь',
    'table.heading.file.address': 'Адрес',
    'table.heading.file.actions': 'Действия',

    'table.heading.users.login': 'Login',
    'table.heading.users.name': 'Имя',
    'table.heading.users.role': 'Роль',
    'table.heading.users.actions': 'Действия',

    'table.heading.common.apps.customer': 'Организация',
    'table.heading.common.apps.pkg': 'ID пакета',
    'table.heading.common.apps.name': 'Название приложения',
    'table.heading.common.apps.version': 'Версия',
    'table.heading.common.apps.url': 'URL',
    'table.heading.common.apps.label': 'Ярлык',
    'table.heading.common.apps.actions': 'Действия',

    'notfound.devices': 'Нет устройств для отображения.',
    'notfound.files': 'Список файлов пуст. Воспользуйтесь кнопкой "Добавить", чтобы загрузить новый файл.',
    'notfound.configurations': 'Конфигурации не найдены.',
    'notfound.customers': 'Организации не найдены.',
    'notfound.common.apps': 'Нет приложений для отображения.',
    'notfound.applications': 'Приложения не найдены',
    'notfound.groups': 'Группы не найдены. Попробуйте другой запрос.',
    'notfound.users': 'Пользователи не найдены. Попробуйте другой запрос.',
    'notfound.apps.for.display': 'Нет приложений для отображения.',
    'notfound.app.versions.for.display': 'Нет версий для отображения.',

    'format.date.header': 'HH:mm dd/MM/yyyy',

    'menu.about': 'О приложении',
    'menu.profile': 'Профиль',
    'menu.panel.master': 'Мастер-панель',
    'menu.panel.main': 'Основная панель',
    'menu.logout': 'Выйти',
    'menu.functions': 'Функции',
    'menu.settings': 'Настройки',
    'menu.show.hints': 'Показать подсказки',


    'plugin.name.not.specified': '<<Имя функции не указано>>',

    'breadcrumb.devices': 'Устройства',
    'breadcrumb.applications': 'Приложения',
    'breadcrumb.configurations': 'Конфигурации',
    'breadcrumb.files': 'Файлы',
    'breadcrumb.default.design': 'Дизайн по умолчанию',
    'breadcrumb.common.settings': 'Таблица "Устройства"',
    'breadcrumb.language.settings': 'Язык и другие настройки',
    'breadcrumb.license.settings': 'Лицензия',
    'breadcrumb.users': 'Пользователи',
    'breadcrumb.groups': 'Группы',
    'breadcrumb.hints': 'Подсказки',
    'breadcrumb.plugins': 'Плагины',
    'breadcrumb.config.details': 'Детали',
    'breadcrumb.application.versions': 'Версии',

    'app.name': 'Headwind MDM',
    'app.description': '- система управления мобильными устройствами с открытым кодом',
    'app.title': 'Headwind MDM - панель управления',

    'box.show.my.apps.only': 'Показать только мои приложения',
    'configuration.app.version.upgrade.message': 'Установлена версия ${installedVersion}, доступна версия ${latestVersion}',

    'about.line.1': 'Панель управления Headwind MDM',
    'about.line.2': 'Оболочка для корпоративных Android-устройств',
    'about.line.3': 'Версия ${versionNumber}',
    'about.line.4': 'Используемые плагины',

    'common.app.clarification': 'Это приложение является общедоступным, его редактирование запрещено. Для добавления другой версии, пожалуйста, обратитесь к администратору.',

    'qrcode.help.line1': 'Чтобы настроить Android-устройство (версии Android 7 или выше) в управляемом (корпоративном) режиме:',
    'qrcode.help.line2': 'Выполните сброс к заводским настройкам',
    'qrcode.help.line3': 'Нажмите 7 раз подряд на любом месте стартового экрана (должен появиться скрытый режим сканирования QR-кода)',
    'qrcode.help.line4': 'Следуйте инструкциям устройства: примите условия использования, подключитесь к Wi-Fi, отсканируйте QR-код',
    'qrcode.help.line5': 'Код может содержать также ID устройства в системе Headwind MDM (после настройки его не нужно будет вводить). Для включения ID устройства в QR код, введите его на этом экране и нажмите "Обновить".',

    'form.configuration.app.version.select.select.title': 'Выберите версию для установки',
    'form.configuration.app.version.select.version.check.off': 'Отключить проверку версии',
    'form.configuration.app.version.select.upgrade.warning': 'Обновить приложение "${v1}" до версии "${v3}" для конфигурации "${v2}"?',
    'form.configuration.app.version.select.downgrade.warning': ' Понижение версии УДАЛИТ ВСЕ ДАННЫЕ ПРИЛОЖЕНИЯ на всех устройствах! Понизить версию приложения "${v1}" до версии "${v2}"?',

    'hint.step.1': 'Чтобы начать настройку устройства, нажмите сюда',
    'hint.step.2': 'Чтобы показать QR код, нажмите сюда',
    'hint.step.3': 'Чтобы узнать, как открыть сканер QR кода на устройстве, нажмите здесь',
    'hint.step.4': 'Найдите доступный ID во вкладке "устройства". Нажмите "Обновить", чтобы включить его в QR код.',

    'ie.browser.notice.1': 'К сожалению, браузер Internet Explorer не поддерживается.',
    'ie.browser.notice.2': 'Рекомендуемый браузер для использования Headwind MDM - <a href="https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop">Chrome</a>.',

    'form.resolved.duplicate.pkg.text1': 'ID пакета "${pkg}" уже используется приложениями, указанными ниже.',
    'form.resolved.duplicate.pkg.text2': 'Вы хотите добавить новое приложение или новую версию существующего приложения?',
    'form.resolved.duplicate.pkg.text3': 'Новая версия для',
    'form.resolved.duplicate.pkg.text4': 'Package ID "${pkg}" уже используется приложениями ${apps}',
    'form.resolved.duplicate.pkg.text5': 'Вы уверены, что хотите изменить package ID?',

    'tooltip.usage.byconfigurations': 'Используется конфигурациями',
    'tooltip.usage.byapps': 'Используется приложениями',
    'tooltip.usage.byicons': 'Используется иконками',

    'form.devices.label.params.more': 'Дополнительные параметры',
    'form.devices.label.params.less': 'Меньше параметров',
    'form.devices.label.installation.status': 'Статус установки',
    "format.devices.date.createTime": "dd/MM/yyyy HH:mm:ss",
    "format.devices.date.datePicker": "dd-MM-yyyy",

    'form.devices.selection.install.status.default': 'Статус установки ...',
    'form.devices.selection.install.status.all': 'Все',
    'form.devices.selection.install.status.success': 'Успешно',
    'form.devices.selection.install.status.version.mismatch': 'Неверные версии',
    'form.devices.selection.install.status.failure': 'Ошибка',

    'search.placeholder.launcher.version': 'Версия лаунчера',
    'error.date.range.invalid': 'Неверный интервал дат'

};