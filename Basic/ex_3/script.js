const ageCalculator = (birthYear, currentYear) => {
    return currentYear - birthYear;
   };
   
   const currentDate = new Date ();
   
   console.log(ageCalculator(1993, currentDate.getFullYear()));