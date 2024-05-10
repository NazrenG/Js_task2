/*1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.
 */
// function convertMoney(x) {
//     switch (x) {
//       case "EUR":
//         return 0.93 * dollar;
//         break;
//       case "UAH":
//         return 39.59 * dollar;
//         break;
//       case "AZN":
//         return 1.7 * dollar;
//         break;
//       default:
//         return "Secim dogru deyil!";
//         break;
//     }
//   }

//   let dollar = Number(prompt("Dollar daxil edin:"));
//   let choose = prompt("EUR, UAH və ya AZN seçin:").toUpperCase();

//   alert(convertMoney(choose));

/* 
2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim.*/

// function discount(x) {
//   if (x >= 200 && x < 300) {
//     x -= 0.03 * x;
//     return x;
//   } else if (x >= 300 && x < 500) {
//     x -= 0.05 * x;
//     return x;
//   } else if (x >= 500) {
//     x -= 0.07 * x;
//     return x;
//   } else if (x < 200 && x >= 0) {
//     return "Endirim etmek olmaz!";
//   } else {
//     return "Mebleg dogru deyil!";
//   }
// }
// let money = Number(prompt("Mebleg daxil edin:"));
// alert("Endirimli mebleg  " + discount(money).toString());

/* 3. İstifadəçidən dairənin uzunlugu və kvadratın perimetri soruş və belə bir dairənin göstərilən
kvadrata sığacağını müəyyənləşdir.*/

// let circleLength = Number(prompt("Dairenin uzunlugunu daxil edin:"));
// let squarePerimetr = Number(prompt("Kvadratin perimetrini daxil edin:"));

// let squareLength = squarePerimetr / 4;
// let circleDiametr = circleLength / 3.14;
// function isCheck(squareLength, circleDiametr) {
//   if (squareLength >= circleDiametr) {
//     return true;
//   } else return false;
// }

// if (isCheck(squareLength, circleDiametr)) {
//   alert("Daire kvadratin daxiline yerlesir");
// } else {
//   alert("daire kvadratin icine yerlesmir");
// }

/*4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər. */

// let question1 = prompt("2+2*2+2*2=? a)10  b)20  c)15").toLowerCase();
// let question2 = prompt(
//   "Dairenin uzunlugu hansi dusturla tapilir? a)4*p*r  b)2*p*r  c)2*p*r*r"
// ).toLowerCase();
// let question3 = prompt(
//   "Elifbada nece herf var? a)28  b)30  c)32"
// ).toLowerCase();

// let total = 0;
// function answer(question1, question2, question3) {
//   if (question1 == "a") total += 2;
//   if (question2 == "b") total += 2;
//   if (question3 == "c") total += 2;

//   return total;
// }
// alert("Umumi bal: " + answer(question1, question2, question3).toString());

/* 5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
keçidini nəzərə alın, həmçinin dövr varlığını.*/

// let datetime = prompt("(gun/ay/il) daxil edin:");

// let arr = datetime.split("/");
// let gun = arr[0];
// let ay = arr[1];
// let il = arr[2];
// if (ay == 1 || ay == 3 || ay == 5 || ay == 7 || ay == 9 || ay == 11) {
//   if (gun == 31) {
//     gun = 1;
//     ay++;
//   } else {
//     gun++;
//   }
// } else if (ay == 2 || ay == 4 || ay == 6 || ay == 8 || ay == 10) {
//   if (gun == 30) {
//     gun = 1;
//     ay++;
//   } else {
//     gun++;
//   }
// } else if (ay == 12 && gun == 31) {
//   gun = 1;
//   ay = 1;
//   il++;
// }
// alert(gun.toString() + "/" + ay.toString() + "/" + il.toString());

/*Ev tapşırığı №3
6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
istifadəçi OK düyməsini basana qədər belə davam edir.*/

let currentDayIndex = new Date().getDay();
let nextDayIndex;

do {
  let dayOfWeek = confirm(
    "Həftə günü: " +
      currentDayIndex.toString() +
      ". Növbəti günü görmək istəyirsiniz?"
  );

  if (dayOfWeek) {
    nextDayIndex = currentDayIndex === 7 ? 1 : currentDayIndex + 1;
    currentDayIndex = nextDayIndex;
  }
} while (nextDayIndex !== undefined);

/*7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
rəqəmlərlə vurun. */

// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i.toString() + "*" + j.toString() + "=" + (i * j).toString());
//   }
// }

/*Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
olduğunu nəzərə alın. */

// const car = {
//   producer: "FIAT",
//   model: "500",
//   year: 2020,
//   speed: 60,
// };

// function getCar(obj) {
//   console.log("İstehsalçı: " + obj.producer);
//   console.log("Model: " + obj.model);
//   console.log("Buraxılış ili: " + obj.year);
//   console.log("Orta sürət: " + obj.speed + " km/saat");
// }

// getCar(car);

// let distance = 400;
// function getTime(dist, speed) {
//   let time = dist / speed;
//   let restTime = 0;
//   if (time / 4 > 0) {
//     restTime = time / 4;
//   }
//   time += restTime;
//   return time;
// }
// let travelTime = getTime(distance, car.speed);
// console.log(
//   "Verilən məsafəni qət etmək üçün lazım olan toplam zaman: " +
//     travelTime.toFixed(2) +
//     " saat"
// );
