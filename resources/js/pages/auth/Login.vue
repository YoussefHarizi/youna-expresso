<template>
  <div>
  <div class="w-full h-screen md:-mx-4" style="filter: blur(6px); background-image:url('/images/bg1.jpg')"></div>
        <div class="absolute w-3/5 bg-white" style="transform: translate(-50%, -50%); top:50%; left:50%">
            <div class="flex justify-center -mt-10">
                <img class="border-2 w-20 h-20 rounded-full" src="/images/ys.jpg">
            </div>
             <form @submit.prevent="login" @keydown="form.onKeydown($event)">
            <div class="px-12 py-10">
              <div class="w-full mb-2">
                <div class="flex items-center">
                  <i class='ml-3 fill-current text-gray-400 text-xs z-10 far fa-user'></i>
                  <input type='email' name="email" placeholder="email" v-model="form.email" class="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700" />
                  <HasError :form="form" field="email" />
            	</div>
            </div>
            <div class="w-full mb-2">
                <div class="flex items-center">
                  <i class='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                  <input type='password' name="password" placeholder="password" v-model="form.password" class="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700" />
                  <HasError :form="form" field="password" />
                </div>
            </div>
            <div class="mt-8 flex justify-between">
                <div class="flex items-center">
                  <input type="checkbox" class="w-4 h-4 mr-2">
                  <span class="text-xs text-gray-700">Remember Me</span>
                </div>
				<div>
                  <button type='submit' :disabled="form.busy" class="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2">SIGN IN</button>
                </div>
            </div>
          </div>
             </form>
        </div>
  </div>
</template>

<script>
import {Form} from 'vform'
import { Button, HasError, AlertError } from 'vform/src/components/tailwind'
export default {
  components: {
    Button, HasError, AlertError
  },
  data(){
    return{
      form:new Form({
        email:'',
        password:'',
        remember:false
      })
    }
  },
  methods: {
    async login () {
      const response = await this.form.post('/api/v1/admin/login')
      // ...
    }
  }


}
</script>

<style>

</style>