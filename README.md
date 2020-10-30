# Welcome to AC Back-end!
În primul și primul rând am vrea să începem prin a vă mulțumi pentru faptul că sunteți astăzi aici și să vă felicităm pentru toată munca pe care ați depus-o până acum în cadrul întregului proces de recrutare. **Well done!**

![enter image description here](https://media.giphy.com/media/ZacA8lgIMZUnzaRiqw/giphy.gif)

Acum, pentru ceea ce urmează, vă îndemnăm să vă încărcați cu și mai multă energie și bună dispoziție și vă promitem că fiecare moment și fiecare minut dedicat **SiSC**-ului va merita din plin.
**Și pentru că suntem IT și ne place eficiența, să ne focusăm asupra acestui aspect acum.**

![](https://media.giphy.com/media/xD9vHfSZiBgTm/giphy.gif)

Pentru început, după cum probabil ați realizat, **Git** este o unealtă de bază pentru noi. Aici ajung toate proiectele noastre și de aici pleacă mai departe toate creațiile către publicul larg.
Pentru că ne oferă posibilitatea să menținem și lucrăm întotdeauna pe ultima versiune a fișierelor, acesta aduce un avantaj enorm unei **echipe** care colaborează constant, deci o să vă rugăm și pe voi să îi acordați la fel de multă importanță și să fiți atenți în momentul în care vom explica funcționalitățile de bază.


![enter image description here](https://media.giphy.com/media/MB139ObkGalArgZOvz/giphy.gif)
  
Puțin mai jos vom lista și **necesarele + materialele** pe care vi le-am pus la dispoziție acum câteva zile, în cazul în care va fi nevoie să le accesați ceva mai rapid:
*Tutoriale:*
 - [**JavaScript basics**](https://www.codecademy.com/learn/introduction-to-javascript)
 - **[SQL basics](https://www.edureka.co/blog/sql-basics/)**
 - **[NodeJS basics](https://www.youtube.com/watch?v=U8XF6AFGqlc)**
  
 *Programe de instalat:*
  
 - **[Xampp](https://www.apachefriends.org/ro/download.html)**
 ```Precizare: nu îl instalați în C:\Program files```
 - **[Visual Studio Code](https://code.visualstudio.com/)**
 - **[NodeJS](https://nodejs.org/en/)**
 - **[Git](https://git-scm.com/downloads)**

![enter image description here](https://media.giphy.com/media/115BJle6N2Av0A/giphy.gif)

# Acum, să trecem la treabă!
## **Ce veți avea de făcut mai exact?**
Prima dată va trebui să facem rost de materialele cu care vom lucra. Pentru a face asta deschidem:
-   **Linia de comandă** - dacă avem Ubuntu
-   **[Git bash](https://git-scm.com/download/win)** - dacă avem Windows
Vom crea un folder, iar aici vom face practic **o clonă** la tot ceea ce v-am pregătit, folosind comanda:

`git clone REPO_HTTPS_ADDRESS`

În cazul nostru:

`git clone https://gitlab.com/itsisc/ac-it-back-end-2020.git`

Acum, dacă navigăm în folderul de mai sus...

![enter image description here](https://media.giphy.com/media/sEms56zTGDx96/giphy.gif)

...vom găsi un sub-folder nou, cu toate fișierele din acest **repository**.
Mai mult sau mai puțin, acolo se regăsesc **2 formulare**, iar pentru fiecare vor exista anumite **cerințe**, de care va trebui să ne ocupăm astăzi:
# Statia I: 
![enter image description here](https://media.giphy.com/media/xT9KVuOrJRZ6jgIPsI/giphy.gif)

Acest formular este puțin mai special deoarece o facultate din ASE a avut o mică dispută cu divizia IT, iar aceștia au făcut o mică glumă stricându-le formularul de înscriere la facultate. Voi, SiSCotii, va trebui să-i ajutați să repare formularul.
## Ce veți avea de făcut?

![enter image description here](https://media.giphy.com/media/XGqDsE3owV0RO/giphy.gif)

- Accesați folderul tocmai clonat, apoi accesați **formular1**
 - În fereastra de bash rulați comanda:
 `code.`
 O să se deschidă Visual Studio Code automat unde veți găsi formularul cu probleme.
  
 - Rulați modulele **Apache** și **MySQL** din XAMPP Control Panel
 - Se crează baza de date **siscit_back_end** cu **Utf8_general_ci la Collation**, nu vă speriați este extrem de simplu și vă vom arăta cum să faceți asta ;)
 - Deschidem terminalul în Visual Studio Code și rulăm următoarele comenzi: 
 
	`cd ./back-end`
  
	`npm install` 
  
	 `npm install -g nodemon`
- Pentru a porni formularul folosiți comanda: `nodemon` sau `npm start`
- Din Visual Studio Code, accesați fișierul **server.js** și analizați în terminal erorile strecurate de ștrengarii diviziei IT astfel încât lumea să se poată înscrie la facultate.
- Atunci când în terminal nu se va mai afla nicio eroare, accesați în browserul vostru **localhost:8081**
- În momentul în care datele clienților vor fi introduse fără erori în tabela **studenti_inscrisi** din baza de date **siscit_back_end**, Facultatea va fi recunoscătoare.
> Pentru testare încercați să aveți deschise în paralel formularul din browser și terminalul din Studio Code, iar de fiecare dată când faceți modificări să îl reîncărcați. De asemenea, după modificări, nu uitați să salvați! **Ctrl + S**
> 
> În plus, pentru a nu pierde timpul, puteți prioritiza funcționalitatea, nu validitatea datelor (ex. adresa **ion@aaa.com** e la fel de bună precum **ionut.popescu@gmail.com** sau **0711222333** e la fel de ok ca **numărul vostru real de telefon**).

**Ai îndeplinit cu succes toți pașii?**

![enter image description here](https://media.giphy.com/media/lvOnlEYunAwOkHjgmU/giphy.gif)

**Felicitări!** Atunci hai să îi anunțăm și pe ceilalți că problema a fost rezolvată și să urcăm codul sursă undeva... Evident, pe Git.
-   Mergem pe profilul nostru de **Gitlab** și dăm click pe butonul mare și verde cu **New Project**.
  
 -   Numele proiectului va fi **ac back 2020**
 -   Nivelul de vizibilitate va fi **Public**
 -   Și vom bifa căsuța pentru **README.md**, pentru a-l clona mai ușor pe local
 -   *Opțional, puteți adăuga o descriere scurtă și amuzantă
  
> Important de menționat că ori de câte ori veți face modificări și veți vrea să le urcați pe Git va trebui să urmați aceiași pași. Deci atenție, pentru că nu e nimic dificil și merită din plin.
-   Pentru a verifica dacă există diferențe între repository și folderul local rulăm:
  
 
 `git status `
 
  
-   Pentru a adăuga un fișier modificat din listă avem:
  

 `git add FILE_NAME`

  
-   În caz că vrem să le adăugăm pe **toate**:
  
 
 `git add .`
 
  
-   Acum putem rula din nou **git status**, să vedem ce fișiere au fost adăugate cu succes.
  
-   Iar pentru ca toate modificările să aibă sens și toți ceilalți colaboratori să înțeleagă care a fost scopul update-ului, trebuie să oferim și un mesaj specific:
  

 `git commit -m "YOUR_MESSAGE_HERE"`
  
 `ex. -->  git commit -m "Fixed ERRORS"`

  
-   În final vom folosi o comanda ce va trimite toată informația către proiectul pe care tocmai ce l-ați creat. Sună cam așa:
  

 `git push`
 
![enter image description here](https://media.giphy.com/media/GjqnJOEy3tz1K/giphy.gif)

# Stația II
Ei bine, aici nu este nimic stricat, dar asta nu înseamnă că toate lucrurile sunt la locul lor. Departamentul IT Metrorex a întâmpinat câteva probleme în realizarea formularului pentru înregistrarea abonamentelor. Acestui formular îi lipsesc validările, ceea ce înseamnă că avem nevoie de voi să ne ajutați să-l securizăm. Așadar...

**1.Aplicați formularului următoarele validări**

a) câmpuri non-empty: nume, prenume, telefon, email, data_început, data_sfârșit;

b) câmpuri cu limită de caractere: nume, prenume (minim 3 caractere, maxim 30);

c) câmpuri ce permit doar litere: nume, prenume ;

d) validare pentru numărul de telefon ( lungime = 10, doar numere);

e) validare pentru email (formă specifică [exemplu@zzz.yyy](mailto:exemplu@zzz.yyy));

f) validare pentru data început și sfârșit (formă specifică dd/mm/yyyy);

g) validare pentru data de început să fie mai mică decât data de sfârșit;

h) validare validitate abonament (ziua curentă să fie între datele de început și sfârșit);

**Done?**

![enter image description here](https://media.giphy.com/media/RgfGmnVvt8Pfy/giphy.gif)

Acum că suntem "protejați", să îl **dezvoltăm** puțin:


**2.Adăugați câmpul CNP în formular.**
 - Acesta trebuie să existe atât în partea de front-end, cât și în baza de date, cu tipul VARCHAR, de 20 de caractere.
 -   Aplicați acestuia următoarele validări: non-empty, doar cifre, lungime = 13;
 
 ![enter image description here](https://media.giphy.com/media/7J4WFr2AAN0vGVXTgZ/giphy.gif)

**3. Adăugați câmpul vârstă în formular.**
 -   Acesta trebuie să existe atât în partea de front-end, cât și în baza de date, cu tipul VARCHAR, de 3 caractere.
 -   Aplicați acestuia următoarele validări: **non-empty, doar cifre, lungime minimă un caracter, lungime maximă 3 caractere.**
 -   Verificati daca varsta corespunde cu cea care reiese din CNP;
  
 ![enter image description here](https://media.giphy.com/media/V4LsYWkUp7S7u/giphy.gif)
 
**4. Asigurați-vă de unicitatea câmpului email în baza de date.**

![enter image description here](https://media.giphy.com/media/QWX4CSDyx1VELvO5lm/giphy.gif)

**5.Adăugați câmpul "gen" în formular.**
 - Acesta trebuie să apară doar în baza de date și să fie creat pe baza CNP-ului.
> **Notă**: Dacă prima cifră a CNP-ului este **1, 3 sau 5** în baza de date se va introduce litera "**M**", iar dacă prima cifră a CNP-ului este **2, 4 sau 6** în baza de date se va introduce litera "**F**"
Dacă ai ajuns până aici cu bine, atunci **FELICITĂRI...**

![enter image description here](https://media.giphy.com/media/jrhNtXZAl6ddyPuTb2/giphy.gif)

Un SiSCot cuminte isi preda codul la timp, asa ca:

**Pentru a ne trimite tema individuală, trimiteți pe mail link-ul proiectului vostru de git la adresele:**

`munteanu.cristian1009@gmail.com - Munteanu Cristian, Director departament IT.`

`robertneacsu2000@gmail.com -  Neacșu Robert, Lead divizie Back-End.`

**Deadline-ul pentru trimiterea temei este în data de: Vineri, 30 octombrie, ora 23:59**
