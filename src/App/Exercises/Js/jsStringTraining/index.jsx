import './styles.css';

export function Exercise() {
  // 1
  function podniesPierwszaLitere(tekst) {
    return tekst.charAt(0).toUpperCase() + tekst.slice(1);
  }

  const tekst1 = 'john';
  const wynik = podniesPierwszaLitere(tekst1);
  console.log(wynik);

  //2

  function obcinaTekst(tekst, x) {
    return tekst.substr(0, x);
  }

  const tekstDlugi = 'What I`d like to tell on this topic is';
  const wynik1 = obcinaTekst(tekstDlugi, 20);
  console.log(wynik1);

  //3

  function liczPowtorzeniaSlowa(zdanie, slowo) {
    const slowaWZdaniu = zdanie.split(' ');
    let licznikPowtorzen = 0;

    for (let i = 0; i < slowaWZdaniu.length; i++) {
      if (slowaWZdaniu[i].toLowerCase() === slowo.toLowerCase()) {
        licznikPowtorzen++;
      }
    }

    return licznikPowtorzen;
  }

  const zdanie = 'hello world, hello people, hello you';
  const slowoSzukane = 'hello';
  const iloscPowtorzen = liczPowtorzeniaSlowa(zdanie, slowoSzukane);
  console.log(
    `Słowo "${slowoSzukane}" powtarza się ${iloscPowtorzen} razy w zdaniu.`
  );

  //4

  const regex = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}');
  let email = 'magda@gadomska.pl';

  console.log(regex.test(email));

  ///cw5
  function isPalindrome(email1) {
    const cleanedEmail1 = email1.toLowerCase().replace();
    const reversedEmail1 = cleanedEmail1.split('').reverse().join('');

    return cleanedEmail1 === reversedEmail1;
  }
  console.log(isPalindrome('kajak'));
  console.log(isPalindrome('Able was I ere I saw Elba'));
  console.log(isPalindrome('Hello, world!'));
  console.log(isPalindrome('racecar'));
  console.log(isPalindrome('level'));
}
