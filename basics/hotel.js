let acRooms = 30;
    let duelexRooms = 20;
    let pentHouse = 10;
function rooms(type){
    
    if (type == 'acRooms'){acRooms--}
    if (type == 'duelexRooms'){duelexRooms--}
    if (type == 'pentHouse') {pentHouse--}
}
function hotelRooms(type){
    rooms(type)
        return (`The rooms booked ${type}
        and remaining available rooms are
        AC Rooms = ${acRooms}
        Duelex Rooms = ${duelexRooms}
        Pent House = ${pentHouse}`)
     
}
let bookedRoom = hotelRooms('acRooms')
console.log(bookedRoom)