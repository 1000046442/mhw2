// funzione per far visualizzare il menu a tendina attraverso l'aggiunta e la rimozione di una classe modificando il display : none

function menuatenda() {
    const menu_tenda = document.querySelector(".menuatendanascosto");
    if (!menu_tenda.classList.contains("menuatendavisibile")) 
    menu_tenda.classList.add("menuatendavisibile");
    else 
    menu_tenda.classList.remove("menuatendavisibile");
}


const bottonetenda = document.querySelector(".bottonetenda");
bottonetenda.addEventListener("click" , menuatenda);
 
function creaelementi() {
    const prodottiristorante = {
        "mcdonalds": [ {
                nome: "Smoky Gran Crispy McBacon® Menu",
                img: "https://www.mcdonalds.it/sites/default/files/styles/product_isolated_preview/public/bundle/isolated--menu-smoky-gran-crispy-mcbacon.png?itok=muuz7vgn",
                prezzo: 8.64
            },
            {
                nome: "Big Mac® Menu",
                img: "https://www.mcdonalds.it/sites/default/files/styles/product_isolated_preview/public/bundle/isolated--menu-bigmac_0.png?itok=tbn18zG7",
                prezzo: 7.89
            },
        ],
        "sushi" : [ {
                nome: "Nigiri",
                img: "https://sushisenpai.it/wp-content/uploads/2017/08/tipi-di-sushi-nigiri.jpg",
                prezzo: 10
            },
            {
                nome: "Gunkan",
                img: "https://sushisenpai.it/wp-content/uploads/2017/08/sushi-particolari-gunkan.jpg",
                prezzo: 9.89
            },
        ],
        "burgerking" : [ {
                nome: "Special King combo Limited edition: King nuggets",
                img: "https://www.burgerking.it/assets/img/console/appUser/news/1537_desktop_it.png?v=1743777555",
                prezzo: 4.95
            },
            {
                nome: "Special King combo Limited edition: Insalata con tonno",
                img: "https://www.burgerking.it/assets/img/console/appUser/news/1536_desktop_it.png?v=1743777413",
                prezzo: 4.95
            },
        ],
        "kfc" : [ {
                nome: "Box Meal Menu Bucket Tender Crispy Cheese &n",
                img: "https://media.imagonist.com/products/products/466_thumb_it.png?v=1741068447",
                prezzo: 11.95
            },
            {
                nome: "Menu Bucket Tender Crispy",
                img: "https://media.imagonist.com/mo/products/1218_image_it.png?v=1730893242",
                prezzo: 15.95
            },
        ],
        "oldwildwest" : [ {
                nome: "NEW YORK SMASH BURGER",
                img: "https://www.oldwildwest.it/proxyvfs.axd/img_main/r26882/ny-jpg?v=19776&ext=.jpg",
                prezzo: 13.80
            },
            {
                nome: "SMASH BURGER 20 YEARS",
                img: "https://www.oldwildwest.it/proxyvfs.axd/img_main/r25754/20-jpg?v=19786&ext=.jpg",
                prezzo: 11.80 
            },
        ]
    };

    // Crea il modal per i prodotti
    const modal_prodotti = document.createElement('div');
    modal_prodotti.className = 'modal_prodotti';
    modal_prodotti.innerHTML = `<div class="boxmodal">
            <span class="chiudi">&times;</span>
            <h2 class="titolo">Prodotti</h2>
            <div class="contenitore_prodotti"></div>
            </div>`;
    document.body.appendChild(modal_prodotti);   // appendChild aggiunge un nodo alla fine dell'elenco
    // Gestione click sul modal
    const closeModal = modal_prodotti.querySelector('.chiudi');
    closeModal.addEventListener('click', () => {
        modal_prodotti.style.display = 'none';
    });
   // Chiudi il modal cliccando fuori dal contenuto
    modal_prodotti.addEventListener('click', (e) => {
        if (e.target === modal_prodotti) {
            modal_prodotti.style.display = 'none';
        }
    });
    // Aggiungi event listener alle immagini dello slider
    document.querySelectorAll('.imgslider').forEach(img => {
        img.addEventListener('click', function() {
            // gwtAttribut per prenderre un attributo dal html per ricavare il nome del ristorante
            const risto = this.getAttribute('data-risto') || 'vuoto'; //vuoto = se non trova l'attributo risto (fallback)
            // escludi le immagini voute e sostituisci le immagini
            if(risto !== 'vuoto')
                mostraprodotti(risto);
            else
                img.src = "https://media.istockphoto.com/id/936182806/it/vettoriale/nessun-segno-di-immagine-disponibile.jpg?s=612x612&w=is&k=20&c=xcOUyyWN-rJL1O-l01tS1qEKA3-keT4Czby5Qed-qBs=";
        });
    });
    function mostraprodotti(risto) {
        const contenitore_prodotti = modal_prodotti.querySelector('.contenitore_prodotti');
        // Pulisci il contenitore per non far visualizzare i prodotti al secondo click
        contenitore_prodotti.innerHTML = '';
        // Ottieni i prodotti 
        const prodotti = prodottiristorante[risto] || [];
        // Crea i prodotti
        prodotti.forEach(prodottox => {
            const prodottosingolo = document.createElement('div');
            prodottosingolo.className = 'prodottosingolosli';
            prodottosingolo.innerHTML = `
                <img class="imgprodottisli" src="${prodottox.img}">
                <div class="titoloprodottosli">${prodottox.nome}</div>
                <div class="prezzoprodottisli">${prodottox.prezzo.toFixed(2)}€</div>`; 
            contenitore_prodotti.appendChild(prodottosingolo);
        });
        modal_prodotti.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    creaelementi();
});
