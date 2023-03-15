let bannerDesriptions = [
    `Možemo Vam ponuditi izmjeru Vašeg prostora, šivanje zavjesa po mjeri te ugradnju karniša.
 Uz najveći izbor zavjesa i dekora te individualni pristup svakom klijentu, 
 naši timovi će vam uz stručne savjete pomoći da na brz i jednostavan način dođete do najboljeg rješenja za vaš dom.`,
`Tepih centar nudi sve na jednom mjestu za vaše podove: savjetovanje, izbor i stručnu uslugu postavljanja.
Pružamo Vam stručno savjetovanje oko idealnog odabira i odgovarajućeg rješenja za vaš pod, preciznu izmjeru 
prostora i profesionalno postavljanje podne obloge.`,
`Bez obzira radi li se o privatnom ili poslovnom prostoru, nudimo Vam mjerenje 
te predračun potrebne količine materijala uz optimalnu iskoristivost.`,
`Tepihe, tepih stazu ili tapison kupljenu u našim poslovnicama, krojimo na željene dimenzije te Vam nudimo odmah 
i uslugu rubljenja krajeva. Cijena rubljenja je 8,00 kn po metru.`,
`asdasadhiodsaoh adshodsahodasdhaso adshdashidashidas hadshsadds`
]
const options = document.querySelectorAll(".option");
const description = document.getElementById("banner-text")


options.forEach((option, index) => {
    option.addEventListener("click", function() {
        options.forEach(option2 =>  option2.classList.remove("active"))
        this.classList.add("active");
        description.textContent = bannerDesriptions [index]
    })
})

