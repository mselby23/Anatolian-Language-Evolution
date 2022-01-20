////////////////////////////// IMPORTANT VARIABLES //////////////////////////////

// The actual text of the write ups
writeUpsTextValues = [
   "In 6000 BCE the language Anatolian was spoken, in the region of Anatolia (modern day Turkey). This language would later evolve, forming many separate branches, and eventually every modern Indo-European language.",
   "From about 5000 BCE to 3000 BCE, the Balto-Slavic and Indo-Iranian languages split off from Anatolian. Balto-Slavic would eventually form all Slavic languages, while Indo-Iranian would form the Iranian and Indo-Aryan lanugages.",
   "Just slightly before 2000 BCE, Germanic and Italic formed. Germanic would eventually form all Germanic languages, such as English, German and Dutch. Italic would form the Romance languages, such as Spanish, Italian and French. Just a little before this was also the time Greek, Albanian, and Armenian formed, which are all still spoken today. Also, during this time Indo-Iranian formed Old Persian and Vedic Sanskrit.",
   "During this time period, a massive amount of languages formed, with Italic branching off into the various Romance Languages, Slavic branching off into Russian, Ukranian, and all other Slavic languages spoken today, and Germanic branching off into English, German, and all other Germanic languages spoken today."
];

// The LOWER PART OF THE WRITE UP RANGE (if one is 6000 BC and the next is 5000 BC, then the first one will be from 6000-5000 BC)
writeUpsTextPlacement = [
   -6000,
   -5000,
   -2000,
   1000,
   3000 // This needs to exist, even though you'll never see an event for it. It's for the changing the writeUp text for loop.
];

////////////////////////////// GETTING ELEMENTS //////////////////////////////
const writeUpText = document.getElementById("writeUpText");
const writeUpTime = document.getElementById("writeUpTime");
const theSlider = document.getElementById("theSlider");
const setImagesSize = document.getElementById("setImagesSize");



// All the map elements
const anatolianImage = document.getElementById("Anatolian");
const indoIranianImage = document.getElementById("Indo-Iranian");
const baltoSlavicImage = document.getElementById("Balto-Slavic");
const hittiteImage = document.getElementById("Hittite");
const albanianImage = document.getElementById("Albanian");
const armenianImage = document.getElementById("Armenian");
const greekImage = document.getElementById("Greek");
const germanicImage = document.getElementById("Germanic");
const luvianLycianImage = document.getElementById("LuvianLycian");
const oldPersianImage = document.getElementById("Old-Persian");
const vedicSanskritImage = document.getElementById("Vedic-Sanskrit");
const celticImage = document.getElementById("Celtic");
const italicImage = document.getElementById("Italic");
const slavicImage = document.getElementById("Slavic");
const balticImage = document.getElementById("Baltic");
const kurdishImage = document.getElementById("Kurdish");
const sanskritImage = document.getElementById("Sanskrit");
const slovenianSerboCroatianImage = document.getElementById("SlovenianSerbo-Croatian");
const scottishImage = document.getElementById("Scottish");
const irishImage = document.getElementById("Irish");
const turkishImage = document.getElementById("Turkish");
const persianImage = document.getElementById("Persian");
const germanImage = document.getElementById("German");
const dutchImage = document.getElementById("Dutch");
const hindiImage = document.getElementById("Hindi");
const englishImage = document.getElementById("English");
const italianImage = document.getElementById("Italian");
const frenchImage = document.getElementById("French");
const swedishImage = document.getElementById("Swedish");
const armenian1000ADImage = document.getElementById("Armenian_1000AD");
const lithuanianImage = document.getElementById("Lithuanian");
const russianImage = document.getElementById("Russian");
const portugueseImage = document.getElementById("Portuguese");
const spanishImage = document.getElementById("Spanish");
const catalanImage = document.getElementById("Catalan");
const ukranianImage = document.getElementById("Ukranian");
const norwegianImage = document.getElementById("Norwegian");
const urduImage = document.getElementById("Urdu");
const romanianImage = document.getElementById("Romanian");
const polishImage = document.getElementById("Polish");
const belarusianImage = document.getElementById("Belarusian");
const bulgarianImage = document.getElementById("Bulgarian");
const czechImage = document.getElementById("Czech");


////////////////////////////// SETTING DEFAULT VALUES //////////////////////////////
writeUpText.innerHTML = writeUpsTextValues[0];
currentWriteUp = 0;

