const prompt = require("prompt-sync")();
let choix ;

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let nextTicketId = 1 ;
let tickets = [] ;


function AfficherMenu(){
    console.log("=================")
    console.log("RAILWAY MANAGER")
    console.log("=================")
    console.log("1. Afficher les trajets")
    console.log("2. Acheter un ticket")
    console.log("3. Afficher les tickets")
    console.log("4. Annuler un ticket")
    console.log("5. Rechercher un ticket")
    console.log("6. Filtrer les trajets")
    console.log("7. Trier les trajets")
    console.log("8. Afficher nombre total des tickets")
    console.log("9. Afficher chiffre d'affaires")
    console.log("0. Quitter")
}  
function SelectionChoix(choix){
switch(choix){
        case 1 :
            AfficherTrajets()
            break;
        
        case 2 : 
            AcheterTicket()
            break;
        
        case 3 :
            AfficherTickets
            break;
        
        case 4 :
             AnnulerTicket()
            break;
        
        case 5 : 
            RechercherTicket()
            break;
        
        case 6 : 
            FiltrerTrajets()
            break;
        
        case 7 :
            TrierTrajets()
            break;
        } 
}  
function AfficherTrajets(){
    console.log("===TRAJETS DISPONIBLES===")
    for(i=0;i<trips.length;i++){
         console.log("===  ===")
         console.log("#",trips[i].id+trips[i].departure+"=>"+trips[i].destination)
         console.log("Départ :"+trips[i].departureTime)
         console.log("Arrivée :"+trips[i].arrivalTime)
         console.log("prix :"+trips[i].price)
         console.log("places disponibles :"+trips[i].availableSeats)
    }

}
function place(identifiant){
    let placeIndispo = [];
    if(tickets.length == 0 ){
        return 1 ;
    }    
    for(i=0;i<tickets.length;i++){
        if(tickets[i].tripId == identifiant){
            placeIndispo.push(tickets[i].seatNumber)
        }
    }
    for(i=1;i<50;i++){
        if(!placeIndispo.includes(i)){
            return i ;
            
        }    
        }
    
}
function AcheterTicket(){
   nom = prompt("Entrer votre nom: ") ;
   identifiant = prompt("entrer votre identifiant du trajet:  ") ;
   trajet = trips.find((ele)=>ele.id==identifiant)
   if(!trajet ){
    console.log("trajet introuvable")   
   }else{
   if(trajet.availableSeats == 0){
    console.log("Train complet")
   }else{
seatNumber= place(identifiant) ; 
   let ticket = { id : nextTicketId ,
                  passengerName : nom  ,
                  tripId : trajet.id ,
                  seatNumber : seatNumber ,
                  price : trajet.price
   }
   trajet.seatNumber--;
   nextTicketId++;
   tickets.push(ticket)
   console.log("Ticket acheté avec succès.")
   console.log("Ticket: ",ticket.id)
   console.log("Passager: ",ticket.passengerName)
   console.log("Trajet: ",trajet.departure,"=>",trajet.destination)
   console.log("Place: ",ticket.seatNumber)
   console.log("Price: ",ticket.price)

}
 
}
}
function AfficherTickets(){
    if(tickets.length==0){
        console.log("aucun ticket est disponible")
        return;
    }
    console.log("====TICKETs====")
    for(let i=0;i<tickets.length;i++){
     console.log("========")
     console.log("Ticket # ",tickets[i].id)
     console.log("passager",tickets[i].passengerName)
     let trajet = trips.find((ele)=>ele.id == tickets[i].tripId)
     console.log("trajet :" ,trajet.departure, "=>", trajet.destination)
     console.log("place :", tickets[i].seatNumber)
     console.log("prix :", tickets[i].price)
    }
   
}

function AnnulerTicket(){
    identifiant = Number(prompt("entrer votre identifiant du ticket ")) ;
    for(i=0;i<tickets.length;i++){
        if(tickets[i].id == identifiant){
            trajet = trips.find((trajet)=> trajet.id==tickets[i].tripId)
            trajet.availableSeats++
            tickets.splice(i,1)
        }
    }

}
function RechercherTicket(){
    nom = prompt("entrer votre nom ");
    for(i=0;i<tickets.length;i++){
    if(tickets[i].passengerName == nom ){
    let trajet = trips.find(tj=>tj.id == tickets[i].tripId) 
    console.log("ticket #",tickets[i].id) 
    console.log("passager:",tickets[i].passengerName) 
    console.log("trajet :",trajet.departure,"==>",trajet.destination) 
    console.log("place :",tickets[i].seatNumber)
    console.log("prix :",tickets[i].price)
    }    
    }
}
function FiltrerTrajets(){
    ville = prompt("entrer votre ville de depart ")
    for(i=0;i<trips.length;i++){
        if(trips[i].departure==ville){
            console.log(trips[i].departure,"=>",trips[i].destination,":",trips[i].price,"DH")
        }
       
        
    }
}
function TrierTrajets(){
    for(i=0;i<trips.length;i++){
        for(j=0;j<trips.length-1-i;j++){
            if(trips[j].price>trips[j+1].price){
                let temp = trips[j] ;
                trips[j] = trips[j+1]
                trips[j+1] = temp 
            }
        }
    }
    for(i=0;i<trips.length;i++){
        console.log(trips[i].departure , "=>" ,trips[i].destination,":",trips[i].price,"DH")
    }
}
function NombreTotalTickets(){
    let nombreTotalTickets = tickets.length ;
    console.log("Nombre total de tickets :" , nombreTotalTickets)
}
function ChiffreAffaires(){
    let somme = 0 ;
    for(i=0;i<tickets.length;i++){
        somme = somme + tickets[i].price
    }
    console.log("Chiffre d'affaires total :" , somme)
}

do{
    AfficherMenu()
    choix = Number(prompt("entrer votre choix ")) ;

    switch(choix){
        case 1 :
            AfficherTrajets()
            break;
        
        case 2 : 
            AcheterTicket()
            break;
        
        case 3 :
            AfficherTickets()
            break;
        
        case 4 :
             AnnulerTicket()
            break;
        
        case 5 : 
            RechercherTicket()
            break;
        
        case 6 : 
            FiltrerTrajets()
            break;
        
        case 7 :
            TrierTrajets()
            break;
        case 8 :
            NombreTotalTickets()
            break;
        case 9 :
            ChiffreAffaires() 
            break;       
        } 

            
} while (choix !== 0)


