let step1 = prompt('ıssız bir adadasın. \n a)ateş yak b)etrafı gezin');

let step2;
let step2a;

let step3a;
let step3b;
let step3c;
let step3d;

let step4a;
let step4b;
let step4c;
let step4d;
let step4e;
let step4f;
let step4g;
let step4h;

let step5a;
let step5b;
let step5c;
let step5d;
let step5e;
let step5f;
let step5g;
let step5h;
let step5i;
let step5j;
let step5k;
let step5l;
let step5m;
let step5n;
let step5o;
let step5p;


// ates ve gezinti secenekleri

if (step1 == 'a') {
  step2 = prompt('Ateş harika görünüyor. Tavşan mı pişirsek \n a)tavşanı pişir b)tavşanı pişirme ');
} else if (step1 == 'b'){
  step2a = prompt('etraf harika görünüyor. Neredeyse ıssız adaya düştüğüm için sevineceğim \n a)kamp kur b)yürümeye devam et');
} 

// atesten sonra tavsan seceneği 
if (step2 == 'a') {
  step3a = prompt('tavşan çok lezzetliydi ama o da ne karnıma bir ağrı girdi \n a)yardım çağır b)kus');
} else if (step2 == 'b')  {
  step3b= prompt('tavşana kıyamayarak iyi yaptın ama karnım hala çok aç  \n a)etrafta gezinmeye devam et b)uçağın düştüğü alana git');
}

// kamp mı yürüme mi seçeneği

if (step2a == 'a') {
  step3c = prompt('kamp için harika bir yer etraftan biraz çalı çırpı toplayalım \n a)ağaç kes b)odun topla');
} else if (step2a == 'b') {
  step3d = prompt('yürümek bana iyi geldi o da ne bir yılan \n a)öldür b)yardım çağır');
}

// step 2 bitti


//!sterp 3 start 

// kus yardım 

if (step3a == 'a'){
  step4a = prompt('etrafta kimse yardım edecek kimse yok \n a)çimleri ye b)kusmaya çalış');
} else if (step3a == 'b') {
  step4b = prompt('kusmak epey iyi geldi. olamaz kusarken gömleğinde kanlar olduğunu farkettin.\n a)yaranı temizle b)enkaza yürü');
}

// gezin-geri dön

if (step3b == 'a'){
  step4c = prompt('etraf hala harika o da ne bir mağara  \n a)içeri gir b)yürümeye devam et');
} else if (step3b == 'b'){
  step4d = prompt('Enzakda hala insanlar kurtulmaya çalışıyor \n a)yardım et b)görmezlikten gel');
}

// agac-odun

if(step3c == 'a'){
step4e = prompt ('ağaçlar harika çadır kurmak çok kolay. Çadır içim yatak bulmalıyız \n a)yaprak topla b)kıyafetlerini kullan');
} else if (step3c == 'b') {
  step4f =prompt('boşta odun bulmak epey zor oldu  Şimdi Çadır içim yatak bulmalıyız  \n a)yaprak topla b)kıyafetlerini kullan');
}

// yilan 

if(step3d == 'a'){
  step4g= prompt('yılanı öldürürken zehirlendim sanırım iyileşemeyeceğim \n a)zehiri em b)otur dinlen');
} else if (step3d == 'b') {
  step4h= prompt('yardım çağırmaya giderken ayağım takıldı yılan beni ısırdı \n a)zehiri em b)otur dinlen');
}

//! step 4 start

// çim-ksuma

if(step4a == 'a'){
  step5a = prompt('çim yemek harika! daha iyi hissediyorum şimdi ne yapalım? \n a)uzan b)yürü');
} else if (step4a == 'b'){
  step5b = prompt('Kusmak iyice başımı döndürdü \n a) uzan b)yürümeye devam et');
}

// temizle-enkaza geri dön

if(step4b == 'a'){
  step5c= prompt ('yaramı temizledim artık daha iyi hissediyorum. Enzaka geri mi dönelim yoksa yürümeye devam mı edelim \n a)enkaza geri dön b)yürümeye devam et');
} else if (step4b == 'b'){
  step5d= prompt('enkaza yürüyorum ancak sanırım kan kaybediyorum \n a)yürümeye devam et bişey olmaz b)dinlen');
}
// içeri gir çık mağara

if(step4c == 'a'){
  step5e= prompt ('Mağara oldukça karanlık \n a)ateş yak b)yürümeye devam et');
} else if (step4c == 'b'){
  step5f= prompt('yürümekten epey yorgun düştüm sanırım bayılacağım \n a)su bul b)toparlan bırakma kendini yürümeye devam et');
}

// yardım-görmezden gel

if( step4d == 'a'){
  step5g = prompt('Çok yardım sever olduğunu farketmiştim. Önce çocuğu mu yoksa yaşlıları mı kurtaralım \n a)çocuk b)yaşlı');
} else if (step4d == 'b') {
  step5h = prompt('Zaten uğraşıp ne yapacaksın. Herkes kendi kurtulsun \n a)etrafta bulduğun değerli takıları al b)insanların yemeğini çal');
}

//  yaprak-kıyafet

if (step4e == 'a') {
  step5i = prompt('Bu yaprak sanırım işimi görür. Yatağım oldukça rahat oldu ama kapı yapmayı unutmuşum \n a)uyu b)taş toplamaya git');
} else if ( step4e =='b'){
  step5j = prompt('ıssız bir ada da zaten kıyafetlere ihtiyacım yoktu ama yinede kapı yapsam iyi olur \n a)taş topla b)boşver taşı koy kafayı uyu');
}

