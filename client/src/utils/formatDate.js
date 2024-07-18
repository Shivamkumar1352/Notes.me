export const formatDate=(date)=>{
    const d = new Date(date);
    return d.toDateString().split(' ').slice(1).join(' ');
}