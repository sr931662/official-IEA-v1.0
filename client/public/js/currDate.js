// Create a new Date Object
const date = new Date();

// Get the day, month, and year
const day = String(date.getDate()).padStart(2, '0');
const month = String(date.getMonth()+1).padStart(2, '0');
const year = date.getFullYear();

// Format the date as 'dd/mm/yyyy'
const formattedDate = `${day}${month}${year}`;

export const ProjectName = `Project${formattedDate}`;