$(document).ready(function() {

	var Contact = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		streetAddress: "",
		city: "",
		state: "",
	}

	var contacts = [];

	$('#contacts-data-submit').submit(function(event) {
		event.preventDefault();
		var firstName = $('#first-name').val();
		var lastName = $('#last-name').val();
		var phoneNumber = $('#phone-number').val();
		var streetAddress = $('#street').val();
		var city = $('#city').val();
		var state = $('#state').val();
		var contactsData = firstName + " " + lastName + " " + phoneNumber + " " + streetAddress + " " + city + " " + state;
		var c = Object.create(Contact);
		c.firstName = firstName;
		c.lastName = lastName;
		c.phoneNumber = phoneNumber;
		c.streetAddress = streetAddress;
		c.city = city;
		c.state = state;
		contacts.push(c);

		var entry = $('<li>');
		entry.addClass('contacts-entry');
		entry.text(c.firstName + " " + c.lastName);
		entry.data('index', contacts.length - 1);

		$('.contacts-list').append(entry);

		console.log(contactsData);
		console.log(contacts);

		document.getElementById("contacts-data-submit").reset();

		/*displayContacts(firstName, lastName, phoneNumber, streetAddress, city, state);*/
		/*createContact(firstName, lastName, phoneNumber, streetAddress, city, state);*/
	});

	$('.contacts-list').on('click', '.contacts-entry', function() {
		$('#contacts-display-content').empty();
		$('#contacts-display-content').append("<h2>" + contacts[$(this).data('index')].firstName + " " + contacts[$(this).data('index')].lastName + "</h2>" + contacts[$(this).data('index')].streetAddress + "<br>" + contacts[$(this).data('index')].city + ", " + contacts[$(this).data('index')].state + "<br>" + contacts[$(this).data('index')].phoneNumber);
		console.log($(this).data('index'));
	});
});
