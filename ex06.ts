const displayWorkingOrResting = (day: string): void => {
  enum Weekdays {
    'Lundi' = 0,
    'Mardi' = 0,
    'Mercredi' = 0,
    'Jeudi' = 0,
    'Vendredi' = 0,
    'Samedi' = 1,
    'Dimanche' = 1,
  }
  if (Weekdays[day as keyof typeof Weekdays] === undefined) {
    console.log("Ce n'est pas un jour de la semaine");
    return;
  }
  console.log(
    Weekdays[day as keyof typeof Weekdays] === 0
      ? 'Jour de travail'
      : 'Jour de repos'
  );
};

displayWorkingOrResting('Lundi');
displayWorkingOrResting('Dimanche');
displayWorkingOrResting('Mardi');
displayWorkingOrResting('Samedi');
displayWorkingOrResting('Lol');
