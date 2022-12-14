# DataVis
![banneri kuva sovelluksesta](/assets/banner.png)
### Kuvaus
Full-stack webprojekti datan visualisoinnille esimääritetyistä datalähteistä. Projekti on tehty Oulun ammattikorkeakoulun kurssille Web-ohjelmoinnin projektityö. Sovelluksessa käyttäjä voi katsoa datalähteistä tehtyjä visualisointeja. Käyttäjä voi kirjautumalla luoda omia visualisointinäkymiä annetuista datalähteistä sekä jakaa oman näkymän osoitteen.

Datana toimii useita tieteellisiä tutkimuksia ja mittaustuloksia ilmaston lämpötiloista, hiilidioksidipitoisuuksista sekä rekonstruktioita ilmastosta jopa kahden miljoonan vuoden ajalta.

![kuva visualisoinnin luonti valikosta](/assets/login.png)

Projektissa käytetyt teknologiat:  
Front-end:  
[React](https://reactjs.org/)  
[Chart-js](https://www.chartjs.org/)  
[Cypress](https://testing-library.com/docs/cypress-testing-library/intro/)  

Back-end:  
[NodeJS](https://nodejs.org/en/)  
[Express](https://expressjs.com/)  
[JestJS](https://jestjs.io/)  

Tietokanta:  
[MySql](https://www.mysql.com/)  

Alusta:  
[Google Cloud Platform](https://cloud.google.com/)  


### Projektin jäsenet
[Jan-Henrik Lapinoja](https://github.com/Jan5u)  
Fullstack  
  
[Aappo Launonen](https://github.com/Olvix)  
Fullstack  
  
[Santeri Knihtilä](https://github.com/MarsalkkaSandels)  
Fullstack  
  
[Matias Mämmelä](https://github.com/MatiasMammela)  
Fullstack  

### Sovelluksen arkkitehtuuri
Selaimessa esitettävä React-sovellus kutsuu palvelimen rajapintaa käyttäjän, datan ja visualisointien hakemiseksi.
Palvelimella NodeJS vastaa sovelluksen HTTP-pyyntöihin sekä hakee pyydettäessä tietokannasta dataa.
Tietokantana on yksinkertainen relaatiotietokanta.
Kaikki osat pyörivät Google Cloud Service alustalla omina osinaan.

### Linkki sovellukseen

[DataVis](https://logical-codex-367210.lm.r.appspot.com)
