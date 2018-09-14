<template>
  <b-row>
    <b-col align-self="start">&nbsp;</b-col>
    <b-col cols="6" align-self="center">
      <h2>
        Join Room
        <b-link href="#/">(Room List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Nickname">
          <b-form-input id="nickname" :state="state" v-model.trim="chat.nickname"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Join</b-button>
      </b-form>
    </b-col>
    <b-col align-self="end">&nbsp;</b-col>
  </b-row>
</template>

<!--//So here there is a tiny form, which will make a post request to store data via api-->
<!--//Then with the initated socket it will trigger a save message socket event-->
<!--//Then navigate away-->
<!-- Since we have a running socket.io server on port 4000 we can connect to it.-->

<script>


import axios from 'axios'
import * as io from 'socket.io-client'

export default {
  name: 'JoinRoom',
  data () {
    return {
      chat: {},
      socket: io('http://localhost:4000')
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.chat.room = this.$route.params.id
      this.chat.message = this.chat.nickname + ' join the room'
      axios.post(`http://localhost:3000/api/chat`, this.chat)
      .then(response => {
        this.socket.emit('save-message', { room: this.chat.room, nickname: this.chat.nickname, message: 'Join this room', created_date: new Date() });
        this.$router.push({
          name: 'ChatRoom',
          params: { id: this.$route.params.id, nickname: response.data.nickname }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