// All map element ranges
mapElementRanges = [ // Use 3000 for languages still spoken
   [anatolianImage, -6000, -3200, 1, "7%"],
   [indoIranianImage, -4700, -2350, 1, "7%"],
   [baltoSlavicImage, -4900, -1200, 1, "7%"],
   [hittiteImage, -3200, -2300, 1, "7%"],
   [albanianImage, -3200, 3000, 1, "4%"],
   [armenianImage, -3100, 1000, 1, "5%"],
   [greekImage, -2850, 3000, 1, "4%"],
   [germanicImage, -2450, 500, 1, "8%"],
   [luvianLycianImage, -2300, -100, 1, "7%"],
   [oldPersianImage, -2200, 500, 1, "9%"],
   [vedicSanskritImage, -2200, -800, 1, "7%"],
   [celticImage, -2100, 200, 1, "8%"],
   [italicImage, -2000, 800, 1, "5%"],
   [slavicImage, -1100, 1100, 1, "13%"],
   [balticImage, -1000, 1000, 1, "5%"],
   [kurdishImage, 0, 3000, 1, "5%"],
   [sanskritImage, -700, 500, 1, "7%"],
   [slovenianSerboCroatianImage, 100, 3000, 1, "4%"],
   [scottishImage, 400, 3000, 1, "2%"],
   [irishImage, 400, 3000, 1, "1.5%"],
   [turkishImage, 350, 3000, 1, "7%"],
   [persianImage, 600, 3000, 1, "4.5%"],
   [germanImage, 300, 3000, 1, "5%"],
   [dutchImage, 800, 3000, 1, "2.5%"],
   [hindiImage, 700, 3000, 1, "13.5%"],
   [englishImage, 500, 3000, 1, "5%"],
   [italianImage, 800, 3000, 1, "6.5%"],
   [frenchImage, 700, 3000, 1, "5.5%"],
   [swedishImage, 1000, 3000, 1, "6%"],
   [armenian1000ADImage, 1000, 3000, 1, "2%"],
   [lithuanianImage, 1100, 3000, 1, "5%"],
   [russianImage, 1100, 3000, 1, "12%"],
   [portugueseImage, 1200, 3000, 1, "1.5%"],
   [spanishImage, 1100, 3000, 1, "4%"],
   [catalanImage, 1200, 3000, 1, "1.5%"],
   [ukranianImage, 1200, 3000, 1, "7%"],
   [norwegianImage, 1300, 3000, 1, "7.8%"],
   [urduImage, 1200, 3000, 1, "5%"],
   [romanianImage, 1300, 3000, 1, "7%"],
   [polishImage, 1400, 3000, 1, "5.5%"],
   [belarusianImage, 1500, 3000, 1, "8.5%"],
   [bulgarianImage, 1500, 3000, 1, "5%"],
   [czechImage, 1500, 3000, 1, "3%"]
];

// Make all lanugages except Anatolian invisible at the start
for (const mapElement of mapElementRanges) {
   if (!mapElement[0] == anatolianImage) {
      mapElement[3] = 0;
      mapElement[0].style.opacity = 0;
   }
}

////////////////////////////// INTERACTIVE CODE AND STUFF //////////////////////////////
function doStuff() {

   // Changing writeUp text
   for (i = 0; i < writeUpsTextPlacement.length - 1; i++) {
      if (theSlider.value > writeUpsTextPlacement[i] && theSlider.value < writeUpsTextPlacement[i + 1]) {
         writeUpText.innerHTML = writeUpsTextValues[i];

         // Change the time title at the top
         if (writeUpsTextPlacement[i] < 0) {
            writeUpTime.innerHTML = (0 - writeUpsTextPlacement[i]).toString() + " BCE";
         }  else {
            writeUpTime.innerHTML = writeUpsTextPlacement[i].toString() + " CE";
         }
         break;
      }
   }

   // Changing the map languages
   for (const mapElement of mapElementRanges) {
      if (theSlider.value < mapElement[1] || theSlider.value > mapElement[2]) {
         if (theSlider.value < mapElement[1]) {
            if (Math.abs(theSlider.value - mapElement[1]) < 301) {
               mapElement[0].style.width = mapElement[4];
               mapElement[0].style.opacity = (300 - Math.abs(theSlider.value - mapElement[1])) / 450;
            }  else {
               mapElement[0].style.width = "0px";
               mapElement[0].style.opacity = 0;
            }
         } else {
            if (Math.abs(theSlider.value - mapElement[2]) < 301) {
               mapElement[0].style.width = mapElement[4];
               mapElement[0].style.opacity = (300 - Math.abs(theSlider.value - mapElement[2])) / 450;
            }  else {
               mapElement[0].style.width = "0px";
               mapElement[0].style.opacity = 0;
            }
         }
      }  else {
         mapElement[0].style.width = mapElement[4];
         mapElement[0].style.opacity = 0.75;
      }
   }
}

// Run every 0.1 seconds
setInterval(doStuff, 100);
