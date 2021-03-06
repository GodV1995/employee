const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  toshow: state => state.user.toshow,
  navcolor: state => state.user.navcolor,
  menus: state => state.user.menus
}
export default getters
