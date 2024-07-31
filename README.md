# React + Redux Toolkit + TypeScript

Использованы следующие APIs:
- configureStore(): обертка для createStore(), упрощающая настройку хранилища с настройками по умолчанию. Позволяет передавать массив middlewares и enhancers, автоматически вызывая applyMiddleware() и compose(). Также включает расширение Redux DevTools и промежуточный слой redux-thunk - наиболее часто используемый слой для работы с синхронной и асинхронной логикой за пределами компонентов.
- createSlice(): принимает объект, содержащий редьюсер, название части состояния (state slice), начальное значение состояния, и автоматически генерирует редьюсер слайса, а также action creators.
- библиотека immer: позволяет писать "мутирующий" код, обновляющий состояние иммутабельно. Иммутабельоне изменение состояния в Redux - один из основных принципов его работы. Однако возможность писать "мутирующий" код делает его более удобным для чтения, что особенно полезно при необходимости обновления глубоко вложенных свойств.
- Хуки useSelector и useDispatch, позволяющие получить состояние приложения и диспетчера соответсвенно.
- bindActionCreators(): преобразует объект, значениями которого являются генераторы экшенов, в объект с теми же ключами, но генераторами экшенов, обернутыми в вызов dispatch, т. е. они могут быть вызваны напрямую без использования dispatch.
- TypedUseSelectorHook: позволяет создать хук-аналог useSelector, который будет правильно типизирован для корневого состояния стора.
- createApi(): ядро RTK Query (инструмент для получения и кэширования данных. Разработан для упрощения загрузки данных в веб-приложения, избавляя от необходимости вручную писать логику получения и кэширования данных.) createApi позволяет определить набор «конечных точек», которые описывают, как получать данные из внутренних API и других асинхронных источников, включая конфигурацию получения и преобразования этих данных.
- fetchBaseQuery(): Небольшая обертка вокруг fetch, позволяюшая определить определенные параметры для последующих запросов, например, базовый URL.
- builder.query() для получения данных и builder.mutation() для отправки данных на сервер
- tagTypes: каждая отдельная конечная точка запроса может снабжать свои кэшированные данные определенными тегами(providedTags). Каждая отдельная конечная точка мутации может аннулировать определенные теги(invalidateTags) для существующих кэшированных данных. Это позволяет установить связь между кэшированными данными одной или нескольких конечных точек запроса и поведением одной или нескольких конечных точек мутации. Эта связь определяет, какие кэшированные данные будут либо повторно загружены, либо удалены из кэша.
