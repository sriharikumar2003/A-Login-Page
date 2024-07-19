function validationform() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const door = document.getElementById('door').value;
  const locality = document.getElementById('locality').value;
  const city = document.getElementById('city').value;
  const pincode = document.getElementById('pincode').value;
  const phone = document.getElementById('phone').value;

  if (firstName.length < 4 || lastName.length < 4 || door.length < 4 || locality.length < 4 || city.length < 4 || pincode.length < 6 || phone.length < 10) {
      alert('All fields must be at the standard length.');
      return false;
  }

  return true;
}