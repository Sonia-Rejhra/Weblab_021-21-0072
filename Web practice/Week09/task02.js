function generateInvitations(guests, ...additionalDetails) {
  return guests.map(guest => {
    let message = `Dear ${guest.name},<br>`;
    message += `You are invited to our party!`;
    
    if (additionalDetails.length > 0) {
      message += `<br>Additional details: ${additionalDetails.join(', ')}`;
    }
    
    message += `<br>Looking forward to seeing you there!<br><br>Sincerely,<br>The Party Organizer`;
    
    return message;
  });
}

const guests = [
  { name: 'Amjad', age: 30, rsvp: 'Yes' },
  { name: 'Sattar', age: 25, rsvp: 'No' },
];

function generateInvitation() {
  const guestName = document.getElementById('guestName').value;
  if (guestName.trim() === '') {
    alert('Please enter your name.');
    return;
  }
  
  const invitation = generateInvitations([{ name: guestName }], 'Theme: Hawaiian Luau', 'Date: June 15th', 'Time: 7:00 PM')[0];

  const invitationsContainer = document.getElementById('invitations');
  const invitationElement = document.createElement('div');
  invitationElement.classList.add('invitation');
  invitationElement.innerHTML = invitation;
  invitationsContainer.appendChild(invitationElement);

  const line = document.createElement('hr'); 
  invitationsContainer.appendChild(line); 
}
