if (localStorage.getItem('DialogIDs') === null) {
  localStorage.setItem('DialogIDs', JSON.stringify([0, 1]));
  localStorage.setItem('DialogId_0', JSON.stringify(
    [{ Name: 'Дженнифер Эшли', Time: '0:41' }, [{ name: 'Дженнифер Эшли', data: 'Какое-то сообщение', time: '0:41' }]],

  ));

  localStorage.setItem('DialogId_1', JSON.stringify(
    [{ Name: 'Эмиль Григорян', Time: '0:58' }, [{ name: 'Эмиль Григорян', data: 'Проверка отправки', time: '0:58' }]],
  ));
}
