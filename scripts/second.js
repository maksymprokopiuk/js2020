/*
4. З клавіатури вводиться вік дитини. Вивести на екран через скільки років
вона буде відвідувати садочок, піде у школу, закінчить школу, вступить і
закінчить
*/

{
    // садок
    let startKindergarden = 3 // в якому віці починається садочок
    let finishKindergarden = 5 // до якого віку діти відвідують садочок
    // школа
    let startSchool = 6 // в якому віці починається школа
    let finishSchool = 16 // до якого віку діти відвідують школу
    // вуз
    let startHighSchool = 17
    let finishHighSchool = 23

    let yearsOfBirdsChild = parseFloat(prompt('Скільки років дитині?', 1))
    // document.write(yearsOfBirdsChild)

    let goToKindergarden = startKindergarden - yearsOfBirdsChild
    let backKindergarden = finishKindergarden - yearsOfBirdsChild
    let goToSchool = startSchool - yearsOfBirdsChild
    let backToSchool = finishSchool - yearsOfBirdsChild
    let goToHighSchool = startHighSchool - yearsOfBirdsChild
    let backHighSchool = finishHighSchool - yearsOfBirdsChild

    // Вивести на екран через скільки років вона буде відвідувати садочок
    // піде у школу
    // закінчить школу
    // вступить і закінчить

    if (yearsOfBirdsChild <= startKindergarden) { //0-2 < 3
        console.log(`Піде в садочок через ${goToKindergarden} р`);
        console.log(`Закінчить садочок через ${backKindergarden} р`);
        console.log(`Піде в школу через ${goToSchool} р`);
        console.log(`Закінчить школу через ${backToSchool} р`);
        console.log(`Піде в ВНЗ через ${goToHighSchool} р`);
        console.log(`Закінчить ВНЗ через ${backHighSchool} р`);
    }
    
    
}