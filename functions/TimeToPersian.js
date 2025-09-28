export default function TimeToPersian(date) {
    // const persianTime = new Date(date).toLocaleTimeString("fa-IR", {
    //     hour12: false,
    // });
    const persianDate = new Date(date).toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return persianDate;

}