import { Message } from 'element-ui'

export default {
  // 弹出Message
  showMessage (message, type = 'success', offset = 20) {
    Message.closeAll()
    Message({
      message: message,
      type: type,
      offset: offset
    })
  }
}