// yaprak kıyafet

if (step4f == 'a') {
  step5k  = prompt('Bu yaprak sanırım işimi görür. Yatağım oldukça rahat oldu ama kapı yapmayı unutmuşum \n a)uyu b)taş toplamaya git');
} else if (step4f == 'b'){
  step5l = prompt('ıssız bir ada da zaten kıayfetlere ihtiyacım yoktu ama yinede kapı yapsam iyi olur \n a)taş topla b)boşver taşı koy kafayı uyu');
}

// yilan

if(step4g == 'a'){
  step5m = prompt('zehiri emdim ama sanırım tam anlamıyla atamadım \n a)yardım çağır b)kaderine teslim ol');
} else if (step4g == 'b'){
  step5n = prompt('zehir vücuduma yayılıyor her yerim kıpkırmızı oldu sanırım öleceğim \n a)yardım çağır b) kaderine teslim ol');
}

// yilan devamke

if(step4h == 'a'){
  step5o = prompt('olamaz zehiri emerken tükürmeyi unutup hepsini yuttum \n a)kus b)koş');
} else if (step4h == 'b'){
  step5p = prompt('zaman geçtikçe vücudum kıpkırmızı oluyor sanırım öleceğim \n a)kaderine teslim ol b)yardım çağır');
}


//! 5. step coming

if (step5a =='a'){
  alert ('Çim Fayda etmedi Zehirlenerek öldün...(');
} else if(step5a =='b'){
  alert ('Çim Fayda etmedi Zehirlenerek öldün...(');
}

if(step5b == 'a'){
  alert('Zehirlenerek öldün..( Tekrar dene!');
} else if (step5b =='b'){
  alert('Yürürken zehir kanına iyice geçti öldün.. Tekrar dene');
}

if(step5c == 'a'){
  alert('enkazda kurtarma uçakları Tebrikler Issız adandan kurtuldun!');
} else if (step5c =='b'){
  alert('Yürürken ayağın takıldı. Kafa travmasından Öldün... Kader tekrar dene');
}

if(step5d == 'a') {
  alert('Kan kaybından öldün tekrar dene:(');
} else if (step5d == 'b') {
  alert('o da ne ! Kurtarma uçaklar tebrikler kurtuldun!');
}

if (step5e == 'a'){
  alert('Ateş yakıp ortalık aydınlanınca altın dolu hazine buldun tebrikler artık zenginsin!');
} else if (step5e == 'b'){
  alert('Yürüdükçe altın buldun tebrikler adadan kurtulamadın ama artık zenginsin!');
}

if (step5f == 'a'){
  alert('Su bulamadın dehidre oldun tekrar dene');
} else if(step5f == 'b'){
  alert('kurtarma uçakları! Tebrikler kurtuldun');
}

if (step5g == 'a'){
  alert('Çocuk sayende yaşıyor.Fakat babası ölmüş artık çocuğunla adada yaşayacaksın mutlu son...');
} else if (step5g == 'b'){
  alert('Yaşlı amca su da senide dibe çekti.Boğuldun!');
}

if (step5h =='a'){
  alert('Sen kötü bir insansın admin olarak seni öldürüyorum. tekrar dene');
} else if (step5h == 'b') {
  alert('Sen kötü bir insansın admin olarak seni öldürüyorum. Azcık İnsan Ol');
}

if (step5i == 'a'){
  alert('Mışıl mışıl uyurken kurtarma ekipleri seni buldu artık evinde uyursun. Tebrikler Kurtuldun');
} else if ( step5i == 'b'){
  alert('Taş toplamaya gittin bir de ne göresin kurtarma uçakları.Hadi yine iyisin Kurtuldun!');
}

if (step5j == 'b') {
alert(' Mışıl mışıl uyurken kurtarma ekipleri seni buldu artık evinde uyursun. Tebrikler Kurtuldun');
} else if (step5j == 'a') {
  alert('Taş toplamaya gittin bir de ne göresin kurtarma uçakları.Hadi yine iyisin Kurtuldun!');
}

if(step5k == 'a') {
  alert(' Mışıl mışıl uyurken kurtarma ekipleri seni buldu artık evinde uyursun. Tebrikler Kurtuldun');
} else if (step5k == 'b'){
  alert('Taş toplamaya gittin bir de ne göresin kurtarma uçakları.Hadi yine iyisin Kurtuldun!');
}

if(step5l == 'a'){
  alert('Taş toplamaya gittin bir de ne göresin kurtarma uçakları.Hadi yine iyisin Kurtuldun!');
} else if (step5l =='b'){
  alert(' Mışıl mışıl uyurken kurtarma ekipleri seni buldu artık evinde uyursun. Tebrikler Kurtuldun');
}

if (step5m == 'a') {
  alert('Yardım çağırırken zehir bedenini esir aldı. Öldün tekrar dene');
} else if (step5m == 'b') {
  alert('İki dua oku öldün tekrar dene');
}  

if (step5n == 'a') {
  alert('Yardım çağırırken zehir bedenini esir aldı. Öldün tekrar dene');
} else if ( step5n =='b') {
  alert('İki dua oku öldün tekrar dene');
}

if (step5o == 'a') {
  alert('İki dua oku öldün tekrar dene');
} else if (step5o == 'b') {
  alert('Koşarken zehir bedenini esir aldı. Öldün tekrar dene');
}

if(step5p == 'a') {
  alert('iki dua oku öldün tekrar dene');
} else if ( step5p == 'b') {
  alert('koşarken yardım uçaklarını gördün zehir mehir geçti tebrikler kurtuldun!');
} 



//  css özledim