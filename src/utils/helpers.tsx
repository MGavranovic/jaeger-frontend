// NOTE: used for generating dates when adding new notes
export default function getDateTime(): string {
  const currDate: Date = new Date();

  const day: number = currDate.getDate();
  const month: number = currDate.getMonth();
  const year: number = currDate.getFullYear();

  const formattedDate: string = `${day}/${month}/${year}`;
  console.log("curr date str ------------------------- ", formattedDate);

  return formattedDate;
}
