export default {
    register(state, userId) {
        const date = new Date;
        const user = state.users.find(u => {
          return u.id == userId
        })
        user.registered = true;
  
        const r = {
          userId: userId,
          name: user.name,
          date: date.getMonth() + '/' + date.getDay()
        }
  
        state.registrations.push(r)
      },
      unregister(state, payload) {
        const user = state.users.find(u => {
          return u.id == payload.userId
        })
        user.registered = false;
  
        const i = state.registrations.findIndex(r => {
          return r.userId == payload.userId
        })
  
        state.registrations.splice(i, 1);         
      }
}