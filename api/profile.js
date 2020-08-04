export default {
  getProfile() {
    return new Promise((resolve, reject) => {
      return resolve({
        name: 'Marcus Obrien',
        email: 'test@gmail.test',
        job: 'Network Engineer',
        img: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
      })
    })
  }
}
