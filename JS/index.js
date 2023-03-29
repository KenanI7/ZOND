let bannerDesriptions = [ 
'Naša glavna branša jeste rad sa podnim podlogama, sve od parketa do stadiona umjetne trave. Dobrodošli na vaše idealno rješenje.',
 'Bez obzira radi li se o privatnom ili poslovnom prostoru, nudimo vam mjerenje te predračun potrebne količine materijala i vremena uz optimalnu iskoristivost.',
`Zond kroz svoj brend home decor nudi i šivenje velikog izbora zavjesa po mjeri zajedno sa ugradnjom kariniša.`, 
`Unutar home decora se također nalazi veoma bogat i kvalitetan izbor postejnog programa kako bi još više obogatili vaš prostor.`,
`Konsultacije su besplatan način da dobijete sliku najbolje verzije vašeg prostora, bio to dom ili radni mjesto.`
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

