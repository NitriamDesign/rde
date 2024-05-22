function formatDate(date: Date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    const day = new Date(date).getDate();
    let suffix;
    if (day > 3 && day < 21) suffix = 'th';
    else {
        switch (day % 10) {
            case 1:  suffix = "st"; break;
            case 2:  suffix = "nd"; break;
            case 3:  suffix = "rd"; break;
            default: suffix = "th";
        }
    }
    return formattedDate.replace(day, `${day}${suffix}`);
}

export let today = formatDate(new Date());