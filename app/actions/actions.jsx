import moment from 'moment';
import firebase, {firebaseItem, firebaseRef, firebaseAuth, googleProvider, facebookProvider, twitterProvider} from 'app/firebase';
import reactHistory from 'reactHistory';

export var startAddItem = () => {
	console.log('Adding item to firebase')
}

export var addItem = (item) => {
	return {
		type: 'ADD_ITEM',
		item
	}
}

export var startRegisterUser = (username, password1, password2) => {
	console.log('Adding user to firebase.');
	if (password1 !== password2) {
		console.error("Passwords do not match.");
	} else {
		return (dispatch, getState) => {
			var userRef = firebaseAuth.createUserWithEmailAndPassword(username, password1);

				return userRef.then(() => {
						console.log('User has been added to firebase!');
						reactHistory.push('/login')
				}, (e) => {
						console.log('Error when adding user:', e.message);
				});
			}
	}
}

export var registerUser = (username) => {
	return {
		type: 'REGISTER_USER',
		username
	}
}

export var startLoginUser = (username, password) => {
	console.log('Logging in user:', username);
	return () => {
		var signInRef = firebaseAuth.signInWithEmailAndPassword(username, password);

		return signInRef.then(() => {
			console.log('Sign in successfull');
			reactHistory.push('/Home');
		}, (e) => {
			console.error('Error signing in user:', e.message);
		});
	}
}

export var googleLogin = () => {
	return () => {
		var googleRef = firebaseAuth.signInWithPopup(googleProvider);

		return googleRef.then(() => {
			console.log('Sign in successfull');
		}, (e) => {
			console.error("Error with Google login:", e.message);
		});
	}
}

export var facebookLogin = () => {
	return () => {
		var facebookRef = firebaseAuth.signInWithPopup(facebookProvider);

		return facebookRef.then(() => {
			console.log('Sign in successfull');
		}, (e) => {
			console.error("Error with Facebook login:", e.message);
		});
	}
}

export var twitterLogin = () => {
	return () => {
		var twitterRef = firebaseAuth.signInWithPopup(twitterProvider);

		return twitterRef.then(() => {
			console.log('Sign in successfull');
		}, (e) => {
			console.error("Error with Twitter login:", e.message);
		});
	}
}
