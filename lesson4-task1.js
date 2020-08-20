const userObject1 = {};
const userObject2 = {};
const userObject3 = {};

const quantityById = {
	1: 3,
	2: 4,
	3: 6,
	4: 3
};

function getQuantityOfStudents(id) {
	if (id in quantityById) {
		for (let key in quantityById) {
			if (key === id) {
				userObject1.groupSize = quantityById[key];
			}
		}
	} else {
		throw new Error('Invalid user id!');
	}
}

function generateEmail(role) {
	return `user${Math.floor(Math.random() * 1000)}@${role}.com`;
}


// Variant 1: admin, group size - ok


const promise1 = new Promise((resolve) => {
	setTimeout(() => resolve('Minsk'), 1000);
})

promise1.then(city => {
	userObject1.city = city;
	return new Promise((resolve) => {
		setTimeout(() => resolve('admin'), 4000);
	})
})
	.then(role => {
		userObject1.role = role;
		const EMAIL = generateEmail(role);
		userObject1.email = EMAIL;
		return new Promise((resolve) => {
			setTimeout(() => resolve('3'), 2000);
		})
	})
	.then(id => {
		userObject1.id = id;
		return new Promise((resolve, reject) => {
			if (userObject1.role === 'admin') {
				getQuantityOfStudents(id);
			} else {
				throw new Error('Insufficient access rights! User is not admin.');
			}
			setTimeout(() => resolve(['Саша', 'Влад', 'Юля', 'Андрей', 'Богдан']), 1000);
		})
	})
	.then(students => {
		if (students.length <= userObject1.groupSize) {
			userObject1.students = students;
		} else {
			throw new Error('Too many students for this admin!');
		}
	})
	.catch(err => console.error(err))


// Variant 2: admin, group size - too many


const promise2 = new Promise((resolve) => {
	setTimeout(() => resolve('Borisov'), 1000);
})

promise2.then(city => {
	userObject2.city = city;
	return new Promise((resolve) => {
		setTimeout(() => resolve('admin'), 4000);
	})
})
	.then(role => {
		userObject2.role = role;
		const EMAIL = generateEmail(role);
		userObject2.email = EMAIL;
		return new Promise((resolve) => {
			setTimeout(() => resolve('1'), 2000);
		})
	})
	.then(id => {
		userObject2.id = id;
		return new Promise((resolve, reject) => {
			if (userObject2.role === 'admin') {
				getQuantityOfStudents(id);
			} else {
				throw new Error('Insufficient access rights! User is not admin.');
			}
			setTimeout(() => resolve(['Саша', 'Влад', 'Юля', 'Андрей', 'Богдан']), 1000);
		})
	})
	.then(students => {
		if (students.length <= userObject2.groupSize) {
			userObject2.students = students;
		} else {
			throw new Error('Too many students for this admin!');
		}
	})
	.catch(err => console.error(err))


// Variant 3: not admin


	const promise3 = new Promise((resolve) => {
		setTimeout(() => resolve('Minsk'), 1000);
	})
	
	promise3.then(city => {
		userObject3.city = city;
		return new Promise((resolve) => {
			setTimeout(() => resolve('guest'), 4000);
		})
	})
		.then(role => {
			userObject3.role = role;
			const EMAIL = generateEmail(role);
			userObject3.email = EMAIL;
			return new Promise((resolve) => {
				setTimeout(() => resolve('2'), 2000);
			})
		})
		.then(id => {
			userObject3.id = id;
			return new Promise((resolve, reject) => {
				if (userObject3.role === 'admin') {
					getQuantityOfStudents(id);
				} else {
					throw new Error('Insufficient access rights! User is not admin.');
				}
				setTimeout(() => resolve(['Саша', 'Влад', 'Юля', 'Андрей', 'Богдан']), 1000);
			})
		})
		.then(students => {
			if (students.length <= userObject3.groupSize) {
				userObject3.students = students;
			} else {
				throw new Error('Too many students for this admin!');
			}
		})
		.catch(err => console.error(err))


