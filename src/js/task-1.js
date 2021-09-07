// console.log('вызов фунцкии')
// setTimeout(() => {
//   console.log('внутри callback')
// }, 2000);
// console.log('вызов второй функции')
// for (let i = 0; i < 100; i++) {
//   console.log(i);
  // }
// const logger = time => {
//   console.log(`лог через ${time}ms,потомуч то не отменили таймаут`)
// }
// const timerId = setTimeout(logger, 2000, 2000)
// console.log(timerId)
// if (shoubCancelTimer) {
//   clearInterval(timerId)
// }
// const logger = (time) => {
//   console.log(`лог каждые ${time}ms,${Date.now()}`)
// }
// const timerId = setInterval(logger, 2000, 2000);
// console.log('вызов сразу после окончания');
// const shoubCancelTimer = Math.random() > 0.3;
// console.log(shoubCancelTimer)
// if (shoubCancelTimer) {
//   clearInterval(timerId)
// }
// console.log('До вызова SetTimeout');
// setTimeout(() => { console.log('вызов отложенной функции callback') }, 2000);
// console.log('После высозва `setTimeout')
// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;
// const refs = {
//   notification: document.querySelector('.js-alert')
// }
// refs.notification.addEventListener('click', onNotificationClick)
// showNotificationClick()
// function onNotificationClick() {
//   hideNotification()
//   clearTimeout(timeoutId)
// }
// function showNotificationClick() {
//   refs.notification.classList.add('is-visible');
//  timeoutId =  setTimeout(() => {
//     hideNotification()
//     console.log('нужно закрыть алерт')
//   }, NOTIFICATION_DELAY);
// }
// function hideNotification() {
//   refs.notification.classList.remove('is-visible')
// }
// import BSN from 'bootstrap.native';
// const refs = {
//   modal: document.querySelector('#myModal'),
//   subscribeBtn: document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#myModal');
// openModal()
// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick)
// function openModal(){
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался')
//     return
//   };
//   setTimeout(() => {
//     console.log('Открываем модалку')
//     modal.show()
//     promptCounter += 1;
//   }, PROMPT_DELAY)
// }
// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }
