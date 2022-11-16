const WhiteEmail = ['ivan@email.com', 'Sasha@email.com', 'Kirill@email.com', 'Sonik@email.com', 'Artem@email.com'];
const BlackList = ['Saske@email.com', 'Naruto@email.com', 'Itachi@email.com', 'Slon@email.com'];
const emailsInBlackList = [];
const emails = [];

function getValidEmail() {

  for (let email of WhiteEmail) {
    if (email) {
      console.log('Валидный емаил! ' + WhiteEmail);
      emails.push;
    }
  }

  for (let email of BlackList) {
    if (email) {
      console.log('Не валидный емаил! ' + BlackList);
      emailsInBlackList.push;
    }
  }

}

getValidEmail(emails);