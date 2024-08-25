function addVote(){
    const name = document.getElementById('participantName').value.trim().toLowerCase();

    if (name === '')
{
    alert('Please enter a participant name');
    return
}
const votesElement ={
    zubair: document.getElementById('zubairVotes'),
    shan: document.getElementById('shanVotes'),
    haider: document.getElementById('haiderVotes')
};
if (votesElement[name] !== undefined){
    votesElement[name].textContent = parseInt(votesElement[name].textContent)+1;
} else {alert('Invalid participant name.');}

document.getElementById('participantName').value = '';
}