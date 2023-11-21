// function menu() {
  
//   while (true) {
//     let option = (
//       prompt(
//         `please enter your option:
//             1 - Rent a car
//             2 - Return a car
//             3 - Show All rental car
//             4 - EXIT
//         `
//       )
//     );

//     switch (option) {
//       case 1:
//         rentCar();
//         break;
//       case 2:
//         returnCar();
//         break;
//       case 3:
//         showAllCar();
//         break;
//       case 4:
//         return;
//       default:
//         break;
//     }
//   }
// }

// menu();

// let rented = [
//     {userId: 12345, carId: 4343},
//     {userId: 4985, carId: 7477}
// ]

// function rentCar(){
//     let userId =Number(prompt("Enter your id"));
//     userId= Check_if_user_exists_in_the_system(userId)
//     if(userId){
//         let carId = getUserFromRental(userId);
//         if(carId){
//             for(car of Vehicles){
//                 if (car.id === carId){
//                     return alert(
//                         `
//                         You have already rented this vehicle : ${car}
//                         `
//                     )
//                 }
//             }
//         }
//     }
// }

// function Check_if_user_exists_in_the_system(userId){
//     for(i of users){
//         if(i.id === userId){
//             return userId;
//         }
//     }
// }

// function getUserFromRental(userId){
// for(rent of rented){
//     if(rent.userId === userId){
//         return rent.carId;
        
//     }
//   }
// }