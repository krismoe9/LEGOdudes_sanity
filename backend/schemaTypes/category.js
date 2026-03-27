const category = { // Lager en "oppskrift" for en kategori i Sanity
    name: "category",  // Navnet som brukes i koden (ikke synlig for brukere)
    title: "Kategori", // Navnet som vises i Sanity (det du ser i admin-panelet)
    type: "document",  // Sier at dette er et dokument (en type innhold)
    fields: [ // Her bestemmer vi hvilke felt kategorien skal ha
        {
            name: "categoryname",  // Navnet på feltet i koden
            title: "Kategorinavn", // Teksten som vises i Sanity ved dette feltet 
            type: "string", // Feltet skal være tekst (en vanlig tekstlinje)
        },
        {
            name: "categoryimage",
            title: "Kategoribilde",
            type: "image"
        }
    ]
}

export default category