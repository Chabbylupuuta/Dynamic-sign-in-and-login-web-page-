const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');
const switchSound = document.getElementById('switchSound'); // Get the audio element

signUpLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signIn');
  wrapper.classList.remove('animate-signUp');
  switchSound.play(); // Play the sound when switching
});

signInLink.addEventListener('click', () => {
  wrapper.classList.add('animate-signUp');
  wrapper.classList.remove('animate-signIn');
  switchSound.play(); // Play the sound when switching
});
