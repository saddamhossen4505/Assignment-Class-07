



// 1. Total admission fees:
// ========================


console.log(`
    1. Calculate Total Admission fees :
    ===================================
`);

let total_fees = 0;
studentsdb.sort().forEach((data, index) => {
    console.log(`
        Name :--------------> ${data.name};
        Admission fees :----> ${data.fees}
    `);
    total_fees += data.fees;
});
console.log(`
    ---------------------------------------
        Total Admission fess = ${total_fees} TK.
`);


// 2. All Female Students List:
// =============================

console.log(`
    2. All Female Student List :
    ============================
`);

for( data of studentsdb ){
    if( data.gender === 'Female' ){
        console.log(`
            Name : ${data.name};
            Class : ${ data.className};
            Roll : ${ data.roll};
            Gender : ${ data.gender};
        `);
    }
}



// 3. Class wise student result :
// ==============================

console.log(`
    3. Class wise student result :
    ==============================
`);


studentsdb.map(( data ) => {
    if( data.className === 'Eleven' ){
        console.log(`
            Name : ${ data.name };
            Class : ${ data.className };
            Roll : ${ data.roll };
            Gender : ${ data.gender };
            Location : ${ data.location };
        `);
    }
});


// 4. Location wise student result :
// =================================

console.log(`
    4. Location wise student result :
    =================================
`);

studentsdb.forEach(( data, index ) => {
    if( data.location === 'Gaibandha'){
       console.log(`
            Name : ${data.name};
            Class : ${data.className};
            Roll : ${ data.roll };
            Age : ${ data.age };
            Location : ${ data.location };
       `);
    }
})



// 5. Find all student between 10-25 years old. :
// ==============================================

console.log(`
    5. All student of 10-25 years old. :
    ====================================
`);


for( data of studentsdb ){
    if( data.age >= 10 && data.age <= 25 ){
        console.log(`
            Name : ${data.name};
            Age : ${data.age};
            Class : ${ data.className};
            Roll : ${ data.roll};
            Gender : ${ data.gender};
            Location : ${ data.location }
        `);
    }
};




