// localStorage.clear()
if (localStorage.getItem('DialogIDs') === null) {
  localStorage.setItem('DialogIDs', JSON.stringify([0, 1]))
  localStorage.setItem(
    'DialogId_0',
    JSON.stringify([
      { name: 'Дженнифер Эшли', time: '0:41', data: 'Сообщение от Джен' },
      [{ name: 'Дженнифер Эшли', data: 'Сообщение от Джен', time: '0:41' }],
    ]),
  )

  localStorage.setItem(
    'DialogId_1',
    JSON.stringify([
      { name: 'Эмиль Григорян', time: '0:58', data: 'Сообщение от Emil' },
      [{ name: 'Эмиль Григорян', data: 'Сообщение от Emil', time: '0:58' }],
    ]),
  )

  localStorage.setItem(
    'Users',
    JSON.stringify({
      'Эмиль Григорян': { userName: 'emil__grig', about: 'Разработчик приложения' },
      'Дженнифер Эшли': { userName: 'DAshley', about: 'Выдуманный персонаж' },
    }),
  )
}
