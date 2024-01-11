        function generateUsers() {
            const numberOfUsers = 20;

            fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
                .then(response => response.json())
                .then(data => {
                    const userContainer = document.getElementById('userContainer');
                    userContainer.innerHTML = '';

                    data.results.forEach(user => {
                        const userCard = document.createElement('div');
                        userCard.classList.add('user-card');

                        const userImage = document.createElement('img');
                        userImage.classList.add('user-image');
                        userImage.src = user.picture.large;
                        userImage.alt = 'User Image';

                        const userDetails = document.createElement('div');
                        userDetails.classList.add('user-details');

                        const userName = document.createElement('p');
                        userName.classList.add('userName');
                        userName.textContent = `${user.name.first} ${user.name.last}`;

                        const userAddress = document.createElement('p');
                        userAddress.textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`;

                        const userPhone = document.createElement('p');
                        userPhone.classList.add('userPhone');
                        userPhone.textContent = `Teléfono: ${user.phone}`;

                        const userEmail = document.createElement('p');
                        userEmail.classList.add('userEmail');
                        userEmail.textContent = `Email: ${user.email}`;

                        const userGender = document.createElement('p');
                        userGender.classList.add('userGender');
                        userGender.innerHTML = `Género: ${user.gender}`;


                        userDetails.appendChild(userName);
                        userDetails.appendChild(userAddress);
                        userDetails.appendChild(userPhone);
                        userDetails.appendChild(userEmail);
                        userDetails.appendChild(userGender);

                        userCard.appendChild(userImage);
                        userCard.appendChild(userDetails);

                        userContainer.appendChild(userCard.cloneNode(true));
                    });
                })
                .catch(error => {
                    console.error('Error al obtener usuarios:', error);
                });
        }

        document.addEventListener('DOMContentLoaded', generateUsers);