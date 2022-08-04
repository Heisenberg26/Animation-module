var x = '';
function changeTextsodcl() {
    document.getElementById("nacl-nt").innerHTML = "<h3>NaCl</h3>";
    document.getElementById("nacl-nt").style ="top: 92px;left: 23px;font-size:22px;"
    x = 'sodcl';
}
// This is for changing Text to Ferric chloride
function changeTextFecl() {
    document.getElementById("nacl-nt").innerHTML = "<h3>FeCl<sub>3</sub></h3>";
    document.getElementById("nacl-nt").style = "top: 92px;left: 23px;"
    x = 'soac';
}

// This is for changing Text to Sodium acetate 
function changeTextsoac() {
    document.getElementById("nacl-nt").innerHTML = "<h3>C<sub>2</sub>H<sub>3</sub>NaO<sub>2</sub></h3>";
    document.getElementById("nacl-nt").style = "top: 105px;left: 3px; font-size:17px;"
    x = 'fecl';
}