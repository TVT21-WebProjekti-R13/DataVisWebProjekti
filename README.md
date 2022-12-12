# Pääotsikko

### Kuvaus
Full-stack web projekti datan visualisoinnille esimääritetyistä datanlähteistä.

Datana toimii useita tieteellisiä tuktkimuksia ja mittaustuloksia ilmaston lämpötiloista, hiilidioksiidi pitoisuuksista, sekä rekonstruktioita ilmastosta jopa kahden miljoonan vuoden ajalta.

Käyttäjän on tarkoitus voida luoda oma käyttäjä sivustolle ja sitä kautta luoda omia visualisointeja, sekä jakaa visualisointejaan muille lin. Visualisointien katsominen ei tarvitse käyttäjän luomista.

Projektissa käytetyt teknologiat:
Front-end:
[React](https://reactjs.org/)
[Chart-js](https://www.chartjs.org/)

Back-end:
[NodeJS](https://nodejs.org/en/)
[Express](https://expressjs.com/)

Tietokanta:
[MySql](https://www.mysql.com/)


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
Selaimessa esitettävä react sovellus kutsuu palvelimen rajapintaa käyttäjän, datan ja visualisointien hakemiseksi.
Palvelimella NodeJS vastaa sovelluksen http pyyntöihin, sekä hakee pyydettäessä tietokannasta dataa.
Tietokanta yksinkertainen relaatiotietokanta.
kaikki osat pyöriävt Google Cloud Service alustalla omina osinaan.

### Linkki sovellukseen


